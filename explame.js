const http = require("http");
const fs = require("fs");

//querystring专门用来解析get请求的数据部分，系统自带的部分
const querystring = require("querystring");
//url，node自带部分，专门用来处理url请求
//urllib.parse(request.url,true);
const urllib = require("url");

fs.readFile("aaa.txt",(err,data)=>{
    if(err){
        console.log("读取失败");
    }else{
        // console.log(data);
        // console.log(data.toString());
       fs.writeFile("bbb.txt",data,(err)=>{
            if(err){
                console.log("写入失败");
            }
        });
    }
});

var server = http.createServer((request,response)=>{
    console.log(request.url);
    response.write("hello");
    response.end();

    var obj = urllib.parse(request.url,true);
    var url = obj.pathname;
    const GET = obj.query;
    console.log(url,GET);

        var str = "";
        var i = 0;
        request.on("data", data =>{
            console.log(`this is ${i} times comming!`);
            str += data;
        });
        request.on("end",data =>{
            console.log(str);
        });
    // var arr = request.url.split("?");
    // const url =  arr[0];
    // const GET = querystring.parse(arr[1]);
    // console.log(GET);
});


server.listen(8080);