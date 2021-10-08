/**
 * @author Jim Tony
 */


/**
 * @method Iterative
 * @Time_Complexity O(N) 
 * @Space_Complexity O(N+N) (For using a set and stack) 
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, target) {
    let sk = [];
      let st = new Set(); 
    let tmp = root;
    // Traversing inorder
    while(tmp || sk.length){
        while(tmp){
            sk.push(tmp);
            tmp = tmp.left;
        }
        tmp = sk.pop();
        if(st.has(target-tmp.val)===true) return true;
        else st.add(tmp.val);
        tmp = tmp.right;
    }
    return false;
};

/**
 * @method Recursive
 * @Time_Complexity O(N) 
 * @Space_Complexity O(1) 
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

var recurFind = function(root,st,target){
    if(!root) return false;
    if(recurFind(root.left,st,target)) return true;
    if(st.has(target-root.val)) return true;
    else st.add(root.val);
    return recurFind(root.right,st,target);
}
var findTarget = function(root, target) {
    let st = new Set();
    return recurFind(root,st,target);
};