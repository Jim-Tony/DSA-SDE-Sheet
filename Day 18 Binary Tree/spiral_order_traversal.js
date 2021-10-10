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
 * @Time_Complexity O(N)
 * @Space_Complexity O(2N)
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let track = 0;
    let qu = [root];
    let ans = [];
    while(qu.length){
        let n = qu.length;
        let car = [];
        if(track%2===0){
            while(n--){
                let tmp = qu.shift();
                car.push(tmp.val);
                if(tmp.left) qu.push(tmp.left);
                if(tmp.right) qu.push(tmp.right);
            }
        }
        else{
            while(n--){
                let tmp = qu.pop();
                car.push(tmp.val);
                if(tmp.right) qu.unshift(tmp.right);
                if(tmp.left) qu.unshift(tmp.left);
            }
        }
        ans.push(car);
        track++;
    }
    return ans; 
};