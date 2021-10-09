/**
 * @author Jim Tony
 * @Time_Complexity O(N)+O(N)+O(N)
 * @Space_Complexity O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var swap = function(nums,idx1,idx2){
    [nums[idx1],nums[idx2]] = [nums[idx2],nums[idx1]];
};
var reverse = function(nums,i,j){
    while(i<j){
        swap(nums,i,j);
        i++; j--;
    }
}
var nextPermutation = function(nums) {
    
    let n = nums.length;
    if(n===1) return;
    var idx1 = n-2;
    while(idx1>=0 && nums[idx1]>=nums[idx1+1]) idx1--;
    if(idx1>=0){
        var idx2 = n-1;
        while(idx2>=0 && nums[idx1]>=nums[idx2]) idx2--;
    }
    
    swap(nums,idx1,idx2);
    reverse(nums,idx1+1,n-1);
};