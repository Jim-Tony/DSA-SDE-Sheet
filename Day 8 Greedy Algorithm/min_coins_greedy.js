class Solution{
    minNumberCoins(coins,n,price_val){
        let ans = [];
        for(let i = n-1;i>=0;i--){
            while(price_val>=coins[i]){
                price_val = price_val - coins[i];
                ans.push(coins[i]);
            }
        }
        return ans;
    }
}

const coins = [1,2,5,10,20,50,100,200,500,1000];
let price_val = 49;
const obj = new Solution();

console.log(obj.minNumberCoins(coins,coins.length,price_val));