
/**
 * @author Jim Tony
 * @Time_Complexity O(N+N)
 * @Space_Complexity O(N)
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
*/
 
class Solution 
{
    isAnagram(a, b)
    {
        if(a.length!==b.length) return false;
        let mp = new Array(256).fill(0);
        for(let i=0;i<a.length;++i){
            mp[a[i].charCodeAt()-'a'.charCodeAt()]++;
            mp[b[i].charCodeAt()-'a'.charCodeAt()]--;
        }
        for(let i=0;i<256;++i){
            if(mp[i]!==0) return false;
        }
        return true;
    }
}