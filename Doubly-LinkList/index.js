class Node {
  constructor(data, next = null, prev = null) {
    (this.data = data), (this.next = next);
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data, this.head);
    // if the head is not null i.e the head is pointed to a node
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (this.tail == null) this.tail = newNode;
  }

  insertAtEnd(data) {
    const newNode = new Node(data, null, this.tail);
    if (this.tail != null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (this.head === null) {
      this.head = newNode;
    }
  }

  insertAfterNode(data, prevNode) {
    const newNode = new Node(data, prevNode.next, prevNode);
    // if prevNode is not the last node
    if (!prevNode.next) {
      prevNode.next.prev = newNode.next;
    }
    // if prevNode is the last node
    prevNode.next = newNode;
    if (newNode.next == null) {
      this.tail = newNode;
    }
  }

  deleteFirstNode() {
    // empty list
    if (!this.head) return "Empty linkedList";
    // single node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  deleteLastNode() {
    // empty list
    if (!this.head) {
      return "Empty linkedList";
    }
    // single node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  reverse() {
    let temp = null;
    let current = this.head;
    while (current !== null) {
      // swapping
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      //moving to next node
      current = current.prev;
    }
    // swapping head and tail
    if (temp !== null) {
      let tempPointer = this.head;
      this.head = this.tail;
      this.tail = tempPointer;
    }
  }
}

const myLinkedList = new DoublyLinkedList();

myLinkedList.insertAtBeginning(2);
myLinkedList.insertAtBeginning(5);
myLinkedList.insertAtBeginning(4);
myLinkedList.insertAtBeginning(8);

console.log("-------> before delete");
console.log(myLinkedList);
myLinkedList.deleteFirstNode(4);
console.log("-------> after first delete");
console.log(myLinkedList);

console.log("-------> before delete");
console.log(myLinkedList);

myLinkedList.deleteLastNode(4);
console.log("-------> after last delete");
console.log(myLinkedList);

console.log("after reverse-->");
myLinkedList.reverse();
console.log("--->", myLinkedList);
