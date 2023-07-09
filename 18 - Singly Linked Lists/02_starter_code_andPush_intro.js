//Linked List is just a collection of nodes!
//Each node stores a piece of data (val)
// and references to the next node (next)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    let counter = 0;
    let current = this.head;
    if (idx < 0 || idx >= this.length) return null;
    // for (let i = 0; i < this.length; i++) {}
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(idx, value) {
    let foundNode = this.get(idx);
    if (!foundNode) return false;
    foundNode.val = value;
    return true;
  }
  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(value);
    if (idx === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let previous = this.get(idx - 1);
    let temp = previous.next;
    newNode.next = temp;

    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === this.length - 1) return !!this.pop();
    if (idx === 0) return !!this.shift();

    let previousNode = this.get(idx - 1);
    if (!previousNode) return false;
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let next;
    let previous = null;

    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.print();
list.reverse();
list.print();
