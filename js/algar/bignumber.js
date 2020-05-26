/**
 * 大数相加，因为是大数，所以不能使用number类型来存储，需要使用string
 * @param {string} a
 * @param {string} b
 */

var bignumber = function (a, b) {
  var aArr = a.split(""),
    bArr = b.split(""),
    aLen = aArr.length,
    bLen = bArr.length;
  var arr = aLen > bLen ? aArr : bArr;
  var minArr = aLen > bLen ? bArr : aArr;
  var pid = 0;
  for (
    var i = arr.length - 1, j = minArr.length - 1;
    i >= 0 && j >= 0;
    i--, j--
  ) {
    if (parseInt(arr[i]) + parseInt(minArr[j] + pid) >= 10) {
      arr[i] = (parseInt(arr[i]) + parseInt(minArr[j]) + pid) % 10;
      pid = 1;
    } else {
      arr[i] = parseInt(arr[i]) + parseInt(minArr[j] + pid);
      pid = 0;
    }
  }
  return arr.join("");
};

var a1 = "3456789",
  b1 = "12345";
console.log(bignumber(a1, b1));

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 
 * -100.0 < x < 100.0
n 是 32 位有符号整数， 当n为2的32次方时，
如果简单的使用循环或者很容易出现栈溢出的情况，
这道题有个很巧妙的位运算的方法，将n先转为2进制数，然后再拆分，
 */
var myPow = function (x, n) {
  if (x == 0) {
    return 0;
  }
  if (n == 0) {
    return 1;
  }
  var isNegative = n > 0;
  var result = 1;
  var abn = Math.abs(n);
  while (abn > 0) {
    console.log(abn);
    if (abn & 1) {
      result = result * x;
    }
    x = x * x;
    abn = Math.floor(abn / 2);
  }
  return isNegative ? result : 1 / result;
};

console.log(myPow(1.00001, 3));
