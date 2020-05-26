/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

*/
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let len = lists.length;
  if (len == 0) {
    return [];
  }
  if (len == 1) {
    return lists[0];
  }
  var newList = merge(lists);
  return quickSort(newList);
};
var merge = function (lists) {
  var newList = new Array();
  for (var i = 0; i < lists.length; i++) {
    newList.push(...lists[i]);
  }

  return newList;
};
var quickSort = function (arr) {
  if (arr.length <= 1) {
    //如果数组长度小于等于1无需判断直接返回即可
    return arr;
  }
  // var pivotIndex = Math.floor(arr.length / 2); //取基准点
  // var pivot = arr.splice(pivotIndex, 1)[0]; //取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
  var pivot = arr.splice(0, 1)[0];
  var left = []; //存放比基准点小的数组
  var right = []; //存放比基准点大的数组
  for (var i = 0; i < arr.length; i++) {
    //遍历数组，进行判断分配
    if (arr[i] < pivot) {
      left.push(arr[i]); //比基准点小的放在左边数组
    } else {
      right.push(arr[i]); //比基准点大的放在右边数组
    }
  }
  //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
  return quickSort(left).concat([pivot], quickSort(right));
};

var list = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

console.log(mergeKLists(list));
