/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @author Jim Tony
 * @Time_Complexity O(N+M)
 * @Space_Complexity O(1)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val>l2.val) [l1,l2] = [l2,l1];
    let res =  l1;
    while(l1 && l2){
        let tmp  = new ListNode();
        while(l1 && l1.val<=l2.val){
            tmp = l1;
            l1 = l1.next;
        }
        tmp.next = l2;
        [l2,l1] = [l1,l2];
    }
    return res;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head1 = new ListNode(1,new ListNode(3,new ListNode(8,new ListNode(9,new ListNode(7)))));
let head2 = new ListNode(3,new ListNode(4,new ListNode(5,new ListNode(6,new ListNode(10)))));
var result_head = mergeTwoLists(head1,head2);
let p = result_head;
while(p){
    console.log(p.val);
    p = p.next;
}
