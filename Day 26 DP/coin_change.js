/**
 * @Author  - Jim Tony
 * @Space_Complexity - O(N)
 * @Time_Complexity  - O(N*M)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = [...new Array(n+1)].map(_=>new Array(amount+1));
    for(let i=0;i<=n;i++){
        for(let j=0;j<=amount;j++){
            if(j===0) dp[i][j] = 0;
            else if(i===0) dp[i][j] = 1e5;
            else if(coins[i-1]>j) dp[i][j] = dp[i-1][j];
            else dp[i][j] = Math.min(1+dp[i][j-coins[i-1]],dp[i-1][j]);
        }
    }
    return dp[n][amount] >= 1e5 ? -1 : dp[n][amount]; 
};