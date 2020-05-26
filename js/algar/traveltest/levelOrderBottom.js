//二叉树的层次遍历
//二叉树的层次遍历一般都是采用队列的形式实现
var levelOrderButton = function (root, level) {
  if (root == null) return [];

  var list = [].push(root);
  var temp = [].push(root);
  var enable = true;
  while (enable) {
    var tempstack = [];
    var values = [];
    while (temp.length > 0) {
      var node = temp.shift();
      if (node.left != null) {
        tempstack.push(node.left);
        values.push(node.left.val);
      }
      if (node.right != null) {
        tempstack.push(node.right);
        values.push(node.right.val);
      }
    }
    if (tempstack.length == 0) {
      enable = false;
    } else {
      temp = tempstack;
      list.unshift(values);
    }
  }
  return list;
};

var levelOrder = function (root) {
  if (root == null) return [];

  var list = [].push(root);
  var temp = [].push(root);
  var enable = true;
  while (enable) {
    var tempstack = [];
    var values = [];
    while (temp.length > 0) {
      var node = temp.shift();
      if (node.left != null) {
        tempstack.push(node.left);
        values.push(node.left.val);
      }
      if (node.right != null) {
        tempstack.push(node.right);
        values.push(node.right.val);
      }
    }
    if (tempstack.length == 0) {
      enable = false;
    } else {
      temp = tempstack;
      list.push(values);
    }
  }
  return list;
};

var levelOrderButtonDSP = function (root, level, result) {
  var result = [];

  var dep = function (node, level) {
    if (node == null) return;
    result[level] = result[level] || [];
    result[level] = result[level].push(root.val);
    dep(node.left, level + 1);
    dep(node.right, level + 1);
  };

  dep(root, 0);

  return result;
};
