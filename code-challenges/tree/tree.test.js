const { Tree } = require ('./tree.js');

describe('binary tree', () => {
  it('instatiates an empty tree', ()  => {
    const tree = new Tree();
    expect(tree).tobeNull;
  });

  it('instantiates a tree with a single root node', () => {
    const tree = new Tree();
    tree.addValue(4);
    expect(tree.root).toEqual({ 'left': null, 'right': null, 'value': 4 });
  });
});

