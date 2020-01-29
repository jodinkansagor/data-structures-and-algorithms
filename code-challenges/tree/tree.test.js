const { Tree } = require ('./tree.js');

describe('binary tree', () => {
  it('instatiates an empty tree', ()  => {
    const tree = new Tree();
    expect(tree).tobeNull;
  });
});

