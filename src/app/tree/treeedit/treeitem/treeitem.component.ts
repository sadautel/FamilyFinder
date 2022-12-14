import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Tree } from '../../tree.model';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { TreeService } from '../../tree.service';

interface tree {
  id: string,
  firstName: string,
  lastName: string,
  gender: string,
  birthDate: string,
  birthPlace: string,
  deathDate: string,
  deathPlace: string,
  motherFirstName: string,
  motherLastName: string,
  fatherFirstName: string,
  fatherLastName: string,
  imageUrl: string
}

@Component({
  selector: 'app-treeitem',
  templateUrl: './treeitem.component.html',
  styleUrls: ['./treeitem.component.css']
})

export class TreeitemComponent implements OnInit {
  @Input() tree: Tree; 
 
  constructor(private treeService: TreeService) { }

  ngOnInit(): void {
  }


}
