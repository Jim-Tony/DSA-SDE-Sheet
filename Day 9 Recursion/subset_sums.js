/**
 * @author Jim Tony
 * @Time_Complexity O(2^N)
 * @Space_Complexity O(N)
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
*/

class Solution {
    helper(idx,sum,ans,arr,n){
        if(idx===n){
            ans.push(sum);
            return;
        }
        this.helper(idx+1,sum+arr[idx],ans,arr,n);
        this.helper(idx+1,sum,ans,arr,n);
    }
    subsetSums(arr,n){
       let ans = [];
       this.helper(0,0,ans,arr,n);
       return ans.sort((a,b)=>a-b);
    }
}