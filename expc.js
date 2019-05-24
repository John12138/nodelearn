const express = require("express");
const body_parse = require("body-parser");
var server = express();
//http.createServer((request,response)=>{});
server.listen(8080);

// server.use("/index.html",(request,response)=>{//可以处理post和get请求
//     console.log("use");
//     response.send({hello:"use"}).end();
// });

// server.post("/",(request,response)=>{
//     console.log("post");
//     response.send({hello:"POST"}).end();
// });

// server.get("/",(request,response)=>{
//     console.log("get");
//     response.send({hello:"GET"}).end();
// });

var users = {
    "John" : "123456",
    "Tom" : "123"
}

server.get("/login",(request,response)=>{
    // console.log(request.query);//express封装的方法
    //request.query <==> obj.query
    //{var obj = urllib.parse(request.url,true);
    // const url = obj.pathname;
    // const GET = obj.query; }

    //登录步骤1.验证用户名/ID是否存在
    //步骤2. 验证用户名密码是否匹配
    var username = request.query["user"];
    var password = request.query["password"];
    if(users[username]){
        if(users[username] == password){
            response.send(`Welcome ${username}`).end();
        }else{
            response.send("error password").end();
        }
    }else{
        response.send("no exit this ID please goto zhuci").end();
    }
});

server.use(body_parse.urlencoded({
    extended : true,
    limit :   2*1024*1024 
}));

server.use("/",(request,response)=>{
    console.log(request.body);//用来处理post请求
    
});