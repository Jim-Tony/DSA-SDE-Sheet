/**
 * @Author Jim Tony
 * @Time_Complexity O(V+E)
 * @Space_Complexity O(N+N)
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/
class Solution {
    helper(vis,arr,adj,cur){
        arr.push(cur);
        vis[cur] = 1;
        for(let i of adj[cur]){
            if(!vis[i]){
                this.helper(vis,arr,adj,i);
            }
        }
    }
    dfsOfGraph(V, adj) {
        const arr = [];
        const vis = new Array(V).fill(0);
        this.helper(vis,arr,adj,0); //Graph with connected components..For non-connected use a for loop!
        return arr;
    }
}