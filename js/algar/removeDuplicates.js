//删除重复字符，依次删除相邻重复的两个字符，直到所有的字符被删除完成
var removeDuplicates = function (s) {
  var arr = s.split("");
  if (arr.length == 0 || arr.length == 1) {
    return s;
  }

  var stack = new Array();
  stack.push(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    var prev = stack.pop();
    if (arr[i] != prev) {
      stack.push(prev);
      stack.push(arr[i]);
    }
  }
  return stack.join("");
};
var removeDuplicates2 = function (s) {
  var arr = s.split("");
  if (arr.length == 0 || arr.length == 1) {
    return s;
  }

  var stack = new Array();
  stack.push(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    var prev = stack.pop();
    if (arr[i] != prev) {
      stack.push(prev);
      stack.push(arr[i]);
    }
  }
  return stack.join("");
};
