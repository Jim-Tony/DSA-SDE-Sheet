class Solution {
        subarrayXor(nums,k) {
            let mp = new Map();
            let xor = 0,cnt= 0;
            for(let val of nums){
                xor = xor^val;
                if(xor===k) cnt++;
                if(mp.has(xor^k)) cnt = cnt+mp.get(xor^k);
                mp.set(xor,(mp.get(xor)||0)+1);
            }
            return cnt;
        }
}
const arr = [5, 6, 7, 8, 9];
const k = 5;
const obj = new Solution();

console.log(obj.subarrayXor(arr,k));