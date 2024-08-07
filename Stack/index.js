class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  contains(element) {
    this.stack.includes(element);
  }

  size() {
    return this.stack.length;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  clear() {
    this.stack = [];
  }

  reverse() {
    this.stack.reverse();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + " | ";
    }
    return str + "\n";
  }
}

const myStack = new Stack();
myStack.push(2);
myStack.push(5);
myStack.push(2);
myStack.pop();

console.log(myStack.printStack());

myStack.reverse();

console.log(myStack.printStack());
