/**
 * @author Jim Tony
 * @Time_Complexity O(N*N)
 * @Space_Complexity O(N*N) -->Auxillary Space
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @returns {number[][]}
*/
class Solution {
    dfs(sr,sc,row,col,pos,newColor,arr){
        if(sr<0 || sr>=row || sc<0 || sc>=col) return;
        else if(arr[sr][sc]!==pos) return;
        arr[sr][sc] = newColor;
        this.dfs(sr-1,sc,row,col,pos,newColor,arr); //top
        this.dfs(sr+1,sc,row,col,pos,newColor,arr); //bottom
        this.dfs(sr,sc-1,row,col,pos,newColor,arr); //left
        this.dfs(sr,sc+1,row,col,pos,newColor,arr); //right
    }
    floodFill(arr,n, m, sr, sc, newColor) {
        if(arr[sr][sc]===newColor) return arr;
        let row = arr.length;
        let col = arr[0].length;
        let pos = arr[sr][sc];
        this.dfs(sr,sc,row,col,pos,newColor,arr);
        return arr;
    }
}