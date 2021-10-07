/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @algorithm  Moore's Voting Algorithm 
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let cnt = 0;
    let cur = 0;
    for(let val of nums){
        if(cnt===0) cur = val;
        if(cur===val) cnt++;
        else cnt--;
    }
    return cur;
};