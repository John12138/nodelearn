//session:基于cookie实现的
//*cookie中有一个专门的session的ID，服务器利用session找到session文件完成读取、写入
//隐患：session劫持

//主要是cookie的读取与发送
//读取：cookie-parser
//发送:


 const express = require("express");
 const cookieParser = require("cookie-parser");
 const cookieSession = require("cookie-session");
 
 var server = express();

//  server.keys = [];

 server.use(cookieParser("wdasdadfas"));
 
 server.use(cookieSession({
     name : "sess",
     keys : ["aaa","bbb","ccc"],
     maxAge : 24*3600*1000
 }));
 //cookie
 server.use("/",function(request,response){
    //  response.cookie("user","John",{path:"./aaa",maxAge:30*24*3600*1000});
    //request.secret = "wdasdadfas";  //个人签名
    //response.cookie("user","John",{signed:true});//发送cookie
    //request.clearCookie("user");
    //console.log("无签名的cookies",request.cookies); 
    //console.log("签名的cookies",request.signedCookies);
    
    //console.log(request.session);
    //delete session
    if(request.session["count"] == null){
        request.session["count"]=1;
    }else{
        request.session["count"]++;
    }
    console.log(request.session["count"]);
    response.send("OK");
 });

 server.listen(8080);
//session