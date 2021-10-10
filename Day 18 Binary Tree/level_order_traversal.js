/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @author Jim Tony
 * @Time_Complexity O(N) N--> Number of nodes traversed
 * @Space_Complexity O(N)
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root===null) return [];
    let qu = [root];
    let ans = [];
    while(qu.length){
        let n = qu.length;
        let cari = [];
        while(n--){
            let tmp = qu.shift();
            cari.push(tmp.val) ;
            if(tmp.left) qu.push(tmp.left);
            if(tmp.right) qu.push(tmp.right);
        }
        ans.push(cari);
    }
    return ans;
};