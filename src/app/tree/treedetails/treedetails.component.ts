import { Component, OnInit, Input } from '@angular/core';
import { Tree } from '../tree.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TreeService } from '../tree.service';


@Component({
  selector: 'app-treedetails',
  templateUrl: './treedetails.component.html',
  styleUrls: ['./treedetails.component.css']
})
export class TreedetailsComponent implements OnInit {
 @Input() tree: Tree;
 constructor( private treeService: TreeService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tree = this.treeService.getTree(params['id']);
    });
  }
}
