class Queue {
  constructor() {
    this.queue = [];
  }

  // add element in the q
  enqueue(element) {
    this.queue.push(element);
  }

  // removes first element in q
  dequeue() {
    this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) return "Queue is Empty";
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    if (this.isEmpty()) return "Queue is Empty";
  }

  printQ() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + " | ";
    }
    return str;
  }

  clearQueue() {
    this.queue = [];
  }
}

const myQ = new Queue();
myQ.enqueue(2);
myQ.enqueue(9);
myQ.enqueue(0);

console.log(myQ.printQ());
myQ.dequeue();

console.log("---->");
console.log(myQ.printQ());
