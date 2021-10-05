/**
 * @author Jim Tony
 * @Time_complexity O(N*N!)
 * @Space_Complexity O(N!+N) => Only Auxillary space
 * @param {number[]} nums
 * @return {number[][]}
 */
 var swap = function(nums,idx,i){
    var temp = nums[idx];
    nums[idx] = nums[i];
    nums[i] = temp;
    
}
var helper = function(nums,arr,idx){
  if(idx===nums.length){
      arr.push([...nums]);
      return;
  }  
  for(let i=idx;i<nums.length;i++){
      swap(nums,idx,i);
      helper(nums,arr,idx+1);
      swap(nums,idx,i);
  }
};
var permute = function(nums) {
    var arr = [];
    helper(nums,arr,0);
    arr.sort();
    return arr;
};