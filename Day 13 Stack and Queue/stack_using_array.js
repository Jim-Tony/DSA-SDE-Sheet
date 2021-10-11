class Stack{
    constructor(){
        this.arr = [];
        this.top = -1;
    }
    push(x){
        this.arr[++this.top] = x; 
    }
    pop(){
        if(this.isEmpty()) return -1;
        this.top--;
    }
    isEmpty(){
        return this.top===-1;
    }
    peek(){
        if(this.isEmpty()) return -1; 
        return this.arr[this.top];
    }
    clear(){
        this.arr = [];
        this.top = -1;
    }
};
const obj1 = new Stack();
for(let i=0;i<5;i++) obj1.push(i);
console.log(obj1.peek());
obj1.pop();
console.log(obj1.peek());
console.log(obj1.peek());