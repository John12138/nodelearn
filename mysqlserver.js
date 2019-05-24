const mysql = require("mysql");
//1.连接数据库
//createConnection(那台服务器，用户名，密码，库);
var db = mysql.createConnection({
    host : "localhost",
    user :"root",
    port : 3306,
    password : "1234",
    database :'mysql'
});

//2.查询
//query(干啥,function(){});
db.query("SELECT * FROM user_table;",(err,data) =>{
    if(err){
        console.log("出错了",err);
    }else{
        console.log("成功了");
        console.log(JSON.stringify(data));
    }
});