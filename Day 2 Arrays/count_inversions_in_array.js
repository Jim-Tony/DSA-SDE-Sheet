/**
 * @author Jim Tony
 * @Time_Complexity O(NLogN)
 * @Space_Compleixty O(N)
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    merge(arr,tmp,low,mid,high){
        let inv = 0;
        let i=low,k=low,j=mid;
        while(i<mid && j<=high){
            if(arr[i]<=arr[j]){
                tmp[k++] = arr[i++];
            }
            else{
                tmp[k++] = arr[j++];
                inv+=(mid-i);
            }
        }
        while(i<mid) tmp[k++] = arr[i++];
        while(j<=high) tmp[k++] = arr[j++];
        for(let i=low;i<=high;i++) arr[i] = tmp[i];
        return inv;
    }
    mergeSort(arr,tmp,low,high){
        let inv = 0;
        if(high>low){
            let mid = Math.floor((low+high)/2);
            inv+=this.mergeSort(arr,tmp,low,mid);
            inv+=this.mergeSort(arr,tmp,mid+1,high);
            inv+=this.merge(arr,tmp,low,mid+1,high);
        }
        return inv;
    }
    inversionCount(arr, N)
    {
        let tmp = new Array(N);
        return this.mergeSort(arr,tmp,0,N-1);
    }
}