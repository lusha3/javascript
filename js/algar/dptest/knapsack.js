/**
 * 0/1背包问题
 * 1,确定状态和选择
 * 状态：背包的容量，可选择的物品
 * 选择：装与不装
 * dp[i][j]表示装j重量，
 * 
 * 常用套路
 * for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 择优(选择1，选择2...)
 */

/**
 * 获取背包能装的最大价值
 * @param {int} w 装入重量
 * @param {int} n 物品种类
 * @param {Array} listw 物品的重量
 * @param {Array} listv 每件物品价值
 */

var knapsack = function (w, n, wt, val) {
  var dp = new Array();
  for (var i = 0; i <= n; i++) {
    dp[i] = new Array();
    for (var j = 0; j <= w; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      } else if (j - wt[i - 1] < 0) {
        //表示不能装入
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - wt[i - 1]] + val[i - 1]
        );
      }
    }
  }
  console.log(dp);
  return dp[n][w];
};
var result = knapsack(4, 3, [2, 1, 3], [4, 2, 3]);

console.log(result);
