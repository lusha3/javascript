/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  var len = intervals.length;
  if (len == 0 || len == 1) {
    return intervals;
  }
    
    var dp = new Array(len + 1)
    dp[0] = [0,0]
    dp[1] = intervals[]

    for (var i = 0; i < len + 1; i++){
        var l = dp[i - 1].length
        var d = dp[i-1]
        if (intervals[i][0] < d[l - 1][0]) {
            
        }
    }
};
