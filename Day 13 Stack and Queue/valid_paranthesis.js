/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(N)
 * @param {string} x
 * @returns {boolean}
*/

class Solution
{
    ispar(x)
    {
        let st = [];
        for(let c of x){
            if(c==='{' || c==='(' || c==='[') st.push(c);
            else if(c==='}' && st.length) {
                if(st[st.length-1]==='{') st.pop();
                else return false;
            }
            else if(c===')' && st.length){
                if(st[st.length-1]==='(') st.pop();
                else return false;
            }
            else if(c===']' && st.length){
                if(st[st.length-1]==='[') st.pop();
                else return false;
            }
            else return false;
        }
        return st.length===0;
    }
}
const str = '{{[]}}';
const obj = new Solution();
const res = obj.ispar(str);
console.log(`The paranthesis ${str} is ${res===true?"Balanced":"Not Balanced"}`);