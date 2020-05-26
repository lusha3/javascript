//判断是否是平衡二叉树，采用递归的方式
var isBalanced = function (root) {
  if (root == null) return true;
  var leftH = treeHeight(root.left);
  var rightH = treeHeight(root.right);
  if (Math.abs(leftH - rightH) < 2) {
    return true;
  }
  return false;
};

var treeHeight = function (root) {
  if (root == null) return 0;
  var lh = treeHeight(root.left) + 1;
  var rh = treeHeight(root.right) + 1;
  return Math.max(lh, rh);
};
