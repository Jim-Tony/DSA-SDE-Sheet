//Install the below mentioned npm package in the terminal (npm install priority-queue-node)
const PriorityQueue = require('priority-queue-node');
/**
 * @author Jim Tony
 * @Time_Complexity O(N+log(N))
 * @Space_Complexity O(N)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    const pq = new PriorityQueue((a,b)=>b-a);
    for(let val of nums) pq.enqueue(val);
    while(pq.size() && --k) pq.dequeue();
    return pq.peek();
};
const arr = [3,2,3,1,2,4,5,5,6];
let k = 4;
console.log(findKthLargest(arr,k));