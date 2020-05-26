var html = `<html><p>你好呀，嗯嗯<p>你好呢</p></p></html>`;

var dom = document.createElement("div");
dom.innerHTML = html;

console.log(dom.text());
