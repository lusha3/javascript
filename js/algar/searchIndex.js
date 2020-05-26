//采用二分查找的方法
//如果数据中含有该元素，则直接返回
//如果没有，则返回可以插入的地方
var searchIndex = function (arr, value) {
  var len = arr.length;
  if (len == 0) {
    return 0;
  }
  if (arr.indexOf(value) != -1) {
    return arr.indexOf(value);
  }
  if (arr[0] > value) {
    return 0;
  }
  if (arr[len - 1] < value) {
    return len;
  }
  return getIndex(arr, value, 0, len);
};

var getIndex = function (arr, value, start, end) {
  if (start > end) {
    return start;
  }
  var index = Math.floor((start + end) / 2);
  if (arr[index] == value) {
    return index;
  } else if (arr[index] > value) {
    return getIndex(arr, value, start, index - 1);
  } else if (arr[index] < value) {
    return getIndex(arr, value, index + 1, end);
  }
};

var arr = [1, 3, 5, 6];
console.log(searchIndex(arr, 5));
console.log(searchIndex(arr, 2));
console.log(searchIndex(arr, 7));
console.log(searchIndex(arr, 0));

var arr1 = [1, 3];
console.log(searchIndex(arr1, 2));
