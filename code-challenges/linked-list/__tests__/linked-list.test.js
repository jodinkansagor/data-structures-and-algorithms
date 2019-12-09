const { LinkedList } = require('../linked-list');

describe('linked list tests', () => {

  it('instantiates a new list', () => {
    const newList = new LinkedList;
    expect(newList).toBeNull;
  });

  it('inserts into the list', () => {
    const newList = new LinkedList;
    const insertOne = newList.insert(5);
    expect(insertOne).toEqual({ 'head': { 'next': { 'next': null, 'value': undefined }, 'value': 5 }, 'length': 2 });
  });

  it('the head property points to the first node', () => {
    const newList = new LinkedList;
    const insertOne = newList.insert(5);
    const insertTwo = insertOne.insert(10);
    expect(insertTwo.head.value).toEqual(10);
  });

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

  it('has a method that returns true when looking for a value that is not in the list', () => {
    const newList = new LinkedList();
    const insertOne = newList.insert(4);
    const insertTwo = insertOne.insert(10);
    const hasValue = insertTwo.includes(10);
    expect(hasValue).toBeTruthy;

  });

  it('has a method that returns false if the value is found', () => {
    const newList = new LinkedList();
    const insertOne = newList.insert(4);
    const insertTwo = insertOne.insert(10);
    const hasValue = insertTwo.includes(12);
    expect(hasValue).toBeFalsy;
  });

  it('can properly return a collection of all the values in a string', () => {
    const newList = new LinkedList();
    const insertOne = newList.insert(4);
    const insertTwo = insertOne.insert(10);
    const string = insertTwo.toString();
    expect(string).toEqual('10,4,');

  });
});
