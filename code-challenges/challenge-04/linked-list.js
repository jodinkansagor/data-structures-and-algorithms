class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor(head) {
    this.head = head;
  }

  insert(value) {
    //adds new node with that value at the head
  }

  includes(value) {
    // returns boolean if the value is in the list
  }

  toString() {
    // makes a string of all the values in the list
  }

}


module.exports = { Node, List}