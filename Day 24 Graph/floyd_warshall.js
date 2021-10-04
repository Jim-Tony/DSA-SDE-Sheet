/**
 * @author Jim Tony
 * @Time_Complexity O(N*N*N)
 * @Space_Complexity O(1) In-place
 * @param {number[][]} matrix
*/

class Solution {
    shortest_distance(matrix){
      let n = matrix.length;
      for(let k=0;k<n;k++){
          for(let i=0;i<n;i++){
              for(let j=0;j<n;j++){
                  if(matrix[i][k]==-1 || matrix[k][j]==-1) continue;
                  else if(matrix[i][j]==-1) matrix[i][j] = matrix[i][k]+matrix[k][j];
                  else matrix[i][j] = Math.min(matrix[i][j],matrix[i][k]+matrix[k][j]);
              }
          }
      }
    }
  }