/**
 * @author Jim Tony
 * @Time_Compelxity O(N)
 * @Space_Complexity O(1)
 * @Method Using two pointer approach
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

 var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    let i = 0;
    let j = matrix[0].length-1;
    while(i<row && j>=0){
        if(matrix[i][j]===target) return true;
        else if(matrix[i][j]<target) i++;
        else j--;
    }
    return false;
};

/**
 * @Time_Complexity O(LogN)
 * @Space_Complexity O(1)
 * @Method Binary Search (This approach can be used only when The first integer of each row is greater than the last integer of the previous row.)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    let low = 0;
    let high = (row*col)-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let ele = matrix[Math.floor(mid/col)][mid%col];
        if(ele===target) return true;
        else if(ele<=target) low=mid+1;
        else high = mid-1;
    }
    return false;
};