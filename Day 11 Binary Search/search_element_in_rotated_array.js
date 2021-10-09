/**
 * @author Jim Tony
 * @Time_Complexity O(logN)
 * @Space_Complexity O(1)
 * @param {number[]} A
 * @param {number} key
 * @return {number}
 */
 var search = function(A, key) {
    let l = 0;
    let h = A.length-1;
    while(l<=h){
        let mid = Math.floor((l+h)/2);
        if(A[mid]===key) return mid;
        else if(A[l]<=A[mid]){
            if(A[l]<=key && key<=A[mid]){
                h = mid-1;
            }
            else l = mid+1;
        }
        else{
            if(A[mid]<=key && key<=A[h]){
                l = mid+1;
            }
            else h = mid-1;
        }
    }
    return -1;
};
const arr = [4,5,6,7,0,1,2];
let target = 0;
console.log(`The index of ${target} in the array is ${search(arr,target)}`);