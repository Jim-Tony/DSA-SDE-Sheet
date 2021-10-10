/**
 * @author Jim Tony
 * @Time_Complexity O(N)+O(N)+O(N)
 * @Space_Complexity O(N)
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if(nums.length===0) return 0;
    if(nums.length===1) return 1;
    let st = new Set(nums);
    let ans = 0;
    for(let val of nums){
        if(st.has(val-1)===false){
            let cur =  val;
            let cur_streak = 1;
            while(st.has(++cur)) cur_streak++;
            ans = Math.max(ans,cur_streak);
        }
    }
    return ans;
};