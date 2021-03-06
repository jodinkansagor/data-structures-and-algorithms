/* eslint-disable no-inner-declarations */
// const { Tree } = require('../tree/tree.js');

function fizzBuzzTree(tree) {

  if (tree.root == null) {
    return null;
  } else {
    function travPreOrder(node) {
      if (node.value % 3 === 0) {
        node.value = 'Fizz';
      } else if (node.value % 5 === 0) {
        node.value = 'Buzz';
      } else if (node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'FizzBuzz';
      } else node.value = node.value.toString();
      node.left && travPreOrder(node.left);
      node.right && travPreOrder(node.right);
    }
    travPreOrder(tree.root);
    return tree;
  }

}

module.exports = { fizzBuzzTree };
