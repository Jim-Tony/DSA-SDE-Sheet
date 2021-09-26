/**
 * @Author  - Jim Tony
 * @Space_Complexity - O(N*M)
 * @Time_Complexity  - O(N*M)
 * @param {number[]} length 
 * @param {number[]} price 
 * @return {number} max price
 */
var cutRod = (price,rod_parts)=>{
    let n = price.length;
    let m = rod_parts.length;
    let dp = [...new Array(n+1)].map(_=>new Array(m+1));
    for(let i=0;i<=n;i++){
        for(let j=0;j<=m;j++){
            if(i===0 || j===0) dp[i][j] = 0;
            else if(rod_parts[i-1]<=j) dp[i][j] = Math.max(price[i-1]+dp[i][j-rod_parts[i-1]],dp[i-1][j]);
            else dp[i][j] = dp[i-1][j]; 
        }
    }
    return dp[n][m];
};

console.log(cutRod([1, 5, 8, 9, 10, 17, 17, 20],[1,2,3,4,5,6,7,8]));