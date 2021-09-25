/**
 * @Author - Jim Tony
 * @Time_Complexity - O(N*M)
 * @Space_Complexity  - O(N)
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {boolean}
 */

 class Solution {
    isSubsetSum(arr,n,sum){
        let dp  = [...new Array(n+1)].map(_=>new Array(sum+1));
        for(let i=0;i<n+1;i++) dp[i][0] = true;
        for(let i=1;i<sum+1;i++) dp[0][i] = false;
        for(let i=1;i<=n;i++){
            for(let j=1;j<=sum;j++){
                if(arr[i-1]<=j) dp[i][j] = dp[i-1][j-arr[i-1]] || dp[i-1][j];
                else dp[i][j] = dp[i-1][j];
            }
        }
        return dp[n][sum];
    }
}