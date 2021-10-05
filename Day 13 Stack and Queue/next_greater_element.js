/** 
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(N)
 * @param {BigInt[]} arr
 * @param {number} n
 * @returns {BigInt[]}
*/
class Solution
{
    nextLargerElement(arr, n)
    {
        let st = [];
        let ans = new Array(n).fill(-1);
        st.push(0);
        for(let i=1;i<n;i++){
            while(st.length && arr[i]>=arr[st[st.length-1]]){
                ans[st[st.length-1]] = arr[i]; 
                st.pop();
            }
            st.push(i);
        }
        return ans;
    }
}