/**
 * @author Jim Tony
 * @Time_Complexity O(N*N + NLogN)
 * @Space_Complexity O(N) --> Storage for ans
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let n = nums.length;
    if(n<=2) return [];
    nums.sort((a,b)=>a-b);
    let ans = [];
    for(let i=0;i<n-2;i++){
        if(i===0 || (i>0 && nums[i]!==nums[i-1])){
            let j = i+1;
            let k = n-1;
            while(j<k){
                if(0-nums[i]===nums[j]+nums[k]){
                    ans.push([nums[i],nums[j],nums[k]]);
                    while(j<k && nums[j]===nums[j+1]) j++;
                    while(j<k && nums[k]===nums[k-1]) k--;
                    j++; k--;
                }
                else if(0-nums[i] < nums[j]+nums[k]) k--;
                else j++;
            }
        }
    }
    return ans;
};