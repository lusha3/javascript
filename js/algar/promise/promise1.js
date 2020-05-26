var Promise1 = function (callback) {
  //state共有三种状态
  this.state = "pending";
  this.value = undefined;
  this.reason = undefined;

  this.onFulFilledFunc = [];
  this.onResolvedFunc = [];

  var self = this;
  var resolve = function (value) {
    //pending状态时才能够修改，保证状态修改完之后就不可再修改了
    if (self.state == "pending") {
      self.value = value;
      self.onFulFilledFunc.forEach((f) => f(value));
      self.state = "fulfilled";
    }
  };
  var reject = function (reason) {
    if (self.state == "pending") {
      self.reason = reason;
      self.onResolvedFunc.forEach((f) => f(reason));
      self.state = "rejected";
    }
  };

  callback(resolve, reject);

  return this;
};

Promise1.prototype.then = function (f1, f2) {
    var self = this;
    var promise2
  if (this.state == "resolved") {
    if (typeof f1 === "function") {
        promise2 = resolvePromise(promise2,x,f1,f2)
      return promise2
    }
  } else if (this.state == "rejected") {
    if (typeof f2 === "function") {
      var r = f2(this.value);
      return Promise1.reject(r);
    }
  } else {
    typeof f1 === "function" && self.onFulFilledFunc.append(f1);
    typeof f2 === "function" && self.onResolvedFunc.append(f2);
    return new Promise1();
  }
};

var resolvePromise = function (promise2, x, resolve, reject) {
    if (promise2 === x) {
        reject(new TypeError("promise2 与x是同一个promise对象"))
    }
    if (x != nill && (typeof x === "object" || typeof x === "function"){
        //x是函数或者对象
        try {
            var then = x.then
            if (typeof then === "function") {
                let y =then.call(x, (y) => {
                    //递归调用，传入y若是Promise对象，继续循环
                    resolvePromise(promise2, y, resolve, reject);
                }, (r) => {
                        reject(r)
                })
            }
        } catch(e){
            reject(e)
        }
    } else {
        resolve(x)
    }
}

var aj = new Promise1((resolve, reject) => {
  var a = new Ajax();
  return a;
});
