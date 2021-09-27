/**
 * @Author - Jim Tony
 * @Time_Complexity - O(N*M)
 * @Space_Complexity - O(N*M)
 * @param (number[]) - value
 * @param (number[]) - weights
 * @param (number) - weight
 * @return number -  max value
 */
class Solution{
    knapSack(values,weights,tot_weight){
        let n = weights.length;
        let m = tot_weight;
        let dp = [...new Array(n+1)].map(_=>new Array(m+1));
        for(let i=0;i<=n;i++){
            for(let j=0;j<=m;j++){
                if(i===0 || j===0) dp[i][j] = 0;
                else if(weights[i-1]<=j) dp[i][j] = Math.max(values[i-1]+dp[i-1][j-values[i-1]],dp[i-1][j]);
                else dp[i][j] = dp[i-1][j];
            }
        }
        return dp[n][m];
    }
};  
const obj1 = new Solution();
const values = [1,2,3];
const weights = [4,5,1];
console.log(obj1.knapSack(values,weights,4));
