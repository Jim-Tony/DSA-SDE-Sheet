/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if(!head || !head.next || k===0) return head;
    let len = 1;
    let p = head;
    while(p.next && ++len) p = p.next;
    p.next = head;
    k = k%len;
    k = len - k;
    while(k--){
        p = p.next;
    }
    head = p.next;
    p.next = null;
    return head;
};