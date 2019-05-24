// var fs = require("fs");
// var Q = require("q");
// var defer = Q.defer();//初始化promsie

// function getInitialPromise(){
//     return defer.promise;
// }

// getInitialPromise().then((success)=>{
//     console.log(success);
// },(error)=>{
//     console.log(error);
// },(progress)=>{
//     console.log(progress);
// });

// // defer.notify("in progress");//notify表示在过程中
// // defer.resolve("resolve");//成功
// // defer.reject("rejecrt");//失败 但不会有反应promsie的状态只会改变一次

// var outputPromise = getInitialPromise().then((resolve)=>{
//     return "resovle";
// },(reject)=>{
//     return "reject";
// });

// outputPromise.then((resolve)=>{
//     console.log("resovle: " +resolve);
// },(reject)=>{
//     console.log("reject: " +reject);
// });

// // defer.reject();
// //defer.resolve();
// //then会返回一个promise对象
// var users = [{"name":"john","password":"123456"}];

// function getUsername(){
//     return defer.promise;
// }

// function getUser(username){
//     var user;
//     users.array.forEach(element => {
//         if(element.name == username){
//             user = element;
//         } 
//     });
//     return user;
// }

// getUsername().then((username)=>{
//     console.log(username);
// }).then((user)=>{
//     console.log(user);
// });

// defer.resolve("xx");

const Q = require("q");
const fs = require("fs");

function printFileContent(filename){
    return ()=>{
        var defer = Q.defer();
        fs.readFile(filename,(err,data)=>{
            if(!err && data){
                console.log(data.toString());
                defer.resolve(filename + "success");//表示状态为reslove
            }else{
                defer.reject(filename + "fail");//
            }
        });
        return defer.promise;
    }
}

//顺序执行
printFileContent("aaa.txt")().then(printFileContent("bbb.txt"));