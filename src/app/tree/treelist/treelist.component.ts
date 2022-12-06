import { Component,  OnDestroy,  OnInit} from '@angular/core';
import { Tree } from '../tree.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TreeService } from '../tree.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-treelist',
  templateUrl: './treelist.component.html',
  styleUrls: ['./treelist.component.css']
})
export class TreelistComponent implements OnInit, OnDestroy {
  tree: Tree[] = [];
  private subscription: Subscription;
  term: String='';
  value: string;

  constructor(private treeService: TreeService, private Route:ActivatedRoute, private Router: Router) { }

  ngOnInit(): void {
    this.subscription = this.treeService.treeListChangedEvent.subscribe((trees: Tree[]) => {
      this.tree = trees;
    });
    this.treeService.getTrees();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  search(value:string) {
    this.term = value;
  }
  

}
