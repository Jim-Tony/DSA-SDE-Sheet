/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(N*N)
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let ans  = new Array(numRows);
    for(let i=0;i<numRows;i++){
        ans[i] = new Array(i+1);
        ans[i][0] = ans[i][i] = 1;
        for(let j=1;j<i;j++) ans[i][j] = ans[i-1][j]+ans[i-1][j-1];
    }
    return ans;
};