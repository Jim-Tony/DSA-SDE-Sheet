/**
 * @Author Jim Tony
 * @param {number[]} nums
 * @return {number[]}
 * Time complexity - O(N)
 * Space Complexity - O(N)
 */

class Solution{
    missRepeat(arr,n){
        let ans = [];
        let mp = new Map();
        //Repeating
        let one;
        for(let key of arr){
            if(mp.has(key) === false) mp.set(key,true);
            else one = key;  
        }
        ans.push(one);
        //Missing
        let two;
        for(let i=1;i<=n;i++){
            if(mp.has(i) === false) two = i; 
        }
        ans.push(two);
        return ans;
    }
};
let obj  = new Solution();
let ans = obj.missRepeat([1,3,3],3);
console.log(ans);