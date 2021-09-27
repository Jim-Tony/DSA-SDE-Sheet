/**
 * @Author Jim Tony
 * @Time_Complexity O(N*M)
 * @Space_Complexity - O(N*M) 
 * @param {number} x
 * @param {number} y
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
*/
 
class Solution
{
    lcs(x, y, s1, s2)
    {
        let dp = [...new Array(x+1)].map(_=>new Array(y+1).fill(0));
        for(let i=1;i<=x;i++){
            for(let j=1;j<=y;j++){
                if(s1[i-1] === s2[j-1]) dp[i][j] = 1+dp[i-1][j-1];
                else dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
            }
        }
        return dp[x][y];
    }
}
const str1 = "ABCDGH";
const str2 = "AEDFHR";
const obj1 = new Solution();

const ans = obj1.lcs(str1.length,str2.length,str1,str2);
console.log(ans);