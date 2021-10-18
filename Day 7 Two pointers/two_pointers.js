/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let leftmax = 0;
    let rightmax = 0;
    let ans = 0;
    let l = 0;
    let r = height.length-1;
    while(l<=r){
        if(height[l]<=height[r]){
            if(height[l]>=leftmax) leftmax = height[l];
            else ans+=leftmax-height[l];
            l++;
        }
        else{
            if(height[r]>=rightmax) rightmax = height[r];
            else ans+=rightmax-height[r];
            r--;
        }
    }
    return ans;
    
};