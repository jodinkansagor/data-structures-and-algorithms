class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.insert(value);
  }

  insert(value) {
    const newNode = new Node(value, this.head);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  includes(value) {
    let thisNode = this.head;

    while (thisNode) {
      if (thisNode.value === value) {
        return true;
      } else return false;
    }
  }

  toString() {
    let thisNode = this.head;
    let arrayToString = [];
    while (thisNode) {
      arrayToString.push(thisNode.value);
      thisNode = thisNode.next;
    }
    let joinList = arrayToString.join(' -> ');
    let stringList = joinList.toString();
    return stringList;
  }

  append(value) {
    const newNode = new Node(value, null);
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;

    if (this.head.value === value) {
      this.head = newNode;
      newNode.next = currentNode;
    } else {
      while (currentNode.next !== null && currentNode.next !== value) {
        currentNode = currentNode.next;
        break;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;

    console.log(currentNode, newNode, 'CURRENT NEW')
    console.log(value);
    while (currentNode.next !== null && currentNode.next !== value) {
      currentNode = currentNode.next;
      break;
    }
    if (currentNode.next === value) {
      console.log(newNode, 'newNODE');
      console.log(currentNode, 'CURRENT NODe');
      currentNode.next = newNode;
      newNode.next = currentNode.next;
      console.log(newNode, 'NEWNODE AFTER');
      console.log(currentNode, 'CURRENT NODE AFTER')
    }
  }
}



module.exports = { Node, LinkedList };
