/**
 * @author Jim Tony
 * @Algorithm Moore's Voting Algorithm
 * @Time_Complexity O(N+N)
 * @Space_Complexity O(N) --> To return the answer
 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    let n = nums.length;
    let n1;
    let n2;
    let cnt1 = 0;
    let cnt2 = 0;
    for(let val of nums){
        if(val===n1) cnt1++;
        else if(val===n2) cnt2++;
        else if(cnt1===0) {
            n1 = val;
            cnt1++;
        }
        else if(cnt2===0){
            n2 = val;
            cnt2++;
        }
        else {
            cnt1--;
            cnt2--;
        }
    }
    cnt1 = 0;cnt2 = 0;
    for(let val of nums){
        if(val===n1) cnt1++;
        if(val===n2) cnt2++;
    }
    let ans = [];
    if(cnt1>Math.floor(n/3)) ans.push(n1);
    if(cnt2>Math.floor(n/3)) ans.push(n2);
    return ans;
};