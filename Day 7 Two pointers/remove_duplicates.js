/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    //Two pointer approach
    let n = nums.length;
    if(n==1 || n==0) return n;
    let i=0;
    let j=1;
    while(j<n){
        if(nums[i]===nums[j]) j++;
        else if(nums[i]!==nums[j]){
            nums[++i] = nums[j++];
        }
    }
    return i+1;
};