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
 * @Time_complexity O(N) N->number of nodes
 * @Space_Complexity O(1)
 * @param {TreeNode} root
 * @return {boolean}
 */
 var helper = function(r1,r2){
    if(!r1 && !r2) return true;
    else if(r1 && r2 && r1.val===r2.val) return helper(r1.left,r2.right) && helper(r1.right,r2.left);
    return false;
}
var isSymmetric = function(root) {
    return helper(root.left,root.right);
};