/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let arr = String.split(s, "");
  let len = arr.length;
  let dp = new Array(len, len);
  dp[0][0] = 0;
  dp[0][1];
};
