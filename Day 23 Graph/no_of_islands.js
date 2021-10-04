/**
 * @Author Jim Tony
 * @Time_Complexity O(M*N)
 * @Space_Complexity O(2N) (The two 1D arrays)
 * @param {character[][]} grid
 * @return {number}
 */
 let x = [1,0,-1,0];
 let y = [0,1,0,-1];
 var dfs = function(row,col,i,j,grid){
     if(i<0 || j<0 || i>=row || j>=col || grid[i][j]=='0') return;
     grid[i][j] = '0';
     for(let k=0;k<4;k++){
         let nx = i+x[k],ny = j+y[k];
         if(nx>=0 && ny>=0 && nx<row && ny<col && grid[nx][ny]==='1') dfs(row,col,nx,ny,grid);
     }
 };
 var numIslands = function(grid) {
     let row = grid.length;
     let col = grid[0].length;
     let cnt = 0;
     for(let i=0;i<row;i++){
         for(let j=0;j<col;j++){
             if(grid[i][j]==='1'){
                 dfs(row,col,i,j,grid);
                 cnt++;
             }
         }
     }
     return cnt;
 };