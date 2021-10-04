/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(N+N)
 * @param {Node} root
 * @returns {number[]}
*/

class Solution
{
    bottomView(root)
    {
        
        let ans = [];
        let mp = {};
        let que = [];
        que.push({node:root,hd:0});
        while(que.length){
            let tmp = que.shift();
            let n = tmp.node; let d = tmp.hd;
            mp[d] = n.data;
            if(n.left) que.push({node:root.left,hd:d-1});
            if(n.right) que.push({node:root.right,hd:d+1});
        }
        for(const [key,value] of Object.entries(mp).sort((a,b)=>a[0]-b[0])){
            ans.push(value);
        }
        return ans;
    }
}