/**
 * @author Jim Tony
 */

/**
 * @Method Using spread operator and recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    return [...inorderTraversal(root.left),root.val,...inorderTraversal(root.right)];
};

/**
 * @Method Using only recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans = []
    function inorder(root){
        if(!root) return;
        inorder(root.left);
        ans.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return ans;
};

/**
 * @Method Iterative Method
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    if(root===null) return [];
    let st = [];
    let ans = [];
    let tmp = root;
    while(tmp || st.length){
        while(tmp){
            st.push(tmp);
            tmp = tmp.left;
        }
        tmp = st.pop();
        ans.push(tmp.val);
        tmp = tmp.right;
    }
    return ans;
};