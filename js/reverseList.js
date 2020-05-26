var reversList = function (head) {
  if (head.next == null) return head;
  var curr = head.next;
  //将头节点的写一个置为空
  head.next == null;

  while (curr.next != null) {
    var next = curr.next;
    curr.next == head;
    head = curr;
    curr = next;
  }
  return head;
};

//采用递归的方式，递归最重要的是边界条件
var reversList2 = function (head) {
  //递归的反转每个节点
  //如果head为空或者head.next为空，则直接返回head
  if (!head || !head.next) return head;

  var curr = head.next;
  var newHead = reversList2(curr);

  newHead.next = head;
  head.next = null;
  return newHead;
};
