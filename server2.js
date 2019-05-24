const fs = require("fs");
const http = require("http");

//前台进行数据传输的时候其实后台处理都一样
//对于后台来说都是进行的http数据请求

//对应请求方式的不同
//GET:  数据在url中进行传输
//POST: 数据不在url中


var server = http.createServer(function(request,response){
    //读取文件 假如读取的为：www.index.html;
    var file_name = "./www" + request.url;
    fs.readFile(file_name,function(err,data){
        if(err){
            response.write("404");
        }else{
            response.write(data);
        }
        response.end();//表示响应完成
    });
});



server.listen(8888);