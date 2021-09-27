
/**
 * @Author - Jim Tony 
 * @Time_Complexity - O(N*N)
 * @Space_Complexity - O(N)
 * @param {number} n
 * @param {number[]} arr
 * @returns {number}
*/
class Solution 
{

    longestSubsequence(n, arr)
    {
        let dp = new Array(n).fill(1);
        let ans = 1;
        for(let i=1;i<n;i++){
            for(let j=0;j<i;j++){
                if(arr[i]>arr[j] && dp[i]<=dp[j]){
                    dp[i] = 1+dp[j];
                    ans = Math.max(ans,dp[i]);
                }
            }
        }
        return ans;
    }
};
const obj1 = new Solution();
const arr = [5,8,3,7,9,1];
console.log(obj1.longestSubsequence(arr.length,arr));