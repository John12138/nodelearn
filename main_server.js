//汇总当前的学习知识
const http = require("http");
const urllib = require("url");
const fs = require("fs");
const querystring = require("querystring");

var server = http.createServer(function(request,response){
    //POST数据
    var str = '';
    request.on("data",function(data){
        str += data;
    });
    request.on("end",function(){
        const POST = querystring.parse(str);
    });

    //GET数据
    var obj = urllib.parse(request.url,true);
    var url = obj.pathname;//地址
    const GET = obj.query;//内容

    //文件请求
    var file_name = "./www" + url;
    fs.readFile(file_name,function(err,data){
        if(err){
            response.write("404");
        }else{
            response.write(data);
        }
        response.end();
    });
});

server.listen(8080);