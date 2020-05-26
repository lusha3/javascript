//curry 函数curry化是指将多个参数的方法转化成可以调用单一参数的方法

// var fn = curry(fn);
var subCurry = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
};

//1.通过curry之后返回的还是个函数
//2，如果参数有返回值，则要return fn.call()
//3，将参数转化给
var curryN = function (fn, length) {
  //获取参数
  var self = this;
  return function () {
    var flen = length || fn.length;
    console.log(flen);
    var argsN = [].concat(Array.prototype.slice.call(arguments));
    console.log(argsN);
    //如果需要有返回值，则需要通过return返回
    if (argsN.length < flen) {
      var combins = [fn].concat(argsN);
      console.log(combins);
      return curryN(subCurry.apply(self, combins), flen - argsN.length);
    } else {
      return fn.call(self, ...argsN);
    }
  };
};

var add = function (a, b, c, d) {
  console.log("add:");
  console.log(a, b);
  return a + b + c + d;
};

var addFn = curryN(add);
console.log(addFn);
console.log(addFn(1, 2)(3)(4));
