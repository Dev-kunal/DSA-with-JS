class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

const myLinkedList = new LinkedList();

console.log(myLinkedList);

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let currentNode = this.head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
};

LinkedList.prototype.insertAfterNode = function (prevNode, data) {
  if (!prevNode) return "prevNode cannot be empty";
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

LinkedList.prototype.insertAtIndex = function (data, index) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let currentNode = this.head;
  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }

  newNode.next = currentNode.next;
  currentNode.next = newNode;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) return;
  if (!this.head.next) {
    this.head = null;
    return;
  }

  let currentNode = this.head;
  while (currentNode.next.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = null;
};

LinkedList.prototype.deleteByKey = function (key) {
  if (!this.head) return "Linked list is empty";
  if (this.head.data === key) {
    this.head = this.head.next;
  }
  let current = this.head;
  while (current.next) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }

  console.log("Node not found with the key", key);
};

LinkedList.prototype.findKey = function (key) {
  let current = this.head;
  while (current) {
    if (current.data == key) return true;
    current = current.next;
  }
};

LinkedList.prototype.print = function () {
  let list = [];
  let current = this.head;
  while (current) {
    list.push(current.data);
    current = current.next;
  }

  console.log(list.join("->"));
};

LinkedList.prototype.reverseLinkList = function () {
  let prev = null;
  let current = this.head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  this.head = prev;
};
