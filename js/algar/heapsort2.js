/**
 * 原来之前已经处理过堆的问题 ，这个再重新回顾一下
 * 堆的先决条件：1，完全二叉树 2，每个节点都大于（小于）等于其左右子节点
 * 堆的常见操作：插入，删除
 * 堆的使用场景：topk,优先级队列，排序
 * 下面首先实现一下排序算法：
 * 堆排序分为两部：
 *  1,堆化过程，每次堆化后将获得一个最大值或者最小值 ---建堆
 *  2,将剩下的数据一次遍历，直到获取所有的数据  ---排序
 * 这里首先使用从上往下的方式：这里的从上往下主要是考虑堆化的过程
 * 构建大顶堆
 */

/**
 *
 * 在初始建堆 的时候，已经将整个堆调整为满足条件的结构
 * 之后排序，只需要调整堆顶元素即可
 */

var heapSort = function (list) {
  var len = list.length;

  if (len == 1) {
    return list;
  }
  var heapLength = len - 1;
  //建堆
  for (var i = Math.ceil((len - 1) / 2); i >= 0; i--) {
    heapify(list, i, len);
  }

  console.log(list);

  //排序
  while (heapLength > 0) {
    list = newSwap(list, 0, heapLength);
    console.log("current;" + list);
    heapLength--;

    heapify(list, 0, heapLength);
    console.log(`current heapLength; ${heapLength}, current list: ${list}`);
  }

  return list;
};

//堆化
var heapify = function (list, i, length) {
  while (true) {
    // console.log(i);
    var current = i;
    if (list[i] < list[2 * i + 1] && 2 * i + 1 <= length) current = 2 * i + 1;
    if (list[current] < list[2 * i + 2] && 2 * i + 2 <= length)
      current = 2 * i + 2;
    if (current == i) {
      break;
    }
    list = newSwap(list, i, current);
    i = current;
  }

  return list;
};

//删除堆
var delHeap = function (list) {
  var len = list.length;
  list[0] = list[len - 1];
  list.pop();
  return heapSort(list);
};

var newSwap = function (list, i, j) {
  var temp = list[i];
  list[i] = list[j];
  list[j] = temp;
  // console.log("new:" + list);
  return list;
};

let Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
heapSort(Arr);
// let a = [3, 6, 2, 5, 4, 1, 2, 5];
// heapSort(a);
// console.log(Arr);
