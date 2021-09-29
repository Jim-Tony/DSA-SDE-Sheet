
/**
 * @Author Jim Tony
 * @Method Memorization DP
 * @Space_Complexity O(N)
 * @Time_Complexity O(N*N)
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    helper(arr,i,j,memo={}){
        if(i>=j) return 0;
        let key = i+','+j;
        if(key in memo) return memo[key];
        let ans = Number.MAX_SAFE_INTEGER;
        for(let k=i;k<j;k++){
            let tmp = arr[i-1]*arr[k]*arr[j]+this.helper(arr,i,k,memo)+this.helper(arr,k+1,j,memo);
            ans = Math.min(ans,tmp);
        }
        return memo[key] = ans;
    }
    matrixMultiplication(arr, n)
    {
        return this.helper(arr,1,n-1);
    }
}
const obj = new Solution();
const arr = [40, 20, 30, 10, 30];
const result = obj.matrixMultiplication(arr,arr.length);
console.log(result);