var http = require('http');
var url = require('url');
//这里可以用express，起多个 比如 8888/a, 8888/b

http.createServer(function(request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // CORS *，cookie
    response.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true' });
    // 解析 url 参数
    var params = url.parse(request.url, true).query;
    // 发送响应数据 "Hello World" 
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');