/**
 * @param {number[]} height
 * @return {number}
 */
//穷举法，时间复杂度O(n2)
// var maxArea = function (height) {
//   var len = height.length,
//     max = 0;
//   for (var i = 0; i < len; i++) {
//     for (var j = len - 1; j > 0; j--) {
//       if (i < j) {
//         var area = Math.min(height[i], height[j]) * (j - i);
//         max = Math.max(max, area);
//         console.log(i, j, max);
//       }
//     }
//   }
//   return max;
// };
/**
 *
 * @param {} height
 * 双指针法，任意的板子在移动的过程中对容积的影响可以分三种情况，减少，变多，不变
 * 板子分两种，长版子和短板子
 * 长版子移动的过程中，变小
 * 短板子移动，不变或者会变多
 */
//双指针法
var maxArea = function (height) {
  var len = height.length,
    max = 0;
  var i = 0,
    j = len - 1;
  while (i <= j) {
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
