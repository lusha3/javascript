/**
 * sum(1,2,3,4).then(v=>console.log(v))
 */

function asyncAdd(num1, num2, callback) {
  callback(null, num1 + num2);
}

function wrapAdd(num1, num2) {
  return new Promise((resolve, reject) => {
    asyncAdd(num1, num2, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function sum(...args) {
  return args.reduce((prev, curr) => {
    return prev.then((res) => {
      return wrapAdd(res, curr);
    });
  }, Promise.resolve(0));
}

sum(1, 2, 3, 4).then((v) => console.log(v));

//nums1和nums2交集
var fn = function (nums1, nums2) {
  var n = [...new Set(nums1.filter((val) => nums2.includes(val)))];
  console.log(n);
};

fn([1, 2, 3, 2, 2], [2, 3, 4]);

//多个数组交集
var fmn = function (...numslist) {
  return numslist.reduce((pre, cur) => {
    return [...new Set(pre.filter((val) => cur.includes(val)))];
  });
};

console.log(fmn([1, 2, 3, 2, 2, 4], [2, 3, 4], [3, 4]));

//合并有序数组
var mergeFn = function (nums1, nums2, m, n) {
  for (var i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

//合并
var mergeFn2 = function (nums1, nums2, m, n) {
  //双指针法，对每个数字进行对比
  if (m == 0) {
    nums1 = nums2;
    return nums1;
  }
  if (n == 0) return nums1;
  var len1 = m;
  var len2 = n;
  var len = m + n - 1;
  while (len2 >= 0 && len1 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }

  return nums1;
};

console.log(mergeFn([1, 2, 2, 2, 3], [2, 3, 4], 5, 3));
console.log(mergeFn2([0, 0, 0], [2, 3, 4], 0, 3));
