/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(N)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length===1) return intervals; 
    intervals.sort((a,b)=>a[0]-b[0]);
    let n = intervals.length;
    let first = intervals[0];
    let ans = [];
    for(let mat of intervals){
        if(first[1]>=mat[0]) first[1] = Math.max(mat[1],first[1]);
        else {
            ans.push(first);
            first = mat;
        }
    }
    ans.push(first);
    return ans;
};