/**
 * @author Jim Tony
 */

/**
 * @Method Using spread operator and recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return [];
    return [...preorderTraversal(root.left),root.val,...preorderTraversal(root.right)];
};

/**
 * @Method Using only recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let ans = []
    function preorder(root){
        if(!root) return;
        preorder(root.left);
        ans.push(root.val);
        preorder(root.right);
    }
    preorder(root);
    return ans;
};

/**
 * @Method Iterative Method
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root){
    if(root===null) return [];
    let st = [];
    let ans = [];
    let tmp = root;
    while(tmp || st.length){
        while(tmp){
            ans.push(tmp.val);
            st.push(tmp);
            tmp = tmp.left;
        }
        tmp = st.pop();
        tmp = tmp.right;
    }
    return ans;
}; 