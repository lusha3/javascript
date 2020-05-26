var maxSlidingWindow = function (nums, k) {
  if (k == 1) {
    return nums;
  }
  var result = [];
  var arr = [];
  for (var i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
    if (i >= k - 1) {
      result.push(Math.max(...arr));
      arr.shift();
    }
  }
  return result;
};

var nums = [1, 3, -3, -1, 5, 3, 6, 7];
console.log(maxSlidingWindow(nums, 3));
