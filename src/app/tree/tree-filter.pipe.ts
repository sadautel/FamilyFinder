import { Pipe, PipeTransform } from '@angular/core';
import { Tree } from './tree.model';
@Pipe({
  name: 'treeFilter'
})
export class TreeFilterPipe implements PipeTransform {


transform(trees: Tree[], term) { 
  let filteredArray: Tree[] =[];  
  for (let i=0; i<trees.length; i++) {
     let tree = trees[i];
     if (tree.lastName.toLowerCase().includes(term) || tree.firstName.toLowerCase().includes(term)) {
        filteredArray.push(tree);
     }
  }
  if (filteredArray.length < 1){
     return trees;
  }
  return filteredArray;
 }

}