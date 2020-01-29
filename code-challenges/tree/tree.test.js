const { Tree } = require('./tree.js');

describe('binary tree', () => {
  it('instatiates an empty tree', () => {
    const tree = new Tree();
    expect(tree).tobeNull;
  });

  it('instantiates a tree with a single root node', () => {
    const tree = new Tree();
    tree.add(4);
    expect(tree.root).toEqual({ 'left': null, 'right': null, 'value': 4 });
  });

  // it('can successfully add a right child and a left child to a single root node', () => {
  //   const tree = new Tree();
  //   tree.addValue(4);
  //   tree.addValue(2);
  //   tree.addValue(5);
  //   expect(tree).toEqual({});
  // });

});

