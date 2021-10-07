/**
 * @author Jim Tony
 * @Time_Complexity O(N) Since each node is traversed exactly one
 * @Space_Complexity O(N)
 * @param {Node} root
 * @returns {number[]}
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
    leftView(root)
    {
        if(!root) return [];
        let ans = [];
        let qu = [root];
        while(qu.length){
            let n =qu.length;
            ans.push(qu[0].data);
            while(n--){
                let tmp = qu.shift();
                if(tmp.left) qu.push(tmp.left);
                if(tmp.right) qu.push(tmp.right);
            }
        }
        return ans;
    }
}