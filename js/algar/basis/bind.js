//手动实现一个bind
var bind = function (context, ...args) {
  //调用方法
  let fn = this;
  let newFun = function () {
    return fn.call(context, ...args);
  };
  var f2 = function () {};
  f2.prototype = fn.prototype;
  newFun.prototype = new f2();

  return newFun;
};

var data = {
  a: 10,
  b: 20,
};

// function add(o) {}

// add.prototype.getA = function (o) {
//   return a;
// };
// var n = add.bind();

// console.log(n(data));
// console.log(n);

//手动实现call,apply
//fn.call(context,args)
//fn.apply(context, [args])
//call和apply的主要区别是接收的参数不同，apply接收一个参数数组，call方法接收一个参数list
Function.prototype.ncall = function (context, ...args) {
  //获取当前调用方法
  var fn = this;
  var fname = Symbol("fn");
  context["fname"] = fn;
  console.log(args);
  // fn(args)
  var fnStr = `context["fname"](${args.join(",")})`;
  eval(fnStr);
};

Function.prototype.napply = function (context, args) {
  //获取当前调用方法
  var fn = this;
  var fname = Symbol("fn");
  context["fname"] = fn;
  console.log(args);

  var fnStr = `context["fname"](${args.join(",")})`;
  eval(fnStr);
};
var a = 10,
  b = 20;
var f = function (a, b) {
  console.log(`window fn, a:${this.a}, b:${this.b}`);
  console.log(`args fn, a:${a}, b:${b}`);
};

var o = {
  a: 111,
  b: 222,
};
f.ncall(o, 1, 2);

var oo = {
  a: 333,
  b: 444,
};

f.napply(oo, [3, 4]);

//不使用call和apply实现bind
Function.prototype.nbind = function (context, ...args) {
  var fn = this;
  var newFun = function () {
    return fn.ncall(context, ...args);
  };
  var f2 = function () {};
  f2.prototype = fn.prototype;
  newFun.prototype = new f2();
  return newFun;
};
//通过bind获取的nf方法,是一个this对象指向oo对象的方法
var nf = f.bind(oo);
nf(5, 6);
