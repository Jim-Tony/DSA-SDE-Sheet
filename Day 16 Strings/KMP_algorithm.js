/**
 * @author Jim Tony
 * @Time_Complexity O(N+M)
 * @Space_Complexity O(M) M--> Size of the pattern
 * @param {string} pat
 * @param {string} txt
 * @returns {number[]}
*/

class Solution {
    computeLps(pat){
        let n = pat.length;
        let i = 1;
        let j = 0;
        let lps = new Array(n).fill(0);
        while(i<n){
            if(pat[i]===pat[j]){
                lps[i++] = ++j;
            }
            else{
                if(j!==0) j = lps[j-1];
                else i++;
            }
        }
        return lps;
    }
    search(pat, txt)
    {
        let ans = [];
        let tl = txt.length;
        let pl = pat.length;
        let ti = 0;
        let pi = 0;
        let lps = this.computeLps(pat);
        while(ti<tl){
            if(pat[pi]===txt[ti]){
                pi++;
                ti++;
            }
            if(pi===pl){
                ans.push(ti-pi+1);
                pi = lps[pi-1];
            }
            else if(pat[pi]!==txt[ti] && ti<tl){
                if(pi!==0) pi = lps[pi-1];
                else ti++;
            }
        }
        return ans;
    }
}