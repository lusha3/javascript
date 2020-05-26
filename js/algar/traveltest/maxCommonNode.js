import { node } from "prop-types";

//假如输入的是一个数组
var maxCommonNode = function (arr, a, b) {
  var aindex = arr.indexOf(a);
  var bindex = arr.indexOf(b);
  console.log(`aindex:${aindex}, bindex:${bindex}`);

  var i = aindex;
  var aParent = [];

  while (i >= 0) {
    var j = Math.floor((i - 1) / 2);
    if (arr[j] == b) {
      return arr[j];
    }
    aParent.push(arr[j]);
    i = j;
  }
  i = bindex;
  while (i >= 0) {
    var j = Math.floor((i - 1) / 2);
    if (aParent.indexOf(arr[j]) != -1) {
      return arr[j];
    }
    i = j;
  }
  return 0;
};

var a = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
var p = 5;
var q = 1;

console.log(maxCommonNode(a, p, q));

//二叉搜索树最大公共父组件，因为是二叉搜索树，有个特点是左边的树都比跟节点小，右边的树都比根节点大
//root是一个根节点
//此处采用递归的方式
//1
var maxCommonNode2 = function (root, p, q) {
  if (root == null) return root;
  if (p.val < root.val && q.val < root.val) {
    return maxCommonNode2(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    return maxCommonNode2(root, right, p, q);
  }

  return root;
};

//二叉树的最大公共父节点
var maxCommonNode3 = function (root, p, q) {
  if (root == null) return root;
  if (root.val == p.val || root.val == q.val) return root;

  //分别处理左右子树
  var leftnode = maxCommonNode3(root.left, p, q);
  var rightnode = maxCommonNode3(root.right, p, q);

  if (leftnode != null && rightnode != null) {
    return root;
  }

  if (leftnode != null) return leftnode;
  if (rightnode != null) return rightnode;
  return null;
};
