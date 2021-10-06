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
 * @Time_Complexity O(N) N-> Number of Nodes
 * @Space_Complexity O(1)
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    if(root!=null){
        if(root.val===val) return root;
        else if(root.val<val) return searchBST(root.right,val);
        else if(root.val>val) return searchBST(root.left,val);
    }
    return root;
};