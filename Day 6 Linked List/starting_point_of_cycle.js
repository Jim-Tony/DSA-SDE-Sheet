/**
 * @author Jim Tony
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @method Using Hashset
 * @Time_Complexity O(N)
 * @Space_Complexity O(N)
 * @param {ListNode} head 
 * @returns {ListNode}
 */
var detectCycle =  function(head){
    if(!head || !head.next) return null;
    let st = new Set();
    let p = head;
    while(p){
        if(st.has(p)) return p;
        st.add(p);
        p = p.next;
    } 
    return null;
};

/**
 * @method without using extra space
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head){
    if(!head || !head.next) return null;
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow===fast){
            let start = head;
            while(slow!=start){
                slow = slow.next;
                start = start.next;
            }
            return slow;
        }
    }
    return null;
};