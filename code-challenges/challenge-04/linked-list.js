class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.insert(value);
  }

  insert(value) {
    //adds new node with that value at the head
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  includes(value) {
    let thisNode = this.head;

    while(thisNode) {
      if(thisNode.value === value) {
        return true;
      } else return false;
    }
  }

  toString() {
    // makes a string of all the values in the list
  }

}


module.exports = { Node, LinkedList }