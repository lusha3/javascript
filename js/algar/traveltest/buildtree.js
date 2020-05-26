//题解
/**
 *
 * @param {array}} preorder 前序遍历
 * @param {array} inorder 中序遍历
 *
 * 思路：构建树的过程主要通过递归的方式，逐个获得节点
 * 前序遍历的特点：第一位数肯定是根节点
 * 中序遍历：根节点的左边肯定是左子树，根节点的右边肯定是右子树
 */
var buildTree = function (preorder, inorder) {
  var pLen = preorder.length;
  var iLen = inorder.length;
  //输入异常或者长度为0
  if (pLen != iLen || pLen == 0) return null;

  var val = preorder.shift();
  var treeNode = {
    val: val,
    left: undefined,
    right: undefined,
  };

  var index = inorder.indexOf(val);
  console.log(index);
  var ileftTree = index != -1 ? inorder.slice(0, index) : [];
  var irightTree = index != -1 ? inorder.slice(index + 1) : inorder;

  console.log(`ileftTree:${ileftTree}`);
  console.log(`irightTree:${irightTree}`);

  var pleft = preorder.slice(0, ileftTree.length);
  var pright = preorder.slice(ileftTree.length);
  console.log(`pleft:${pleft}`);
  console.log(`pright:${pright}`);

  treeNode.left = buildTree(pleft, ileftTree);
  treeNode.right = buildTree(pright, irightTree);

  return treeNode;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
