/**
 * @author Jim Tony
 * @Time_Complexity O(N*2^N)
 * @Space_Complexity O(N*2^N) Every Time we are creating a string of max size N 
 * @param {string} s
 * @return {string[]}
*/

class Solution {

    AllPossibleStrings(s){
        let str  = [];
        let n = s.length;
        let tot = (1<<n);
        for(let i = 1;i<tot;i++){
            let ans = "";
            for(let j=0;j<n;j++){
                if(i&(1<<j)) ans+=s[j];
            }
            str.push(ans);
        }
        return str.sort();
    }
}
const str  = "ABC"
const obj = new Solution();
console.log(obj.AllPossibleStrings(str));