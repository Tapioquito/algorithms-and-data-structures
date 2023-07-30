class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    let temp = this.first;
    this.first = newNode;
    newNode.next = temp;
    //this.first.next = temp;

    //this.size++;
    return ++this.size;
    //return and increment the SIZE attribute
  }
  pop() {
    if (this.size === 0) return false;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    let toRemove = this.first;
    this.first = toRemove.next;

    this.size--;
    return toRemove.val;
  }
}

let stack = new Stack();

stack.push(100);
console.log("==================");

stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
console.log(stack);
stack.pop();
console.log(stack);
