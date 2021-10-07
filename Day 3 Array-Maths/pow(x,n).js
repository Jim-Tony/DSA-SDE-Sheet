/**
 * @author Jim Tony
 * @Time_Complexity O(logN)
 * @Space_Complexity O(1)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if(x===0) return 0;
    if(n===0) return 1.0000;
    if(n===1) return x;
    let ncopy = n;
    if(ncopy<0) ncopy = -1*ncopy
    let ans = 1.0000;
    while(ncopy){
        if(ncopy&1) ans = ans*x;
        x = x*x;
        ncopy = ncopy>>>1;
    }
    if(n<0) return 1.0000/ans;
    return ans;
};