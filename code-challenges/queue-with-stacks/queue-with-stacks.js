class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
  }

  pop() {
    if (!this.top) return null;

    const top = this.top;
    this.top = top.next;
    return top;
  }

  peek() {
    if (!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack(),
    this.stackTwo = new Stack();
  }

  enqueue(value) {
    while (!this.stackOne.isEmpty()) {
      const top = this.stackOne.pop(this.stackOne.top);
      this.stackTwo.push(top.value);
    }

    this.stackTwo.push(value);

    while (!this.stackTwo.isEmpty()) {
      const top = this.stackTwo.pop(this.stackTwo.top);


      this.stackOne.push(top.value);
    }

    return this.stackOne;
  }

  dequeue() {

    this.stackOne.pop();
    return this.stackOne;
  }

  toString() {
    let currentNode = this.stackOne.top;
    let string = '';
    while (currentNode) {
      string += currentNode.value.toString() + ' -> ';
      currentNode = currentNode.next;
    }
    return string;


  }
}

module.exports = PseudoQueue;
