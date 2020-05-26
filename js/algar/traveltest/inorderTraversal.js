//中序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var inorderTravelsal = function (node) {
  if (node == null) {
    return node;
  }
  var stack = [];
  stack.push(...inorderTravelsal(node.left));
  stack.push(node.val);
  stack.push(...inorderTravelsal(node.right));
  return stack;
};

//通过栈的方式，根据每个节点的中序遍历的逆序入栈
var inorderTravelsal = function (root) {
  if (root == null) {
    return root;
  }
  //可以使用栈来实现，并将处理过的标记为白
  var stack = [];
  stack.push({
    color: "white",
    node: root,
  });
  var result = [];
  while (stack.length > 0) {
    var item = stack.pop();
    const { color, node } = item;
    if (color == "grey") {
      result.push(node.val);
    } else {
      node.right && stack.push({ color: "white", node: node.right });
      stack.push({ color: "grey", node: node });
      node.left && stack.push({ color: "white", node: node.left });
    }
  }

  return result;
};

//需要颜色的原因是因为会重复的处理
var inorderTravelsal2 = function (root) {
  if (root == null) return root;
  var stack = [];
  var result = [];
  stack.push({ node: root, color: "white" });
  while (stack.length > 0) {
    var pickNode = stack.pop();
    let { node, color } = pickNode;
    if (color == "grey") {
      result.push(node.val);
    } else {
      if (node.left != null) {
        stack.push({ node: node, color: "grey" });
        stack.push({ node: node.left, color: "white" });
      } else {
        result.push(node.val);
        node.right && stack.push(node.right);
      }
    }
  }
  return result;
};
