import { withRouter } from "react-router";

var hasPathSum = function (root, sum) {
  //到达空节点，同时sum不为0,则肯定不满足
  if (root == null) return false;

  if (root.left == null && root.right == null && root.val == sum) {
    return sum == 0;
  }
  var larr = hasPathSum(root.left, sum - root.val);
  var rarr = hasPathSum(root.right, sum - root.val);
  if (larr || rarr) return true;

  return false;
};
