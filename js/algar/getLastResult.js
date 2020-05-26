var getLastResult = function(arr, k) {
  var len = arr.length;
  //长度小于等于k,则直接返回arr
  if (len <= k) return arr;
  //通过快速排序，获得前k个
  var index,
    narr = getQuickIndex(arr, 0, len - 1);
  if (index >= k) return arr[(0, k)];
  var laseNum = k - index;
  while (laseNum > 0) {
    var index,
      newArr = getQuickIndex(narr[(index + 1, len)], 0);
  }
};

var getQuickIndex = function(arr, left, right) {
  while (left < right) {
    while (arr[right] >= base && left < right) right--;
    if (left < right) arr[left] = arr[right];
    while (arr[left] <= base && left < right) left++;
    if (left < right) arr[right] = arr[left];
  }
  arr[left] = base;
  return left, arr;
};
var quickSortNew = function(arr, left, right) {
  //终止条件
  if (left < right) {
    //通过基准值，分别获取左部分和右部分
    var i = left;
    var j = right;
    var base = arr[i];
    while (left < right) {
      while (arr[right] >= base && left < right) right--;
      if (left < right) arr[left] = arr[right];
      while (arr[left] <= base && left < right) left++;
      if (left < right) arr[right] = arr[left];
    }
    arr[left] = base;
    console.log(left, i, j);
    quickSortNew(arr, i, left - 1);
    quickSortNew(arr, left + 1, j);
    return arr;
  }
};

var quickSort = function(arr) {
  if (arr.length <= 1) {
    //如果数组长度小于等于1无需判断直接返回即可
    return arr;
  }
  // var pivotIndex = Math.floor(arr.length / 2); //取基准点
  // var pivot = arr.splice(pivotIndex, 1)[0]; //取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
  var pivot = arr.splice(0, 1)[0];
  var left = []; //存放比基准点小的数组
  var right = []; //存放比基准点大的数组
  for (var i = 0; i < arr.length; i++) {
    //遍历数组，进行判断分配
    if (arr[i] < pivot) {
      left.push(arr[i]); //比基准点小的放在左边数组
    } else {
      right.push(arr[i]); //比基准点大的放在右边数组
    }
  }
  //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
  return quickSort(left).concat([pivot], quickSort(right));
};

var arr = [8, 2, 4, 7, 1, 9, 5, 0];
console.log(quickSortNew(arr, 0, 7));
