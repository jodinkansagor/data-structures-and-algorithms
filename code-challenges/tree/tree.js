class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  addNode(value) {
    const node = new Node(value);
    if (node.value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    } else if (node.value > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addValue(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }
}

function start() {
  const tree = new Tree();
  tree.addValue(4);
  tree.addValue(23);
  tree.addValue(45);
  tree.addValue(13);
  console.log(tree);
}
start();

module.exports = { Node, Tree };
