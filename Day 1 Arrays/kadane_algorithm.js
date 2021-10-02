/**
 * @Author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let maxEnding = nums[0];
    for(let i=1;i<nums.length;i++){
        maxEnding = Math.max(maxEnding+nums[i],nums[i]);
        maxSoFar = Math.max(maxSoFar,maxEnding);
    }
    return maxSoFar;
};
const arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr));