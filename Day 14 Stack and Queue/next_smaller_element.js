/**
 * 
 */
 class Solution{
     nextSmaller(arr,n){
        let right = new Array(n).fill(n);
        let st = [];
        st.push(0);
        for(let i=1;i<n;i++){
            while(st.length && arr[st[st.length-1]]>=arr[i]) {
                right[st[st.length-1]] = i;
                st.pop();
            }
            st.push(i);
        }
        return right;
     }
 }
 const arr = [1,10,5,9,6];
 const obj = new Solution();
 console.log(obj.nextSmaller(arr,arr.length));