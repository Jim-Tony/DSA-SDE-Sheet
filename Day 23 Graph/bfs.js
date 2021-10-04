/**
 * @Author Jim Tony
 * @Time_Complexity O(V+E)
 * @Space_Complexity O(N+N)
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/
class Solution {
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj) {
        // code here
        let qu = [];
        let ans = [];
        let vis = new Array(V).fill(0);
        qu.push(0);
        vis[0]=  1;
        while(qu.length){
            let f =  qu.shift();
            ans.push(f);
            if(!vis[f]){
                qu.push(f);
                vis[f] = 1; 
            }
        }        
        return ans;
    }
}