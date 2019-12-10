const { LinkedList } = require('../linked-list');

describe('linked list tests', () => {

  it('instantiates a new list', () => {
    const newList = new LinkedList;
    expect(newList).toBeNull;
  });

  it('inserts into the list', () => {
    const newList = new LinkedList(15);
    newList.insert(5);
    expect(newList.toString()).toEqual('5 -> 15');
  });

  it('the head property points to the first node', () => {
    const newList = new LinkedList(5);
    newList.insert(10);
    expect(newList.head.value).toEqual(10);
  });

  it('can properly insert multiple nodes into the list', () => {
    const newList = new LinkedList(4);
    newList.insert(10);
    newList.insert(15);
    expect(newList.toString()).toEqual('15 -> 10 -> 4');

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
    const newList = new LinkedList(5);
    newList.insert(4);
    newList.insert(10);
    const string = newList.toString();
    expect(string).toEqual('10 -> 4 -> 5');
  });

  it('can add a new node to the end of the list', () => {
    const newList = new LinkedList(13);
    newList.append(17);

    expect(newList.toString()).toEqual('13 -> 17');
  });

  it('can add a value in the middle of a list before a specific value', () => {
    const newList = new LinkedList(24);
    newList.insert(5);
    newList.insertBefore(24, 15);
    expect(newList.toString()).toEqual('5 -> 15 -> 24');
  });

  it('can insert a value after a specific value in your list', () => {
    const newList = new LinkedList(17);
    newList.insert(10);
    newList.insert(18);
    newList.insert(22);
    newList.insertAfter(10, 15);
    expect(newList.toString()).toEqual('22 -> 18 -> 10 -> 15 -> 17');
  });
});
