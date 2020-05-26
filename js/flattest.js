//处理数组flat的步骤，1-遍历数组 2-判断是否数组 3-结果拼接
//其中有个方法，toString()+split() 这种方法对数字有效，对其他的没有效果
var nflat = function (arr) {
  if (arr.length === 0) return arr;

  return arr.reduce((acculate, curr) => {
    if (Array.isArray(curr)) {
      return [...acculate, ...nflat(curr)];
    } else {
      return [...acculate, curr];
    }
    //   return acculate.concat(Array.isArray(curr) ? nflat(curr) : curr);
  }, []);
};

//采用栈的思想
//将所有数组都展开一层放入栈中
var sflat = function (arr) {
  var newArr = new Array();
  //将所有数据都存入栈中
  var stack = [].concat(arr);
  while (stack.length != 0) {
    var value = stack.pop();
    if (Array.isArray(value)) {
      //如果是数组，展开一层，进栈
      stack = stack.concat(...value);
    } else {
      //如果不是数组,则将结果写入新的数组的开头
      newArr.unshift(value);
    }
  }
  return newArr;
};

const arr = [
  1,
  2,
  3,
  4,
  [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
  5,
  "string",
  { name: "弹铁蛋同学" },
];
console.log(sflat(arr));

//采用栈的思想
//将所有数组都展开一层放入栈中
var flat = function (arr, num = 1) {
  return num > 0
    ? arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flat(curr, num - 1) : curr);
      }, [])
    : arr;
};


//