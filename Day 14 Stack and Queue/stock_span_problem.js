/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(N)
 * @param {number[]} price
 * @param {number} n
 * @returns {number[]}
*/
class Solution
{
    calculateSpan(price, n)
    {
        //Finding the previous greater element
        let st = [];
        let ans = [];
        for(let i=0;i<n;i++){
            while(st.length && price[st[st.length-1]]<=price[i]) st.pop();
            if(st.length===0) ans.push(i+1);
            else ans.push(i-st[st.length-1]);
            st.push(i);
        }
        return ans;
    }
}