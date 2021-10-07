/**
 * @author Jim Tony
 * @Time_Complexity O(NLogN)+O(MLogM)+O(min(m,n))
 * @Space_Complexity O(1);
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} n
 * @param {number} m
*/

class Solution {
    merge(arr1, arr2, n, m)
    {
        let ptr1 =n-1;
        let ptr2 =0;
        while(ptr1>=0 && ptr2<m){
            if(arr1[ptr1]>arr2[ptr2]) [arr1[ptr1],arr2[ptr2]] = [arr2[ptr2],arr1[ptr1]];
            ptr1--;
            ptr2++;
        }
        arr1.sort((a,b)=>a-b);
        arr2.sort((a,b)=>a-b);
    }
}