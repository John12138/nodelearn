const express = require("express");
const multer = require("multer");
const fs = require("fs");
const pathLib = require("path");

var server = express();

//保存上传文件的路径
var objMulter = multer({dest : "./www/upload/"});

server.use(objMulter.any());

server.post("/",function(request,response){
    //console.log(request.files[0].originalname);//解析上传上来的文件
    //期望给上传上来的文件改一个名字
    //1.第一步获取原始文件的扩展名
    //2.重命名文件
    var newname = request.files[0].path + pathLib.extname(request.files[0].originalname);
    //request.files[0].path原文件名
    fs.rename(request.files[0].path,newname,function(err){
        if(err){
           response.send("上传失败");
        }else{
            response.send("上传成功");
        }
    });
});
server.listen(8080);

//path解析文件路径
    // var str = "c:\\wamp\\www\\a.html";
    // var obj = path.parse(str);
    // console.log(obj);
    //base : 文件
    //ext : 扩展名
    //name 文件名部分

//body-parser  解析POST数据 当form为application/x-www-form-urlencoded
//使用:server.use(bodyPaser.urlencode("sdsda"));

//multer      解析POST文件 multipart/form-data
//var obj = multer({dest:"upload/"});
//server(obj.any());//接收所有文件
//request.files[0]
//server.use(function(request,response){
//       request.files[0].originalname;//表示文件的原始文件名
//       request.files[0].path;//临时的文件路径
//      var newname = file.path +  pathLib.extname(request.files[0].originalname);
//})
// fs.rename("",newname,function(err){});