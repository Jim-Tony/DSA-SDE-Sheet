/**
 * @Author - Jim Tony
 * @Time_Complexity - O(N)
 * @Space_Complexity - O(1)
 * @param (number[])
 * @return number 
 */

class Solution{
    swap(num1,num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    maxProduct(arr){
        let l = arr.length;
        let max_so_far = arr[0];
        let min_so_far = arr[0];
        let product_max = arr[0];
        for(let i=1;i<l;i++){
            if(arr[i]<0) this.swap(max_so_far,min_so_far);
            max_so_far = Math.max(arr[i],arr[i]*max_so_far);
            min_so_far = Math.min(arr[i],arr[i]*min_so_far);
            product_max = Math.max(product_max,max_so_far);
        }
        return product_max;
    }
};
const obj1 = new Solution();
const arr = [2,3,-2,4];
console.log(obj1.maxProduct(arr));