/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  if (target < 2) {
    //target<2时，无满足条件答案
    return [];
  }

  var num = [];
  var len = Math.ceil(target / 2);
  var total = 0;
  var arr = [];
  var i = 1;
  while (i < len) {
    for (var j = i; j <= len; j++) {
      console.log("total:", total);
      console.log("target:", target);
      console.log("i:", i);
      console.log("j:", j);
      console.log("-------------");
      if (total < target) {
        total = total + j;
        arr.push(j);
      } else if (total == target) {
        console.log("arr:", arr);
        num.push(arr);
        arr = [];
        total = 0;
        i++;
        break;
      } else {
        arr = [];
        total = 0;
        i++;
        break;
      }
    }
  }
  console.log(num);
  return num;
};

findContinuousSequence(8);
