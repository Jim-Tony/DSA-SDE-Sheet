/**
 * @Author Jim Tony
 * @Time_Complexity O(N*N)
 * @Space_complexity O(N+N)
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

 var jobScheduling = function(startTime, endTime, profit) {
    let n = startTime.length;
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        let obj = {
            st:startTime[i],
            en:endTime[i],
            pro:profit[i],
        };
        arr.push(obj);
    }
    arr.sort((a,b)=>a.en-b.en);
    let dp = new Array(n);
    dp[0] = arr[0].pro;
    for(let i=1;i<n;i++){
        dp[i] = Math.max(dp[i-1],arr[i].pro);
        for(let j=i-1;j>=0;j--){
            if(arr[j].en<=arr[i].st) {
                dp[i] = Math.max(dp[i],dp[j]+arr[i].pro); break;
            }
        }
    }
    
    return dp[n-1];
    
};