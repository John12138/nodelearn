const http = require("http");
const fs = require("fs");

fs.readFile("aaa.txt",function(err,data){
    //参数1错误，参数2文件的数据（2进制数据）
    if(err){
        console.log("读取失败");
    }else{
        //console.log(data);//直接显示的是2进制数据
        console.log(data.toString());//显示文件的本身
    }
});

fs.writeFile("bbb.txt","value",function(err){
    console.log(err);
});

var server = http.createServer(function(resquest,response){
    //request   请求  输入-请求的信息
    //response  响应  输出-输出的东西

    switch(resquest.url){
        case "/1.html":
         response.write("11111");
         break;
        case "/2.html":
         response.write("22222");
         break;
        default:
         response.write('404');
         break;
    }
    console.log(resquest.url);//从浏览器传来的请求数据
    response.end();
    console.log("someone Coming");
});

//监听端口类似与门排号数字
server.listen(8080);

//监听一个很重要的步骤-waitpeople