const url = require("url");

require("http")
  .createServer((req, res) => {
    const data = {
      x: 10
    };

    // res.writeHead(200, {
    //   "Access-Control-Allow-Origin": "http://127.0.0.1:8080"
    // });
    res.writeHead(301, { Location: "http://itbilu.com/" });
    res.end("这就是你要的数据啦");
  })
  .listen(3000, "127.0.0.1");

console.log("启动了cors server服务，监听127.0.0.1:3000");
