// copied from breadth-first.js to preserve that file

Class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(tree) {
        this.root = tree.root;
    }
    preOrder(){
        if(!this.root) return;
        const array = [];
        (function castPreArray(current){
          if(current){
            array.push(current.value);
            castPreArray(current.left);
            castPreArray(current.right);
          }
        }).apply(null, [this.root]);
        return array;
    }
    inOrder(){
        if(!this.root) return;
        const array = [];
        (function castInArray(current){
          if(current){
            castInArray(current.left);
            array.push(current.value);
            castInArray(current.right);
          }
        }).apply(null, [this.root]);
        return array;
    }

    breadthFirst(){
        if(!this.root) return;
        const queue = [this.root];
        const results = [];

        while(queue.length > 0) {
        const current = queue[0];
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
        results.push(queue.shift().value);
        }
        return results;
    }

  breadthFirst() {
      if(!this.root) return;
      const queue = [this.root];
      const results = [];

      while(queue.length > 0) {
          const current = queue[0];
          if(current.left) queue.push(current.left);
          if(current.right) queue.push(current.right);
          results.push(queue.shift().value)
      }
      return results; 
  }

  findMax() {
    if(!this.root) return;
    let max = this.root.value;

   // make a function
   // redefine max to hold max value of a whole number
   // keep track of previous value and current left and right nodes 
   // check it against the root
   // return/ find max value
  }
}

