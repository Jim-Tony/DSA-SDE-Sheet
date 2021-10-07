/**
 * @author Jim Tony
 * @Time_Complexity O(NLogN) + O(N) 
 * @Space_Complexity O(N)
 * @param {number[]} nums
 * @return {number}
 */
 var merge = function(nums,tmp,low,mid,high){
    let cnt = 0;
    let j=mid;
    for(let p=low;p<mid;p++){
        while(j<=high && nums[p]>2*nums[j]) j++
        cnt+=(j-mid);
    }
    let it = low,k=low,jt = mid;
    while(it<mid && jt<=high){
        if(nums[it]<=nums[jt]) tmp[k++] = nums[it++];
        else tmp[k++] = nums[jt++];
    }
    while(it<mid) tmp[k++] = nums[it++];
    while(jt<=high) tmp[k++] = nums[jt++];
    for(let i=low;i<=high;i++) nums[i] = tmp[i];
    return cnt;
} 
var mergeSort = function(nums,tmp,low,high){
    let cnt = 0;
    if(high>low){
        let mid = Math.floor((low+high)/2);
        cnt+=mergeSort(nums,tmp,low,mid);
        cnt+=mergeSort(nums,tmp,mid+1,high);
        cnt+=merge(nums,tmp,low,mid+1,high);
    }
    return cnt;
};
var reversePairs = function(nums) {
    let N = nums.length;
    let tmp = new Array(N);
    return mergeSort(nums,tmp,0,N-1);
};