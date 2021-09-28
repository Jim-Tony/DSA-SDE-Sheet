/**
 * @Author Jim Tony
 * @Time_Complexity O(N*N)
 * @Space_Complexity O(N)
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

 class Solution {
    maxSumIS(arr,n){
        let sumcopy =  [...arr];
        for(let i=1;i<n;i++){
            for(let j=0;j<i;j++){
                if(arr[i]>arr[j]){
                    sumcopy[i] = Math.max(sumcopy[i],arr[i]+sumcopy[j]);
                }
            }
        }
        return Math.max(...sumcopy);
    }
}