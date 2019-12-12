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

    while (currentNode.next !== value) {
      currentNode = currentNode.next;
      break;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  kthFromEnd(k) {
    let currentNode = this.head;
    let nodeLookingFor = this.length - k;


    if (k > this.length || k < 0) {
      return 'This value doesnt work dummy';
    } else if (k === this.length) {
      return this.head.value;
    } else {

      for (let i = 1; i !== nodeLookingFor; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }
  }
}

const mergeLists = (list1, list2) => {
  let list1Head = list1.head;
  let list2Head = list2.head;
  console.log(list1Head, list2Head, 'LIST HEADS');

  list1Head.next = list2Head;
  list2Head.next = 
  console.log(list1Head.next, 'new list one head next');
};



module.exports = { Node, LinkedList, mergeLists };
