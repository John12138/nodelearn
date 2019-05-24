//GET学习
const fs = require("fs");
const http = require("http");
const querystring = require("querystring");//用来解析地址
const urllib = require("url");             //专门解析整个url部分的东西

var server =  http.createServer(function(request,response){
    //request通过请求端获取数据前台数据
    console.log(request.url);///aaa?user=123&pass=456地址加数据

    //最终的最简单的处理情况
    // var obj = urllib.parse(request.url,true);//true参数使用之后会自动将对象中的query解析成json格式的数据
    // var url = obj.pathname;//地址
    // var GET = obj.query;

    var GET = {};
    if(request.url.indexOf("?") != -1){//如果请求的数据中有？则进行以下处理得到前台传入的值
         //强处理
        var arr = request.url.split("?");
        var url = arr[0];//arr[0] => "/aaa"; arr[1] =>"user=123&pass=456"
        GET=querystring.parse(arr[1]);//querystring.parse()返回一个json对象
        console.log(GET);
        //low处理
        // var arr2 = arr[1].split("&");//arr2 =>["user=123","pass=456"];
        // for(var i = 0;i < arr2.length;i++){
        //     var arr3 = arr2[i].split("=");//arr3 =>["user","123"];
        //     // GET[arr3[0]] =arr3[1];
        //     GET[arr3[0]] = arr3[1];
        // }

    }else{
        var url = request.url;
    }

    console.log(url,GET);
    response.write("Yes you are a pig");
    response.end();
});

server.listen(8080);