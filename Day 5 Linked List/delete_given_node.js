/**
 * @author Jim Tony
 * @Time_Complexity O(1)
 * @Space_Complexity O(1)
 * @param {Node} del
*/


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Solution {
    deleteNode(del)
    {
        del.data = del.next.data;
        del.next = del.next.next;
    }
}
let print = (head)=>{
    let tmp = head;
    let res = '';
    while(tmp){
        res=res+tmp.data+'->';
        tmp = tmp.next
    }
    console.log(res.slice(0,res.length-2));
}
let head = new Node(0);
let n1 = new Node(9);
head.next  = n1;
let n2 = new Node(2);
n1.next = n2;
let n3 = new Node(8);
n2.next = n3;
let n4 = new Node(4);
n3.next = n4;
let obj  = new Solution();
console.log(`Before deletion ${print(head)}`);
obj.deleteNode(n3);
console.log(`After deletion ${print(head)}`);
