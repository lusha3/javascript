//最长递增子序列
//采用动态规划的方式
//动态规划基本步骤
/**
 *
 * @param {array} list []
 *
 * 1,确定数组
 * 2，确定数组含义
 * 3，确定初始值
 *
 *
 * 1，数组，此处采用dp[i]表示以nums[i]结尾的最大子序列
 * 2,确定关系
 */
var longestIncreasSubSeq = function (nums) {
  var len = nums.length;
  var dp = new Array(len);
  if (len == 0) {
    return 0;
  }
  if (len == 1) {
    return 1;
  }
  dp[0] = 1;
  for (var i = 1; i < len; i++) {
    dp[i] = 0;
    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      } else {
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }
  }

  for (var i = Math.ceil((len - 1) / 2); i >= 0; i--) {
    heapify(dp, i, len);
  }

  return dp[0];
};

//堆化
var heapify = function (list, i, length) {
  while (true) {
    // console.log(i);
    var current = i;
    if (list[i] < list[2 * i + 1] && 2 * i + 1 <= length) current = 2 * i + 1;
    if (list[current] < list[2 * i + 2] && 2 * i + 2 <= length)
      current = 2 * i + 2;
    if (current == i) {
      break;
    }
    list = newSwap(list, i, current);
    i = current;
  }

  return list;
};

var newSwap = function (list, i, j) {
  var temp = list[i];
  list[i] = list[j];
  list[j] = temp;
  // console.log("new:" + list);
  return list;
};

var nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasSubSeq(nums));
