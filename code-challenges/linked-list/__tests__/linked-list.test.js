
const { LinkedList, mergeLists } = require('../linked-list');

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
    newList.insert(18);
    newList.insertBefore(24, 15);
    expect(newList.toString()).toEqual('18 -> 5 -> 15 -> 24');
  });

  it('can add a value at the beginning of a list before a specific value', () => {
    const newList2 = new LinkedList(72);
    newList2.insert(53);
    newList2.insert(36);
    newList2.insertBefore(36, 'hi');
    expect(newList2.toString()).toEqual('hi -> 36 -> 53 -> 72');
  });

  it('can insert a value after a specific value in your list', () => {
    const newList = new LinkedList(17);
    newList.insert(10);
    newList.insert(18);
    newList.insert(22);
    newList.insertAfter(18, 890);
    expect(newList.toString()).toEqual('22 -> 18 -> 890 -> 10 -> 17');
  });

  it('can tell you what value is at a specific node spot when k is somewhere in the middle', () => {
    const newList = new LinkedList(17);
    newList.insert(10);
    newList.insert(18);
    newList.insert(22);
    newList.kthFromEnd(2);
    expect(newList.kthFromEnd(2)).toEqual(18);
  });

  it('will throw an error when k is greater than the length of the list', () => {
    const newList = new LinkedList(17);
    newList.insert(10);
    newList.insert(18);
    newList.insert(22);
    newList.kthFromEnd(10);
    expect(newList.kthFromEnd(10)).toEqual('This value doesnt work dummy');
  });

  it('will tell you the head of the tail when k and the length are the same', () => {
    const newList = new LinkedList(17);
    newList.insert(10);
    newList.insert(18);
    newList.insert(22);
    newList.kthFromEnd(4);
    expect(newList.kthFromEnd(4)).toEqual(22);
  });



  it('can merge two linked lists like a zipper', () => {
    const newList1 = new LinkedList(2);
    newList1.insert(3);
    newList1.insert(1);
    const newList2 = new LinkedList(4);
    newList2.insert(9);
    newList2.insert(5);
    const mergedList = mergeLists(newList1, newList2);
    expect(mergedList.toString()).toEqual('1 -> 5 -> 3 -> 9 -> 2 -> 4');
  });


});
