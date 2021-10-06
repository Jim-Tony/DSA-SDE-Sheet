/**
 * @author Jim Tony
 * @Time_Complexity O(N*2^N)
 * @Space_Complexity O(N*N+N)
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var helper = function(idx,candi,cari,ans,target){
    if(idx===candi.length){
        if(target===0) ans.push([...cari]);
        return;
    }
    if(candi[idx]<=target){
        cari.push(candi[idx]);
        helper(idx,candi,cari,ans,target-candi[idx]);
        cari.pop();
    }
    helper(idx+1,candi,cari,ans,target);
};
var combinationSum = function(candi, target) {
    let ans = [];
    let cari = [];
    helper(0,candi,cari,ans,target);
    return ans;
};