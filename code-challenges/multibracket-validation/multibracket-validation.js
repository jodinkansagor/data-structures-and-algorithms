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

const bracketValidation = (input) => {
  const bracket = ['(', ')', '{', '}', '[', ']'];
  const matches = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  const stack = new Stack();
  stack.push('anchor');
  for (let i of input) {
    if (bracket.includes(i)) {
      if (matches[i] === stack.top.value) {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }
  return (stack.top.value === 'anchor') ? true : false;
};



module.exports = {
  Node,
  Stack,
  bracketValidation
};
