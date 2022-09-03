import "./style/css/index.css";
import "./style/less/index.less";
import "./style/sass/index.sass";
import "./style/sass/index.scss";
import "./style/stylus/index.styl";
import "./asset/iconfont/iconfont.css";
import increment from "./js/increment.js";
import moment from 'moment';

var a = moment('2016-01-01'); 
var b = a.add(1, 'week'); 
a.format();
b.format();

console.log("hello world!");

const f = ()=>{
  const f = ()=>{
  console.log(123456);
};
f();
// setTimeout(() => {
//   import("./js/math.js")
//   .then(res=>console.log(res))
//   .catch(err=>console.log(err));
// }, 1000);
document.getElementById("btn").onclick=function () {
  import(/*webpackChunkName: "math"*/"./js/math.js").then(res=>console.log(res.default(1,1))).catch(err=>console.log(err));
};

increment(1,2,3,4,5,6);
