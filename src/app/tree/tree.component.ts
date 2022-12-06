import { Component, OnInit } from '@angular/core';
import { Tree } from './tree.model';
import { TreeService } from './tree.service';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  selectedTree: Tree;
    
  constructor(private treeService: TreeService) { }

  ngOnInit(){
    this.treeService.treeChangedEvent.subscribe((tree: Tree) => {
      this.selectedTree = tree;
    });
  }

}
