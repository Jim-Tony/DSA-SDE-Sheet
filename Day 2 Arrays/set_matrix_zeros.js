/**
 * @author Jim Tony
 * @Time_Complexity O(2*N*M)
 * @Space_Complexity O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let col = true;
    for(let i=0;i<m;i++){
        if(matrix[i][0]===0) col = false;
        for(let j=1;j<n;j++){
            if(matrix[i][j]===0) matrix[0][j] = matrix[i][0] = 0;
        }
    }
    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=1;j--){
            if(matrix[i][0]===0 || matrix[0][j]===0) matrix[i][j] = 0;
        }
        if(col===false) matrix[i][0] = 0;
    }
};