var climbStairs = function (n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  var dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (var i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(climbStairs(7));
