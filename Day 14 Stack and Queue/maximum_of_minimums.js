/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(N+N+N)
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/
/**
 * @Method
 * Find the next smaller element in an array right[]
 * Find the previous smaller element in an array left[]
 * Subtract right[] from left[]
 * Calculate the max value using below algorithm
 */

class Solution
{
    maxOfMin(arr, n)
    {
        
        let st = [];
        let right = new Array(n).fill(n);
        let left = new Array(n);
        st.push(0);
        for(let i=1;i<n;i++){
            while(st.length && arr[st[st.length-1]]>=arr[i]) {
                right[st[st.length-1]] = i;
                st.pop();
            }
            st.push(i);
        }
        st = [];
        for(let i=0;i<n;i++){
            while(st.length && arr[st[st.length-1]]>=arr[i]) st.pop();
            if(st.length===0) left[i] = -1;
            else left[i] = st[st.length-1]; 
            st.push(i);
        }
        let ans = new Array(n+1).fill(0);
        for(let i=0;i<n;i++){
            let len = right[i]-left[i]-1;
            ans[len] = Math.max(ans[len],arr[i]);
        }
        for(let i=n-1;i>=0;i--){
            ans[i] = Math.max(ans[i],ans[i+1]);
        }
        // console.log(ans);
        return ans.slice(1,ans.length);
    }
}