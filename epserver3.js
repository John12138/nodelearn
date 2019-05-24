const express = require("express");
const bodyParser = require("body-parser");
// const expressstatic = require("express-static");

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
    extended : true,//扩展模式
    limit :   2*1024*1024      //限制2M的数据
}));

server.use("/",function(request,response){
    // console.log(request.query);//GET
    console.log(request.body);
});

//GET数据无需中间件 request.query 
//POST数据需要bodyParser中间件
//第一步解析数据   bodyParser.urlencoded({});
//   request.body;
