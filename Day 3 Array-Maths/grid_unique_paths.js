/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {number} a
 * @param {number} b
 * @returns {number}
*/

class Solution 
{
    NumberOfPath(a, b)
    {
        let n = a+b-2;
        let r = b-1;
        let ans = 1;
        for(let i=1;i<=r;i++){
            ans*=(n-r+i);
            ans = Math.floor(ans/i);
        }
        return ans;
    }
}