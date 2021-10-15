/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if(!head.next) return true;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow =  slow.next;
        fast = fast.next.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;
    let c = head;
    while(slow){
        if(c.val!==slow.val) return false;
        slow = slow.next;
        c = c.next;
    }
    return true;
};
 
var reverseList = function(head){
    if(!head || !head.next) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p; 
};