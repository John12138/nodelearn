//自定义模块
//模块组成
//发布自己的模块

//require: 请求 ：引入模块的工具
//如果有"./"则先从当前目录下找
//如果没有"./"则先从系统模块找，然后在从node_modules中找  
//所以自定义模块以后都需要放到node_modules中

//module:  模块  批量输出东西
//exports: 输出 对外输出东西必须使用exports暴露出去 一次输出一个

// exports.a = 10;

//node_modules 文件夹 专门用来放模块
module.exports = {
    a : 12,
    b : 5,
    c : 56
};