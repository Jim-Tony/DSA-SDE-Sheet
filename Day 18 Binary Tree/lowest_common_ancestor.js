/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    //Very Optimal solution
    if(!root || root=== p || root===q) return root;
    let l = lowestCommonAncestor(root.left,p,q);
    let r = lowestCommonAncestor(root.right,p,q);
    return (r && l ) ? root : (r || l);  
};