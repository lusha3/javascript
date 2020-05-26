/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length;
  if (len == 1) {
    return nums[0];
  }

  var dp = new Array(len + 1);
  var maxValue = nums[0];
  dp[0] = 0;
  for (var i = 1; i < len + 1; i++) {
    dp[i] = Math.max(nums[i - 1], dp[i - 1] + nums[i - 1]);
    maxValue = Math.max(dp[i], maxValue);
    console.log(maxValue, dp[i]);
  }

  return maxValue;
};

// var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var a = [-2, -1];
console.log(maxSubArray(a));
