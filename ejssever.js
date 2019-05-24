const  ejs = require("ejs");

ejs.renderFile("./views/1.ejs",{
    name : "js",
    json : {arr : [
        {user : "John",password : "123456"},
        {user : "zhangsan",password : "4748"}
    ]}
},function(err,data){
    console.log(data);
});