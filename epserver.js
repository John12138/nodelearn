const express = require("express");

var server = express();
//var server = http.createserver(function(request,response){});

//use => 处理页面request
//三种接受request请求的方法
//.get("/",function(){});
//.post("/",function(){});
//.use("/",function(){});

server.use("/a.html",function(request,response){
    //resquest,response 非侵入式
    //原来的功能都有保留express保留了原生的功能，添加了一些方法增强了原来的方法

    response.send("bac");
    response.end();
});

server.get("/",function(){
    console.log("有get");
});

server.post("/",function(){
    console.log("有get");
});

server.use("/b.html",function(request,response){
    response.send("123");
    response.end();
});


server.listen(8080);