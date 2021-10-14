/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let tmp = new ListNode();
    let dup = tmp;
    let car = 0;
    while(l1 || l2 || car){
        let sum = 0;
        if(l1) {
            sum+=l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum+=l2.val;
            l2 = l2.next;
        }
        sum+=car;
        car = Math.floor(sum/10);
        dup.next = new ListNode(sum%10);
        dup = dup.next;
    }
    return tmp.next;
};