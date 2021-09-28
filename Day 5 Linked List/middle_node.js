/**
 * @Author Jim Tony
 * @Time_Complexity O(N)
 * @Space_Complexity O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
 };
 