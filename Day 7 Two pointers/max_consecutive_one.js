/**
 * @Author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let ans = 0;
    for(let i=0;i<nums.length;i++){
        nums[i]===1 ? cnt++ : cnt=0;
        ans = Math.max(cnt,ans);
    }
    return ans;
};
const arr = [1,1,0,1,1,1,0,0];
console.log(findMaxConsecutiveOnes(arr));