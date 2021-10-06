/**
 * @author Jim Tony
 * @Time_Complexity O(N +N*logN)
 * @Space_Complexity O(N)
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(arr) {
    let n = arr.length;
    if(n===1) return arr[0];
    arr.sort((a,b)=>a.localeCompare(b));
    let str = "";
    for(let i=0;i<arr[0].length;i++){
        if(arr[0][i]===arr[n-1][i]) str+=arr[0][i];
        else break;
    }
    return str;
};
