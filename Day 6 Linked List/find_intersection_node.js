/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @author Jim Tony
 * @Time_Complexity O(N+M)
 * @Space_Complexity O(1)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let p = headA;
    let q = headB;
    while(p!==q){
        p = p!==null ? p.next : headB;
        q = q!==null ? q.next : headA;
    }
    return p;
};