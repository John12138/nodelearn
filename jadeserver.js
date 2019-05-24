//模板引擎 jade：破坏性、强依赖性
//ejs

//根据缩进，规定层级
//属性放在(herf="sss",alt="")中
//内容: 在空格后写入内容

//在使用style时有两种写法：
    //第一种是普通写法： div(style = "width:200px,height:200px")
    //第二种是json写法: div(style = {width:200px,height:200px})

//在使用class时有两种写法:
    //普通写法  div(class = "aa bb left")
    //数组写法  div(class = [aa,bb,ccc])

//div.box    //class
//div#div1   //id
//  |原样识别东西

//include a.js外部引用文件减少http请
//

const jade = require("jade");

var str = jade.renderFile("./views/1.jade",{pretty:true});
console.log(str);