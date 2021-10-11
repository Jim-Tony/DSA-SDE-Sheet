class Queue {
    constructor() {
      this.items = [];
      this.headIndex = 0;
      this.tailIndex = 0;
    }
    enqueue(item) {
      this.items[this.tailIndex] = item;
      this.tailIndex++;
    }
    dequeue() {
      const item = this.items[this.headIndex];
      this.headIndex++;
      return item;
    }
    peek() {
      return this.items[this.headIndex];
    }
    get length() {
      return this.tailIndex - this.headIndex;
    }
}
const obj1 = new Queue();
for(let i=0;i<6;i++) obj1.enqueue(i);
console.log(obj1.peek());
console.log(obj1.dequeue());
console.log(obj1.peek());
console.log(obj1.length);