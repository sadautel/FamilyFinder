import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { TreeService } from 'src/app/tree/tree.service';
import { Tree } from 'src/app/tree/tree.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;

  messageSender: string;
  constructor(private treeService: TreeService) {}

  ngOnInit() {
     const tree: Tree = this.treeService.getTree(this.message.sender);
     this.messageSender = tree.lastName;
  }
}
