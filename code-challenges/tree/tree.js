/* eslint-disable no-inner-declarations */
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
  }

  pop() {
    if (!this.top) return null;

    const top = this.top;
    this.top = top.next;
    return top;
  }

  peek() {
    if (!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}
class PseudoQueue {
  constructor() {
    this.stackOne = new Stack(),
      this.stackTwo = new Stack();
  }

  enqueue(value) {
    while (!this.stackOne.isEmpty()) {
      const top = this.stackOne.pop(this.stackOne.top);
      this.stackTwo.push(top.value);
    }

    this.stackTwo.push(value);

    while (!this.stackTwo.isEmpty()) {
      const top = this.stackTwo.pop(this.stackTwo.top);


      this.stackOne.push(top.value);
    }

    return this.stackOne;
  }

  dequeue() {
    this.stackOne.pop();
    return this.stackOne;
  }

  toString() {
    let currentNode = this.stackOne.top;
    let string = '';
    while (currentNode) {
      string += currentNode.value.toString() + ' -> ';
      currentNode = currentNode.next;
    }
    return string;


  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    } else {
      const addIt = function(node) {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            return addIt(node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else if (node.right !== null) {
            return addIt(node.right);
          }
        } else {
          return null;
        }
      };
      return addIt(node);
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      const result = new Array();
      // eslint-disable-next-line no-inner-declarations
      function travPreOrder(node) {
        result.push(node.value);
        node.left && travPreOrder(node.left);
        node.right && travPreOrder(node.right);
      }
      travPreOrder(this.root);
      return result;
    }
  }

  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = new Array();
      function travInOrder(node) {
        node.left && travInOrder(node.left);
        result.push(node.value);
        node.right && travInOrder(node.right);
      }
      travInOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = new Array();
      function travPostOrder(node) {
        node.left && travPostOrder(node.left);
        node.right && travPostOrder(node.right);
        result.push(node.value);
      }
      travPostOrder(this.root);
      return result;
    }
  }

  findMaxValue() {
    if (this.root === null) {
      return null;
    } else {
      let maxValue = 0;
      function findMaxValue(node) {
        if (node.value > maxValue) {
          maxValue = node.value;
        }
        node.left && findMaxValue(node.left);
        node.right && findMaxValue(node.right);
      }
      findMaxValue(this.root);
      return maxValue;
    }
  }


  breadthfirst() {

    if (this.root === null) {
      return null;
    }

    const queue = new PseudoQueue();
    queue.enqueue(this.root);

    while (queue.length > 0) {
      const currentNode = queue.top;
      if (currentNode.left !== null) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.enqueue(currentNode.right);
      }
      // queue.dequeue();
    }
    return queue.toString();
  }

}




module.exports = { Node, Tree, PseudoQueue };
