/**
 * throttle:节流，是指事件在指定的事件内肯定会执行一次，
 * 首先需要触发事件，该绑定事件才会发生
 * 实用场景是什么呢？
 * 实现过程：
 * 1，通过时间差来处理，可以保证每次触发都会在规定的时间内立即执行，停止触发后，不会再执行文件
 */

var throttle = function (func, wait) {
  var startTime = time.now();
  var self, args;

  return function () {
    self = this;
    args = arguments;
    var currentTime = +time.Date();
    if (currentTime - startTime > wait) {
      func.apply(self, args);
      startTime = currentTime;
    }
  };
};

//通过settimeout来绑定，每次触发都是要在触发后wait时间后才会触发，停止触发后，还会再执行文件
var throttle2 = function (func, wait) {
  var self, args;
  return function () {
    self = this;
    args = arguments;
    if (!thtimeout) {
      var thtimeout = setTimeout(function () {
        clearTimeout(thtimeout);

        func.apply(self, args);
      }, wait);
    }
  };
};

var throttle3 = function (func, wait) {
  var self, args;
  var startTime = time.Date();
  var timeout;

  return function () {
    self = this;
    args = arguments;
    remaining = time.Date() - startTime - wait;
    if (remaining < 0 || remaining > wait) {
      //采用时间戳
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = +new Date();
      func.apply(self, args);
    } else {
      timeout = setTimeout(function () {
        previous = +new Date();
        timeout = null;
        func.apply(self, args);
      }, wait);
    }
  };
};
