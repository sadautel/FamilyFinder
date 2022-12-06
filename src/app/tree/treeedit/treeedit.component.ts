import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tree } from '../tree.model';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-treeedit',
  templateUrl: './treeedit.component.html',
  styleUrls: ['./treeedit.component.css']
})
export class TreeeditComponent implements OnInit {
  @ViewChild('f') treeForm!: NgForm;
  subscription: Subscription;
  originalTree: Tree;
  groupTree: Tree[] = [];
  tree: Tree;
  editMode: boolean = false;
  id: string;

  constructor(
    private treeService: TreeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      let id = params.id;
      if (!id || id == null) {
        this.editMode = false;
        return;
      }

      this.originalTree = this.treeService.getTree(id);

      if (this.originalTree == null || !this.originalTree) {
        return;
      }
      this.editMode = true;
      this.tree = JSON.parse(JSON.stringify(this.originalTree));

    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTree = new Tree(
      value.id,
      value.firstName,
      value.lastName,
      value.birthDate,
      value.deathDate,
      value.imageUrl,
    );
    if (this.editMode && this.originalTree) {
      this.treeService.updateTree(this.originalTree, newTree);
    } else {
      this.treeService.addTree(newTree);
    }

    this.router.navigate(['/tree']);
  }

  onCancel() {
    this.router.navigate(['/tree']);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
