console.log("fpage start");

//这里创建一个webworker就是开一个新的线程
var worker = new Worker("./sPage.js"); //创建子线程
//这里接收新的线程传来的data
worker.onmessage = function(event) {
  console.log(event.data);
};
//这个将会触发向子进程的请求
worker.postMessage("begin");
setTimeout(function() {
  console.log("fpage end");
}, 10);
