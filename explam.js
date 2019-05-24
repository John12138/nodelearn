const http = require("http");
const fs = require("fs");
const express = require("express");

var server  = express();
server.listen(8080);

server.use("/index.html",function(request,response){
    response.send({a:"John"});
    console.log(request.query);//将GET请求传来的数据转换为json格式数据
    //eg. /index.html?user=a&pass=15644  ==> request.query = { user: 'a', pass: '15644' };
});
