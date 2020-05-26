/**
 *
 * 动态规划：找状态 ，做选择
 */

/**
 * 高空扔鸡蛋
 * @param {int} K 鸡蛋个数
 * @param {int} N 楼层高度
 */

var superEggDrop = function (K, N) {
  console.log(`K:${K},N:${N}`);
  var dp = new Array(K);
  if (K == 1) {
    return N;
  }
  if (N == 0) {
    return 0;
  }
  for (var i = 1; i <= K; i++) {
    dp[i] = new Array(N);
    for (var j = 1; j < N; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][N - j] + 1);
    }
  }
  return dp[K - 1][N - 1];
};

console.log(superEggDrop(1, 10));
console.log(superEggDrop(2, 10));
