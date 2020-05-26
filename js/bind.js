import { unstable_batchedUpdates } from "react-dom";

/**
 * Created by lusha on 2018/7/25.
 */

Function.prototype.bind =
  Function.prototype.bind ||
  function(context) {
    var aArgs = Array.prototype.slice.call(arguments, 1), //获取绑定方法时传入的参数
      fun = this;

    var ToBound = function() {
      //被绑定后的方法也可能会传入参数
      //因此aArgs与ToBound中传入的参数进行合并
      fun.apply(
        context,
        aArgs.concat(Array.prototype.slice.call(arguments, 0))
      );
    };
    //考虑到原型
    // 通过new一个新function的方法来避免直接赋值后（ToBound.prototype=fun.prototype），修改ToBound的原型会影响原方法原型
    var F = function() {};
    F.prototype = fun.prototype;
    ToBound.prototype = new F();

    return ToBound;
  };

/*
 * 数组的map方法，主要是对数据中存在的元素分别进行操作，然后返回一个新数组
 * map方法接受两个参数，一个对元素进行操作的callback fn ;另外一个可传可不传的上下文信息
 * */

Array.prototype.nmap = function(fn, context) {
  //获取arr
  var arr = Array.prototype.slice.call(this);
  var newArr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (!arr.hasOwnProperty(i)) {
      newArr.length++;
    } else {
      //这里最后一个参数为什么是 this?还是有点疑惑
      newArr.push(fn.call(context, arr[i], i, arr));
    }
  }

  return newArr;
};

[1, 2, 3, 4].nmap(function(item) {
  return 2 * item;
});

/*
 * call方法是修改方法作用域的方法，
 * 与apply方法的区别是：
 * call参数中是参数列表
 * apply参数是哥参数数组
 *
 * 这个方法还是有点难*/

Function.prototype.call = function(context = window, ...args) {
  let func = this;
  let fn = Symbol("fn");
  context[fn] = func;

  let res = context[fn](...args); //重点代码，利用this指向，相当于context.caller(...args)

  delete context[fn];
  return res;
};

/*
 * bind方法主要是修改作用域指向*/
Function.prototype.bind = function(obj, ...args) {
  var func = this; //this指向调用的方法
  var fn = function() {
    func.call(obj, ...args);
  };

  var fnew = function() {};

  //新的方法要继承原方法的方法和属性
  //如果直接将原方法的prototype赋值给新的方法，则会造成对新prootype的修改引起原数据的修改
  fnew.prototype = func.prototype;
  fn.prototype = new fnew();
  return fn;
};

/*reduce方法对数组中的各个值进行累加，并返回一个值*/
Array.prototype.reduce = function(fn, initialVal) {
  var arr = this;
  var startIndex = initialVal ? 0 : 1;
  var val = initialVal ? initialVal : arr[0];
  for (var i = 0; i < arr.length; i++) {
    val = val + fn.call(null, arr[i], i, arr);
  }

  return val;
};

function create(obj) {
  var func = function() {};
  func.prototype = obj;
  func.prototype.constructor = func;

  return new func();
}

/*
 * instanceof 用于检测构造函数的prototype是否出现在某个实例对象的原型链中
 * left: 某实例对象
 * right: 某构造函数*/

function newInstancdOf(left, right) {
  var proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto == null) return false;
    if (proto == right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

function throttle(fn, time = 300) {
  let canRun = true;

  return function() {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, time);
  };
}

function debounce(fn, time = 300) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

function bindEs5(context) {
  //bind function
  let func = this;
  //
  let args = Array.prototype.slice.call(arguments, 1);
  let newFunc = function() {
    let newArgs = Array.prototype.slice.call(arguments, 0);
    func.apply(context, newArgs.concat(args));
  };
  //jicheng
  let bound = function() {};
  bound.prototype = func.prototype;
  newFunc.prototype = new bound();

  return newFunc;
}
let bindEs6 = function(context, ...formArgs) {
  let _this = this;

  return function(...lateArgs) {
    _this.apply(context, formArgs.concat(lateArgs));
  };
};

(function bindPolyfill() {
  if (Function.prototype.bind) {
    return;
  }
  Function.prototype.bind = function() {
    var self = this,
      selfArg = arguments[0];

    if (typeof self !== "function") {
      throw new TypeError("Function.prototype.bind is not valid");
    }

    var args = Array.prototype.slice.call(arguments, 1);

    let newFunc = function() {
      var funcArgs = args.concat(Array.prototype.slice.call(arguments));
      return self.apply(selfArg, funcArgs);
    };

    let bound = function() {};
    bound.prototype = func.prototype;
    newFunc.prototype = new bound();

    return newFunc;
  };
})();

{
  /**
   * @param {number[]} A
   * @param {number[]} B
   * @param {number[]} C
   * @param {number[]} D
   * @return {number}
   */
  var fourSumCount = function(A, B, C, D) {
    let len = A.length;
    let count = 0;
    let abMap = new Map();
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len; j++) {
        if (abMap.has(A[i] + B[j])) {
          let co = abMap.get(A[i] + B[j]) + 1;
          abMap.set(A[i] + B[j], co);
        } else {
          abMap.set(A[i] + B[j], 1);
        }
      }
    }

    let cdMap = new Map();
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len; j++) {
        if (cdMap.has(C[i] + D[j])) {
          let co = cdMap.get(C[i] + D[j]) + 1;
          cdMap.set(C[i] + D[j], co);
        } else {
          cdMap.set(C[i] + D[j], 1);
        }
      }
    }

    for (let key in abMap.keys()) {
      for (let cdkey in cdMap.keys()) {
        if (key + cdkey == 0) {
          count = abMap.get(key) + cdMap.get(cdkey);
        }
      }
    }
    return count;
  };
}

{
  var o = new Object();
  var key = "1";
  o[key] = 1;
  console.log(o[key]);
}

{
  var fourSumCount = function(A, B, C, D) {
    let len = A.length;
    let count = 0;
    let abMap = new Object();
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len; j++) {
        let key = A[i] + B[j];
        if (key in abMap) {
          abMap[key] += 1;
        } else {
          abMap[key] = 1;
        }
      }
    }
    console.log(abMap);

    let cdMap = new Object();
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len; j++) {
        let key = C[i] + D[j];

        if (key in cdMap) {
          cdMap[key] += 1;
        } else {
          cdMap[key] = 1;
        }
      }
    }

    for (let key in Object.keys(abMap)) {
      for (let cdkey in Object.keys(cdMap)) {
        console.log("parseInt before:" + key + "parseInt end:" + parseInt(key));
        console.log(
          "parseInt before:" + cdkey + "parseInt end:" + parseInt(cdkey)
        );
        if (parseInt(key) + parseInt(cdkey) == 0) {
          count = abMap[key] + cdMap[cdkey];
        }
      }
    }
    return count;
  };
  fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]);
}
