/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @author Jim Tony
 * @Time_Complexity O(N) N->Number of nodes
 * @Space_Complexity O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let p = head;
    while(n--){
        p = p.next;
        if(!p) return head.next;
    }
    let q = head;
    while(p.next){
        q = q.next;
        p = p.next;
    }
    q.next = q.next.next;
    return head;
};