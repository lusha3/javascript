/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   //   console.log("currentArr:" + strs);
//   if (strs.length == 0) return "";
//   if (strs.length == 1) return strs[0];
//   var len = strs.length;
//   var maxStr = longestCommonPrefix(strs.slice(1, len));
//   //   console.log("maxStr:" + maxStr);
//   var commonStr = "";
//   for (var i = 0; i < Math.min(maxStr.length, strs[0].length); i++) {
//     // console.log("maxStr:" + maxStr + " strs[0]:" + strs[0]);
//     if (maxStr[i] != strs[0][i]) {
//       break;
//     }
//     commonStr = commonStr + maxStr[i];

//     // console.log("i:" + i + " commonStr:" + commonStr);
//   }

//   return commonStr;
// };

var longestCommonPrefix = function (strs) {
  //   console.log("currentArr:" + strs);
  if (strs.length == 0) return "";
  if (strs.length == 1) return strs[0];
  var len = strs.length;
  var commonStr = "";
  loop1: for (var i = 0; i < strs[0].length; i++) {
    for (var j = 0; j < len; j++) {
      if (strs[0][i] !== strs[j][i]) {
        break loop1;
      }
    }
    commonStr = commonStr + strs[0][i];
  }

  return commonStr;
};

// var longestCommonPrefix = function(strs) {
//   if (strs.length == 0) return "";
//   let first = strs[0];
//   for (let i = 0; i < strs.length; i++) {
//     let j = 0;
//     for (; j < first.length && j < strs[i].length; j++) {
//       if (first[j] != strs[i][j]) break;
//     }
//     first = first.substring(0, j);
//     if (first === "") return first;
//   }
//   return first;
// };

var s = longestCommonPrefix(["flower", "flow", "flight"]);
console.log("s:" + s);
