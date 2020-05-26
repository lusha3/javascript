//后序遍历 左右中
var postorderTraversal = function (root) {
  if (root == null) return root;
  let result = [];
  result.push(...postorderTraversal(root.left));
  result.push(...postorderTraversal(root.right));
  result.push(root.varl);

  return result;
};

//采用迭代的方式，主要是用栈模拟处理过程
var postorderTraversal1 = function (root) {
  if (root == null) return root;
  let result = [];
  var stack = [];
  //root节点
  stack.push({
    color: "white",
    node: root,
  });
  //栈不为空，则一直处理
  while (stack.length > 0) {
    var pn = stack.pop();
    let { color, node } = pn;
    if (color == "grey") {
      result.unshift(node.val);
    } else {
      //右边节点
      node.right &&
        stack.push({
          color: "white",
          node: node.right,
        });

      //左边节点
      node.left &&
        stack.push({
          color: "white",
          node: node.left,
        });
      //中间节点入栈
      stack.push({
        color: "grey",
        node: node,
      });
    }
  }

  return result;
};

var postorderTraversal2 = function (root) {
  if (root == null) return root;
  let result = [];
  var stack = [];
  //root节点
  stack.push({
    color: "white",
    node: root,
  });
  //栈不为空，则一直处理
  while (stack.length > 0) {
    var pn = stack.pop();
    let { color, node } = pn;
    if (color == "grey") {
      result.push(node.val);
    } else {
      //中间节点入栈
      stack.push({
        color: "grey",
        node: node,
      });
      //右边节点
      node.right &&
        stack.push({
          color: "white",
          node: node.right,
        });

      //左边节点
      node.left &&
        stack.push({
          color: "white",
          node: node.left,
        });
    }
  }

  return result;
};
