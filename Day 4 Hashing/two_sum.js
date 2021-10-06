/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let mp = new Map();
    let ans = [];
    for(let i=0;i<nums.length;i++){
        let bal = target - nums[i];
        if(mp.has(bal)) ans.push(mp.get(bal),i);
        mp.set(nums[i],i);
    }
    return ans;
};
