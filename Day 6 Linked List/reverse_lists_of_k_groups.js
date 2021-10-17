/**
 * @author Jim Tony
 * @Time_Complexity O(N) N-> number of nodes
 * @Space_Complexity O(1)
 * @param {Node} node
 * @param {number} k
 * @return {Node} node
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
    reverse(node, k)
    {
        let tmp = null;
        let cur = node;
        let pre = null;
        let cnt = k;
        while(cnt-- && cur!==null){
            tmp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = tmp;
        }
        if(tmp!==null) node.next = this.reverse(tmp,k);
        return pre;
    }
}