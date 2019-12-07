const { LinkedList, Node } = require('../linked-list');

describe('linked list tests', () => {
  it.skip('instantiates a new list', () => {
    const newList = new LinkedList;
    expect(newList).toBeNull;
  });

  it.skip('inserts into the list', () => {
    const newList = new LinkedList;
    const insertOne = newList.insert(5);
    expect(insertOne).toEqual({ 'head': { 'next': { 'next': null, 'value': undefined }, 'value': 5 }, 'length': 2 });
  });

  // it('the head property points to the first node', () => {

  // });

  it('can properly insert multiple nodes into the list', () => {
    const newList = new LinkedList();
    const insertOne = newList.insert(4);
    const insertTwo = insertOne.insert(10);
    expect(insertTwo).toEqual({
      'head': {
        'next': {
          'next': {
            'next': null,
            'value': undefined,
          },
          'value': 4,
        },
        'value': 10,
      },
      'length': 3,

    });

  });

  it('has a method that returns true if the value is found', () => {

  });

  // it('has a method that returns false when looking for a value that is not in the list', () => {

  // });

  // it('can properly return a collection of all the values in a string', () => {

  // });
});
