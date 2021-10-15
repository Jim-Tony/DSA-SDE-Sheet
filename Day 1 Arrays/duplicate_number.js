/**
 * @Author Jim Tony
 * @method - Doing inplace but the input array is disorted
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

/**
 * @method - Doing inplace with no change in the input array
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {number[]} nums
 * @return {number}
 */

 var findDuplicate1 = function(nums) {
    let fast =  nums[0];
    let slow = nums[0];
    do{
        slow = nums[slow];
        fast = nums[nums[fast]];
    }while(slow!==fast);
    fast = nums[0];
    while(slow!==fast){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};
const arr1 = [1,2,3,4,4];
console.log(findDuplicate1(arr1));
