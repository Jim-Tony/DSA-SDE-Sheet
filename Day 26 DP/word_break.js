/**
 * @Author Jim Tony
 * @Time_Complexity O(N*N)
 * @Space_Complexity O(N)
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

 var wordBreak = function(s, wordDict) {
    let l = s.length;
    const dp = new Array(l+1).fill(false);
    dp[0] = true;
    for(let i=1;i<=l;i++){
        for(let j=0;j<i;j++)
            if(dp[j] && wordDict.includes(s.substring(j,i))) dp[i]  = true;
    }
    return dp[l];
};