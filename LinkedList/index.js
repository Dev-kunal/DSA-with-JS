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

  insertAtBeginning = function (data) {
    const newNode = new Node(data);
    this.head = newNode;
  };

  insertAtEnd = function (data) {
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

  insertAfterNode = function (prevNode, data) {
    if (!prevNode) return "prevNode cannot be empty";
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  };

  insertAtIndex = function (data, index) {
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

  deleteLastNode = function () {
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

  deleteByKey = function (key) {
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

  findByKey = function (key) {
    let current = this.head;
    while (current) {
      if (current.data == key) return true;
      current = current.next;
    }
  };

  print = function () {
    let list = [];
    let current = this.head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }

    console.log(list.join(" -> "));
  };

  reverseLinkList = function () {
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
}

const myLinkedList = new LinkedList();

myLinkedList.insertAtBeginning(9);
myLinkedList.insertAtEnd(10);
myLinkedList.insertAtEnd(12);
myLinkedList.insertAtEnd(7);

myLinkedList.print();
myLinkedList.insertAtIndex(99, 2);
myLinkedList.print();
console.log("key exist 99", myLinkedList.findByKey(99));

myLinkedList.deleteLastNode();
myLinkedList.print();
myLinkedList.deleteByKey(99);
myLinkedList.print();

myLinkedList.reverseLinkList();
myLinkedList.print();
