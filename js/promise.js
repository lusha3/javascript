/**
 * Promise
 * js中的异步解决方案，主要解决回调地狱问题，可以将依赖回调相互解耦
 * promise有三种状态：state pending,fulfilled,rejected
 * new Promise(exector(resolve,reject))是立即执行函数
 * Promise支持链式调用，返回值是个新个promise对象，每个promise的状态确定后就不会改变
 */

function PromiseN(exector) {
  //初始状态
  this.state = "pending";
  //resolve值
  this.value = "";
  //reject值
  this.reason = "";
  //用来存储未执行的回调方法
  this.f1callback = [];
  this.f2callback = [];

  //resolve的功能
  //修改this.value的值
  var resolve = function (value) {
    if (this.state == "fulfilled") {
      this.value = value;
      
    }
  };

  var reject = function (reason) {
    if (this.state == "rejected") {
      this.reason = reason;
    }
  };

  try {
    exector(resolve, reject);
  } catch (e) {
    return e;
  }
}

PromiseN.prototype.then = function (f1, f2) {
  var self = this;
  var promise2;

  f1 = typeof f1 === "function" ? f1 : function (v) {};
  f2 = typeof f2 === "function" ? f2 : function (r) {};

  if (self.state == "fulfilled") {
    return new PromiseN(function (resolve, reject) {
      try {
        var v = f1(self.value);
        resolve(v);
      } catch (e) {
        reject(e);
      }
    });
  } else if (this.state == "rejected") {
    return new PromiseN(function (resolve, reject) {
      try {
        var v = f2(self.reason);
        reject(v);
      } catch (e) {
        reject(e);
      }
    });
  } else if (self.state == "pending") {
    return new PromiseN(function (resolve, reject) {
      self.f1callback.push(function (value) {
        try {
          var v = f1(value);
          resolve(v);
        } catch (e) {
          reject(e);
        }
      });
      self.f2callback.push(function (reason) {
        try {
          var v = f2(reason);
          reject(v);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  return new PromiseN();
};



var p1 = new PromiseN((resolve, reject) => {});
//then的特点
//1，接收两个参数，分别处理resolve和reject的结果，并将结果返回
//2，then接收到参数后返回的是新的promise
p1.then(
  function (value) {},
  function (value) {}
).then(
  function () {},
  function () {}
);
