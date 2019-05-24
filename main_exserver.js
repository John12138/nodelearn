const express = require("express");     
// const static = require("express-static");  
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
//适配模板引擎的工具
const consolidate  = require("consolidate");
const multer = require("multer");
const mysql = require("mysql");
//bodyparser只能解析POST的数据不能解析文件

const ejs = require("ejs");
const jade = require("jade");

var server = express();
server.listen(8080);

//1.解析cookie
server.use(cookieParser("dsadasdsadfasffas"));//解析，密钥

//2.使用session
var arr=[];
for(var i = 0; i < 1000;i++){
    arr.push("keys_"+Math.random());
}
server.use(cookieSession({name : "zns_sess_id",keys : arr,maxAge:20*3600*1000}));

//3.post数据
server.use(bodyParser.urlencoded({extended : false}));

//用户请求
// server.use("/",function(request,response,next){
//     // console.log(request.query,request.body,request.cookies,request.session);
// })

//4.配置模板引擎
    //1.那种模板引擎
    server.set("view engine","html");//以html格式输出
    //2.模板引擎在哪
    server.set("views","./views");
    //3.输出什么东西
    server.engine("html",consolidate.ejs);



    server.get("/",(request,response)=>{
        response.render("index.ejs");//渲染出来
    });
    
//接收用户请求
// server.get("/index",function(request,response){
//     if(request.session.userid){//登陆过
//         response.render("1.ejs",{name:"John"});
//     }else{
//         // response.render("Login.ejs",{});
//     }
// });
//4.static数据
// server.use(static("./www"));

//const multer  = require("multer");
//var objMulter = multer();
//server.use(objMulter.any());
//console.log(request.files)//解析上传上来的文件

//route路由用不同的模块来对应不同的目录
//根据目录的不同来自动调用不同的模块