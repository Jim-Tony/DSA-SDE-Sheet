/**
 * @Author Jim Tony
 * @Method - 2D DP Tabulation 
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/
//This solution can result to TLE in some online judges
class Solution 
{
    //k->no of floors
    //n-> no of eggs
    eggDrop(k, n) 
    { 
        // code here
        let dp =[...new Array(k+1)].map(_=>new Array(n+1).fill(0));
        for(let i=1;i<=n;i++) dp[1][i] = i;
        for(let i=2;i<=k;i++){
            for(let j=1;j<=n;j++){
                dp[i][j] = Number.MAX_SAFE_INTEGER;
                for(let l=1;l<=j;l++)
                    dp[i][j] = Math.min(dp[i][j],1+Math.max(dp[i-1][l-1],dp[i][j-l]));
            }
        }
        return dp[k][n];
    }
}

//Another method O(KlogN)
class Solution2{
    eggDrop(n,k){
        let dp = [...new Array(n+1)].map(_=>new Array(k+1).fill(0));
        let m = 0;
        while(dp[m][k]<n){
            m++;
            for(let i=1;i<=k;i++) dp[m][i] = 1+dp[m-1][i-1]+dp[m-1][i];
        }
        return m;
    }
}
const obj1 = new Solution();
console.log(obj1.eggDrop(1,2));

