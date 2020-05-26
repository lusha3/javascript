/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  var newHead = null;
  var p = head;
  while (p != null) {
    var q = p.next;
    p.next = newHead;
    newHead = p;
    p = q;
  }
  return newHead;
};

[
  {
    id: 3,
    rank: 45
  },
  {
    id: 4,
    rank: 40
  }
];
