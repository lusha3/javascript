//买卖股票的最佳时机
//这个是典型的动态规划的题目
//首先确定状态，有三种，买入，卖出，不做任何操作；但是这三种操作又不能直接反应到数据上，因为要
//确定数组含义，当前的最大值
//dp[i][0]表明第i天手里没有股票时的最大收益，dp[i][1]表明第1天手里有股票时的最大收益
//basecase:因为i是数组下标，因此i=0时，表明第1天数据，此时dp[0][0] = 0;dp[0][1]=-prices[0]
var maxProfit = function (prices) {
  var len = prices.length;
  var dp = new Array(len);

  dp[0] = new Array();
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  //今天手里有股票的原因是：昨天手里有，今天没有卖，昨天手里没有，今天买

  for (var i = 1; i < len; i++) {
    dp[i] = new Array();
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
  }

  return dp[len - 1][0];
};

var prices = [1, 4, 2, 5, 9];
console.log(maxProfit(prices));
