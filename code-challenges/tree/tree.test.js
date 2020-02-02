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

  it('can successfully add a right child and a left child to a single root node', () => {
    const tree = new Tree();
    tree.add(4);
    tree.add(2);
    tree.add(5);
    expect(tree).toEqual({
      'root': {
        'left': {
          'left': null,
          'right': null,
          'value': 2,
        }, 'right': {
          'left': null,
          'right': null,
          'value': 5,
        },
        'value': 4,
      }
    });
  });

  it('can tell if a value is in the tree', () => {
    const tree2 = new Tree();
    tree2.add(4);
    tree2.add(2);
    tree2.add(5);
    expect(tree2.contains(2)).toBeTruthy;
    expect(tree2.contains(17)).toBeFalsy;
  });

  it('can traverse preOrder', () => {
    const tree = new Tree();
    tree.add(4);
    tree.add(2);
    tree.add(5);
    expect(tree.preOrder()).toEqual([4, 2, 5]);
  });

  it('can traverse inOrder', () => {
    const tree = new Tree();
    tree.add(4);
    tree.add(2);
    tree.add(5);
    expect(tree.inOrder()).toEqual([2, 4, 5]);
  });

  it('can traverse postOrder', () => {
    const tree = new Tree();
    tree.add(4);
    tree.add(2);
    tree.add(5);
    tree.add(7);
    tree.add(3);
    expect(tree.postOrder()).toEqual([3, 2, 7, 5, 4]);
  });

  it('can traverse the tree breadth first', () => {
    const tree = new Tree();
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(17);
    tree.add(20);
    expect(tree.breadthfirst()).toEqual([10, 5, 15, 2, 7, 17, 20]);
  });
});

