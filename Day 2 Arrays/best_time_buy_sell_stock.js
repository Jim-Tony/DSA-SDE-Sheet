/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let mini = Number.MAX_SAFE_INTEGER;
    let ans = 0;
    for(let val of prices){
        mini = Math.min(val,mini);
        ans = Math.max(ans,val-mini);
    }
    return ans;
};