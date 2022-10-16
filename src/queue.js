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
  constructor(){
    this.start = null;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    let node = new ListNode(value);
    let currentNode = this.start;
    
    if (this.start === null) {
      this.start = node;
      return
    }
    while (currentNode.next != null) {
      currentNode = currentNode.next;          
    }
    currentNode.next = node;

}

  dequeue() {
    let currentNode = this.start;
    this.start= this.start.next;
    return currentNode.value;
  }
}

module.exports = {
  Queue
};
