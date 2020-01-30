const { Tree } = require('../tree/tree.js');
const { fizzBuzzTree } = require('./fizzBuzzTree.js');

describe('fizzBuzzTree', () => {
  it('makes all the replacements it needs to make', () => {
    const tree = new Tree();
    tree.add(4);
    tree.add(2);
    tree.add(5);
    tree.add(15);
    tree.add(9);
    tree.add(72);
    tree.add(50);
    tree.add(17);
    const newTree = fizzBuzzTree(tree);
    console.log(newTree);
    expect(newTree.inOrder()).toEqual(['2', '4', 'Buzz', 'Fizz', 'Fizz', '17', 'Buzz', 'Fizz']);
  });
});
