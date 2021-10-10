/**
 * @author Jim Tony
 */


/**
 * @method Better
 * @Time_Complexity O(N)+O(N)
 * @Space_Complexity O(256) 
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s==="") return 0;
    let st = new Set();
    let a = 0;
    let b = 0;
    let ans = 0;
    while(b<s.length){
        if(st.has(s[b])===false) {
            st.add(s[b]);
            b++;
            ans = Math.max(st.size,ans);
        }
        else {
            st.delete(s[a]);
            a++;
        }
    }
    return ans;
};

/**
 * @method Optimal
 * @Time_Complexity O(N)
 * @Space_Complexity O(256) 
 * @param {string} s
 * @return {number}
 */

 var lengthOfLongestSubstring = function(s) {
    if(s==="") return 0;
    let mp = new Map();
    let a = 0;
    let b = 0;
    let ans = 0;
    while(b<s.length){
        if(mp.has(s[b])) a = Math.max(a,mp.get(s[b])+1);
        mp.set(s[b],b);
        ans = Math.max(ans,b-a+1);
        b++;
    }
    return ans;  
};