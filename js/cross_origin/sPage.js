postMessage("hello");

//实现之前的一个实例，看是否阻塞
setTimeout(function() {
  console.log("end 2");
}, 2000);
setTimeout(function() {
  console.log("end 1");
}, 100);
// worker.onmessage = function(event) {
//   console.log(event.data);
// };
this.addEventListener("message", function(event) {
  let data = event.data;
  console.log(data);
});
console.log("end");
