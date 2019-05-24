//POST学习
//POST请求方式的数据要不GET的大得多
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");



var server = http.createServer(function(request,response){

    var str = "";
    var i = 0;
    request.on("data",function(data){
        console.log(`第${i++}次收到数据`);//ES6写法
        str += data;
    });//类似与事件//有一段数据到达的时候就会发生一次（总共会发生多次）
    request.on("end", function(){
        console.log(str);
    });//end-数据全部到达后发生一次
});

server.listen(8200);