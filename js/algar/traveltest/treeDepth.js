/**
 * 获取树的最大深度
 * 给定的是树的根节点
 *
 * 主要考察点：深度优先遍历
 */

var treeDepth = function (node) {
  if (node == null) return 0;
  var count = 0;
  count += Math.max(treeDepth(node.left), treeDepth(node.right));
  return count;
};
