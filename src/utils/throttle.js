// 节流函数：限制函数的执行次数，在固定时间间隔内只能执行一次。
export function throttle (fn, delay) {
  let last = 0;
  return (...args) => {
    let now = +Date.now();
    if(now - last > delay){
      last = now;
      fn.apply(this,args);
    }
  }
}
// test 
let i = 0
function getname(params) {;
  i++
  console.log("gaojingtao"+i)
}
let th = throttle(getname,400)
th()
th()
th()
th()

th()

th()
th()
th()
th()
console.log("-----------------")
setTimeout(() => {
  th()
}, 500);
console.log("===============")
th()
th()
th()
th()
th()
th()
th()
th()
th()
th()
th()
th()
