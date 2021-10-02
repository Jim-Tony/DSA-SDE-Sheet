/**
 * @Author Jim Tony
 * @Method Iterative
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {Node} head
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    reverseList(head)
    {
        let prev = null;
        let cur = head;
        while(cur){
             let tmp = cur.next;
             cur.next = prev;
             prev = cur;
             cur = tmp;
        }   
        return prev;
    }
    
}



/**
 * @Method Recursion
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {Node} head
 * @returns {Node}
 */



/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    reverseList(head)
    {
       if(!head || !head.next) return head;
       let ans = this.reverseList(head.next);
       head.next.next = head;
       head.next = null;
       
       return ans;
    }
    
}