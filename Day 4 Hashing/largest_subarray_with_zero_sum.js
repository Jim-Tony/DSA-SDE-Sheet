/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(N)
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number}
 */

 class Solution {
    maxLen(arr,n){
        let mp = new Map();  
        let sum = 0;
        let ans = 0;
        for(let i=0;i<n;i++){
            sum = sum+arr[i];
            if(sum===0) ans = i+1;
            if(mp.has(sum)) ans = Math.max(ans,i - mp.get(sum));
            else mp.set(sum,i);
        }
        return ans;
    }
}