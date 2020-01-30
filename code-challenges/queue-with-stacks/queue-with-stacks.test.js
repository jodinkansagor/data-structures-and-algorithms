const PseudoQueue = require('./queue-with-stacks');

describe('pseudoqueue', () => {
  it('can add a new node to the pseudoqueue', () => {
    const pseudoqueue = new PseudoQueue();
    pseudoqueue.stackOne.push(1);
    pseudoqueue.stackOne.push(2);
    pseudoqueue.stackOne.push(3);
    pseudoqueue.enqueue(5);
    expect(pseudoqueue.toString()).toEqual('3 -> 2 -> 1 -> 5 -> ');
  });

  it('removes a value from the stack', () => {
    const pseudoqueue = new PseudoQueue();
    pseudoqueue.stackOne.push(1);
    pseudoqueue.stackOne.push(2);
    pseudoqueue.stackOne.push(3);
    pseudoqueue.dequeue(3);
    expect(pseudoqueue.toString()).toEqual('2 -> 1 -> ');
  });
});
