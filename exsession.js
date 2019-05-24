const express = require("express");
const cookieSession = require("cookie-session");
//服务器端用来读取cookie的中间件
const cookieParser = require("cookie-parser");

var server = express();
server.listen(8080);

//cookie的读取使用中间件，先告知其‘签名’"密钥";
server.use(cookieParser('sddadasdafasda'));
server.use("/",(request,response)=>{
    //向浏览器发送一个cookie,名称，值，path访问路径,maxAge过期时间 
    // response.cookie("user","John",{path : "/aaa",maxAge : 24 *3600 * 1000});
   
    //添加cookie
    //对cookie进行签名
    request.secret = "sddadasdafasda";//?
    response.cookie("user","John",{signed : true}); 

    //读取cookie

    //这里保存的才是签名之后的cookie
    console.log("有签名的cookie",request.signedCookies);
    //保存的是没有签名的cookie
    console.log("无签名的cookie",request.cookies);
    response.send("hello").end();

    //删除cookie
    response.clearCookie("name");
});
//s%3AJohn.zsocWheDleNrjLAN%2FiTH4j8YyaaE%2BPsInUXyBfQGXs4