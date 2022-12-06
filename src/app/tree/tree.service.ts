import {Injectable, EventEmitter} from '@angular/core';
import { MOCKTREE } from './MOCKTREE';
import {Tree} from './tree.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


  @Injectable({
    providedIn: 'root'
})
  export class TreeService {
    private trees: Tree [] =[];
    treeChangedEvent = new EventEmitter<Tree[]>();
    treeListChangedEvent = new Subject<Tree[]>();
    maxTreeId: number;


    constructor(private http: HttpClient) {
       this.getTrees();
       this.maxTreeId = this.getMaxId();
    }

    getTrees(){
      this.http.get('https://familyfinder-20a8c-default-rtdb.firebaseio.com/tree.json')
        .subscribe(
          // success method
          (trees: Tree[]) => {
            this.trees = trees;
            this.maxTreeId = this.getMaxId();
            this.trees.sort((a, b) => (a.firstName < b.firstName) ? 1 : (a.lastName > b.lastName) ? -1 : 0)
            this.treeListChangedEvent.next(this.trees.slice());
          },
          // error method
          (error: any) => {
            console.log(error);
          }
        )
    }

    getTree(id: string) {
     for(let tree of this.trees){
       if(tree.id === id){
         return tree;
       }
     }
     return null;
    } 
    deleteTree(tree: Tree) {
     if (tree === null || tree === undefined) {
       return;
     }
     const pos = this.trees.indexOf(tree);
 
     if (pos < 0) {
       return;
     }
     this.trees.splice(pos, 1);
     this.treeListChangedEvent.next(this.trees.slice());
   }

   getMaxId(): number {
     let maxId = 0;
     for (const tree of this.trees) {
       const currentId = +tree.id;
       if (currentId > maxId) {
         maxId = currentId;
       }
     }
     return maxId;
   }
 
   addTree(newTree: Tree) {
 
     if (newTree === null || newTree === undefined) {
       return;
     }
     this.maxTreeId++;
     newTree.id = this.maxTreeId.toString();
     this.trees.push(newTree);
     this.storeTree();
   }
 
   updateTree(originalTree: Tree, newTree: Tree) {
     if (originalTree === null || originalTree === undefined || newTree === null || newTree === undefined) {
 
       return;
     }
     const pos = this.trees.indexOf(originalTree);
     if (pos < 0) {
       return;
     }
     newTree.id = originalTree.id;
     document[pos] = newTree;
     this.storeTree();
   }    

   storeTree() {
    let trees = JSON.stringify(this.trees);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put('https://familyfinder-20a8c-default-rtdb.firebaseio.com/tree.json', trees, { headers: headers })
      .subscribe( () => {
          this.treeListChangedEvent.next(this.trees.slice());
        }
      )
  }
 }