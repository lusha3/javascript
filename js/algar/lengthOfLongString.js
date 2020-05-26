function lengthOfLongString(s) {
  var arr = s.split("");
  var newArr = [];
  var len = arr.length;
  var max = 0;
  if (len <= 1) return len;
  for (var i = 0; i < len; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
      max = Math.max(max, newArr.length);
    } else {
      max = Math.max(max, newArr.length);
      var index = newArr.indexOf(arr[i]);
      //删除从开始到出现重复的地方
      newArr.splice(0, index + 1);
      newArr.push(arr[i]);
    }
  }

  return max;
}
var str = "abcaabcdbb";
var ns = lengthOfLongString(str);
console.log(ns);
