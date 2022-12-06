import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Tree } from '../tree.model';

@Component({
  selector: 'app-treeitem',
  templateUrl: './treeitem.component.html',
  styleUrls: ['./treeitem.component.css']
})
export class TreeitemComponent implements OnInit {
  @Input() tree: Tree; 
  constructor() { }

  ngOnInit(): void {
  }


}
