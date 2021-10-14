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
 * @Time_Complexity O(N) N-> Number of node in the tree
 * @Space_Complexity O(1)
 * @param {TreeNode} root
 * @return {boolean}
 */
 var height = function(root){
    if(!root) return 0;
    let l = height(root.left); 
    if(l===-1) return -1;
    let r = height(root.right);
    if(r===-1) return -1;
    if(Math.abs(l-r)>1) return -1;
    return Math.max(l,r)+1;
};
var isBalanced = function(root) {
    return height(root)!==-1;
};