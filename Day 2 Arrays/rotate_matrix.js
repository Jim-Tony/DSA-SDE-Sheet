/**
 * @author Jim Tony
 * @Time_Complexity O(N^2 + N^2)
 * @Space_Complexity O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    if(matrix.length===1) return;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<i;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }
    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse();
    }
};