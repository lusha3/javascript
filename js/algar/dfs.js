/**
 * dfs, 深度优先遍历
 * @node {key:"",val:"",children:[]}
 */

import { func } from "prop-types";

//递归方法
function deepFirstSearch(node, nodeList) {
  if (node) {
    //将已处理的节点添加至数组中
    nodeList.push(node);
    var children = node.children;
    for (var i = 0; i < children.length; i++) {
      //逐个处理子节点
      deepFirstSearch(children[i], nodeList);
    }
  }
  return nodeList;
}

function deepSearch(node) {
  var nodes = [];
  if (node != null) {
    var stack = []; //define a stack
    stack.push(node); //push stack
    while (stack.length != 0) {
      //stack is not empty
      var item = stack.pop();
      nodes.push(item);
      var children = item.children;
      for (var i = children.length - 1; i >= 0; i--) {
        stack.push(children[i]);
      }
    }
  }
  return nodes;
}

function breadthFirstSearch(node) {
    
}

//非递归的方式，则是通过queue队列，逐个入queue
function breadthSearch()