class Node {
  constructor(val) {
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = oldTail.prev;
    this.tail.next = null;
    oldTail.prev = null;
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  get(idx) {
    if (idx === 0 || idx >= this.length) return null;
    let count, current;

    let half = Math.floor(this.length / 2);
    if (idx <= half) {
      count = 0;
      current = this.head;
      while (count != idx) {
        current = current.next;
        count++;
      }
    }
    if (idx >= half) {
      count = this.length - 1;
      current - this.tail;
      while (count != idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(idx, newValue) {
    let getIdx = this.get(idx);
    if (getIdx != null) {
      getIdx.val = newValue;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) this.unshift(val);
    if (idx === this.length) this.push(val);

    let newNode = new Node(val);
    let previousNode = this.get(idx - 1);
    let nextNode = this.get(idx + 1);

    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) this.shift();
    if (idx === this.length) this.pop();

    let toRemoveNode = this.get(idx);
    let previousNode = this.get(idx - 1);
    let nextNode = this.get(idx + 1);

    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    toRemoveNode.next = null;
    toRemoveNode.prev = null;

    this.length--;
    return toRemoveNode;
  }
}

let list = new doublyLinkedList();
//console.log(list);
//console.log("-----------------------");
list.push(1);
//console.log(list);
list.push(3);
list.push(5);
list.push(7);
console.log(list);
list.pop(0);
console.log(list);
