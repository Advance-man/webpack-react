//防抖函数：限制函数的执行在调用之后固定时间间隔才能执行一次，在间隔内重复调用则会清楚上一次的计时，开始重新计时；

//const { debounce } = require("lodash");

//所以就是最后连续调用多次的话，之后最后一次才会呗调用；
// export 
const debounce = function (fn,delay) {
  let timer = null;

  return (...args)=>{
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this,args)
    },delay)
  }
} 


// test
function getname(params) {;
  console.log("gaojingtao"+params)
}
let th = debounce(getname,400)
th(1)
th(2)
th(3)
th(4)

th(5)

th(6)
th(7)
th(8)
th(9)
// 最后输出 gaojingtao9， 说明只有最后一次的函数调用执行了
