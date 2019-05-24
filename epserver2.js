const express = require("express");
// const expressStatic = require("express-static");//中间件读取文件

var server = express();

// server.use(expressStatic("./www"));
var users = {
    "John" : "12345",
    "Zhansan" : "4546748"
}

//接口Login?user=xxx&pass=xxx;
server.get("/login",function(request,response){
    // console.log(request.query);
    var user = request.query["user"];
    var pass = request.query["pass"];
    if(users[user] == null){
        response.send({ok:false ,msg : "此用户不存在"});
    }else{
        if(users[user] != pass){
            response.send({ok:false ,msg : "密码错误"});
        }else{
            response.send({ok:true ,msg : "成功登陆"});
        }
    }
});

server.listen(8080);