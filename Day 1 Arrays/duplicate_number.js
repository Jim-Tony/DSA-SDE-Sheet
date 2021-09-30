/**
 * @Author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let n = nums.length;
    for(let i=0;i<n;i++) nums[nums[i]%n]+=n;
    for(let i=0;i<n;i++) if(nums[i]>=2*n) return i;
};
const arr = [1,2,3,4,4];
console.log(findDuplicate(arr));