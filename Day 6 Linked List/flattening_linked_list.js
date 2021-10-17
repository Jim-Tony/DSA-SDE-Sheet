/**
 * @author Jim Tony
 * @Time_Complexity O(sum of all nodes)
 * @Space_Complexity O(1)
 * @param {Node} head
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.bottom = null;
    }
}
*/

class Solution {
    mergeLists(root1,root2){
        let tmp = new Node(0);
        let res = tmp;
        while(root1 && root2){
            if(root1.data<root2.data){
                tmp.bottom  = root1;
                tmp = tmp.bottom;
                root1 = root1.bottom;
            }
            else{
                tmp.bottom = root2;
                tmp = tmp.bottom;
                root2=  root2.bottom;
            }
            if(root1!==null) tmp.bottom = root1;
            else tmp.bottom = root2;
            return res.bottom;
            
        }
    }
    flatten(head)
    {
        //your code here
        if(!head || !head.next) return head;
        
        head.next = this.flatten(head.next);
        head = this.mergeLists(head,head.next);
        return head;
        
    }
}