/**
 * @author Jim Tony
 * @Time_Complexity O(N*N)
 * @Space_Complexity O(N*N)
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {

    const l = s.length;
    if(l<=1) return s;
    let dp = [...new Array(l+1)].map(_=>new Array(l+1).fill(0));
    let ans = "";
    for(let i=0;i<l;i++){
        dp[i][i] = 1;
        ans = s[i];
    }
    for(let i=0;i<l;i++){
        if(s[i]==s[i+1]) dp[i][i+1] = 1;
        if(dp[i][i+1]) ans = s.substring(i,i+2);
    }
    for(let i=l;i>=0;i--){
        for(let j=i+2;j<l;j++){
            if(s[i]===s[j] && dp[i+1][j-1] === 1) dp[i][j] = 1;
            if(dp[i][j]){
                if(ans.length<j-i+1) ans = s.substring(i,j+1);
            }
        }
    }
    return ans;
};