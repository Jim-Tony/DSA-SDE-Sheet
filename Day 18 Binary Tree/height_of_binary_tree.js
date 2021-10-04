/**
 * @author Jim Tony
 * @Time_Complexity O(N) N-> Number of nodes
 * @Space_Complexity O(1) 
 * @param {Node} node
 * @returns {number}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    height(node)
    {
        if(!node) return 0;
        return 1+Math.max(this.height(node.left),this.height(node.right));
        
    }
}