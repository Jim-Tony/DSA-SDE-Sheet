/**
 * @author Jim Tony
 * @Time_Complexity O(N^3)
 * @Space_Complexity O(N) --> Used for storing the result
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    let n = nums.length;
    if(n<4) return [];
    let ans = [];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<n-3;i++){
            for(let j=i+1;j<n-2;j++){
                    let left = j+1;
                    let right = n-1;
                    while(left<right){
                        if(nums[i]+nums[j]+nums[left]+nums[right]===target){
                            ans.push([nums[i],nums[j],nums[left],nums[right]]);
                            while(left<right && nums[left]===nums[left+1]) left++;
                            while(left<right && nums[right]===nums[right-1]) right--;
                            left++;
                            right--;
                        }
                        else if(nums[i]+nums[j]+nums[left]+nums[right]<target) left++;
                        else right--;
                    }
            while(nums[j]===nums[j+1]) j++;
            }
    while(nums[i]===nums[i+1]) i++;
    }
    return ans;
};