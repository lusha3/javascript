var preorderTraversal = function (root) {
  //采用迭代方法
  if (root == null) return [];
  //迭代的方法主要是使用栈
  var result = [];
  var stack = [];
  stack.push({
    node: root,
    color: "white",
  });

  while (stack.length > 0) {
    var pickNode = stack.pop();
    let { node, color } = pickNode;
    if (color == "grey") {
      result.push(node.val);
    } else {
      node.right &&
        stack.push({
          node: node.right,
          color: "white",
        });
      node.left &&
        stack.push({
          node: node.left,
          color: "white",
        });
      stack.push({
        node: node,
        color: "grey",
      });
    }
  }

  return result;
};
