
/**
 * @Author Jim Tony
 * @Time_Complexity O(N*N)
 * @Space_Complexity O(N*N)
 * @param {number[][]} Matrix
 * @param {number} n
 * @return {number}
 */

 class Solution {
    maximumPath(Matrix,n){
        let dp = [...new Array(n+2)].map(_=>new Array(n+2).fill(0));
        let ans = Number.MIN_SAFE_INTEGER;
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
                dp[i][j] = Matrix[i-1][j-1]+Math.max(dp[i-1][j-1],dp[i-1][j],dp[i-1][j+1]);
                ans = Math.max(dp[i][j],ans);
            }
        }
        return ans;
    }
}