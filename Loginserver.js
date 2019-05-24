const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const urllib = require("url");

var users = {}//暂时模拟数据库

var server = http.createServer(function(request,response){
    //解析数据
    var str = "";
    request.on("data",function(data){
        str += data;
    });

    request.on("end",function(){
        var obj = urllib.parse(request.url,true);
        const url = obj.pathname;
        const GET = obj.query;        //{"user":pass};
        const POST = querystring.parse(str);
    });
    //区分--接口、文件
    if(url == "/user"){//请求接口
        switch(GET.act){
            case "reg": //注册
              //1.先验证用户名是否已经存在
              if(users[GET.user]){
                  response.write('{"ok" : false, "msg" : "此用户已存在"}');
              }else{
                  //2.插入users
                  users[GET.user] = GET.pass;
                  response.write('{"ok" : true,"msg" : "注册成功"}');
              }
              break;
            case "login"://登录
              if(users[GET.user] == null){
                  //1.检验用户是否存在
                  response.write('{"ok" : false, "msg" : "此用户不存在"}');
              }else if(users[GET.user] != GET.pass){
                  //2.检查用户的密码是正确
                  response.write('{"ok" : true,"msg" : "用户名或密码有误"}');
              }else{
                   response.write('{"ok" : false, "msg" : "d登录成功"}');
              }
              //2.检查用户密码是否正确
             break;
             default:
             response.write('{"ok" : false, "msg" : "未知的act"}');
        }
        response.end();
    }else{
        //读取文件
        var file_name = "./www" + url;
        fs.readFile(file_name,function(err,data){
            if(err){
                response.write("404");
            }else{
                response.write(data);
            }
            response.end();
        });
    }


  
});

//对文件的访问：


//对接口的访问：

server.listen(8080);