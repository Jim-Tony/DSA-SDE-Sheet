/**
 * @author Jim Tony
 * @Time_Complexity O(N+K)
 * @Space_Complexity O(N)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let arr = [];
    let dq = [];
    for(let i=0;i<k;i++){
        while(dq.length && nums[dq[dq.length-1]]<nums[i]) dq.pop();
        dq.push(i);
    }
    arr.push(nums[dq[0]]);
    for(let i=k;i<nums.length;i++){
        if(dq[0]===i-k) dq.shift();
        while(dq.length && nums[dq[dq.length-1]]<nums[i]) dq.pop();
        dq.push(i);
        arr.push(nums[dq[0]]);
    }
    return arr;
};