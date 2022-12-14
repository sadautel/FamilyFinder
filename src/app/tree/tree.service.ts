import {Injectable, EventEmitter} from '@angular/core';
import {Tree} from './tree.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { take } from 'rxjs/operators'

  @Injectable({
    providedIn: 'root'
})
  export class TreeService {
    private trees: Tree [] =[];
    treeChangedEvent = new EventEmitter<Tree[]>();
    treeListChangedEvent = new Subject<Tree[]>();
    maxTreeId: number;


    constructor(private http: HttpClient, private authService: AuthService) {
       this.getTrees();
       this.maxTreeId = this.getMaxId();
    }

    

    sortAndSend() {
      this.trees.sort((first, second) => {
        if (first < second) return -1;
        if (first > second) return 1;
        return 0;
      });
      this.treeListChangedEvent.next(this.trees.slice());
    }

    getTrees(){ 
      const token = this.authService.user.subscribe().unsubscribe();
      return this.http.get<{ message: string; trees: Tree[] }>(
        'http://localhost:3000/tree'
      )
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.trees = response.trees;
          this.sortAndSend();
        },
        error: (error) => {
          console.error(error.message);
          console.error(error.error);
        },
      });
  }
    

  getTree(id: string): Tree {
    return this.trees.find(
      (tree) => tree.id === id || tree._id === id
    );
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
 
    if (!newTree) return;
    newTree.id = '';
    this.http
      .post<{ message: string; tree: Tree }>(
        'http://localhost:3000/tree',
        newTree,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      )
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.trees.push(response.tree);
          this.sortAndSend();
        },
        error: (error) => {
          console.error(error.message);
          console.error(error.error);
        },
      });
  }
 
   updateTree(originalTree: Tree, newTree: Tree) {
    if (!newTree || !originalTree) return;
    const pos = this.trees.indexOf(originalTree);
    if (pos < 0) return;

    newTree.id = originalTree.id;
    newTree._id = originalTree._id;
    this.http
      .put<{ message: string }>(
        'http://localhost:3000/tree/' + originalTree.id,
        newTree,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }
      )
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.trees[pos] = newTree;
          this.sortAndSend();
        },
        error: (error) => {
          console.error(error.message);
          console.error(error.error);
        },
      });
  }
 }