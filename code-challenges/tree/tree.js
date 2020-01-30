/* eslint-disable no-inner-declarations */
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
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
    if(this.root === null) {
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
    if(this.root === null) {
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

}




module.exports = { Node, Tree };
