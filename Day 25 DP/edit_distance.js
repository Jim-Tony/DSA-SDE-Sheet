/**
 * @Author Jim Tony
 * @Method Memorization
 * @Time_Complexity O(N*M)
 * @Space_Complexity O(N*M)
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var helper = function(i,j,s1,s2,memo={}){
    if(i<0) return j+1;
    if(j<0) return i+1;
    let key = i +','+j;
    if(key in memo) return memo[key];
    if(s1[i] === s2[j]) return memo[key] = helper(i-1,j-1,s1,s2,memo);
    else{
        let a = 1+helper(i-1,j,s1,s2,memo);
        let b = 1+helper(i,j-1,s1,s2,memo);
        let c = 1+helper(i-1,j-1,s1,s2,memo);
        return memo[key] = Math.min(a,b,c);
    }
};
var minDistance = function(word1, word2) {
    return helper(word1.length-1,word2.length-1,word1,word2);
};

/**
 * @Method Grid Bottom up
 * @Time_Complexity O(N*M)
 * @Space_Complexity O(N*M)
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

 class Solution {
    editDistance(s, t) {
        let n = s.length;
        let m = t.length;
        let dp = [...new Array(n+1)].map(_=>new Array(m+1));
        for(let i=0;i<=n;i++){
            for(let j=0;j<=m;j++){
                if(i===0 & j===0) dp[i][j] = 0;
                else if(i===0) dp[i][j] = j;
                else if(j===0) dp[i][j] = i;
                else if(s[i-1]===t[j-1]) dp[i][j] = dp[i-1][j-1];
                else dp[i][j] = 1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
            }
        }
        return dp[n][m];
    }
}