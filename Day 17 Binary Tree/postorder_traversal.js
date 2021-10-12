/**
 * @author Jim Tony
 */

/**
 * @Method Using spread operator and recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return [];
    return [...postorderTraversal(root.left),...postorderTraversal(root.right),root.val];
};

/**
 * @Method Using only recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let ans = []
    function postorder(root){
        if(!root) return;
        postorder(root.left);
        postorder(root.right);
        ans.push(root.val);
    }
    postorder(root);
    return ans;
};

/**
 * @Method Iterative Method
 * @param {TreeNode} root
 * @return {number[]}
 */

var postorderTraversal = function(root){
    if(root===null) return [];
    let st = [];
    let ans = [];
    let tmp = root;
    while(tmp || st.length){
        while(tmp){
            ans.push(tmp.val);
            st.push(tmp);
            tmp = tmp.right;
        }
        tmp = st.pop();
        tmp = tmp.left;
    }
    return ans.reverse();
};