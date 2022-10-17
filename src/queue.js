const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let newNode = new ListNode(value)
    if (!this.head || !this.last) {
      this.head = newNode
      this.last = newNode
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this;
  }

  dequeue() {
    let res = this.head.value;
    this.head = this.head.next ? this.head.next : null;

    return res;
  }
}

module.exports = {
  Queue
};
