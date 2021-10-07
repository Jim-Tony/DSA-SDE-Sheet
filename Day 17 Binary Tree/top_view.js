/**
 * @author Jim Tony
 * @Time_Complexity O(N+N)
 * @Space_Complexity O(N+N) 
 * @param {Node} root
 * @return {number[]} 
*/
/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution
{
    topView(root)
    {
        if(root.left===null && root.right===null) return [root.data];
        let mp = {};
        let ans = [];
        let qu = [];
        qu.push({node:root,hd:0});
        while(qu.length){
            let tmp = qu.shift();
            let nn = tmp.node;
            let nhd = tmp.hd;
            if(mp[nhd]===undefined) mp[nhd] = nn.data;
            if(nn.left) qu.push({node:nn.left,hd:nhd-1});
            if(nn.right) qu.push({node:nn.right,hd:nhd+1});
        }
        for(const [key,val] of Object.entries(mp).sort((a,b)=>a[0]-b[0])){
            ans.push(val);
        }
        return ans;
        
    }
}