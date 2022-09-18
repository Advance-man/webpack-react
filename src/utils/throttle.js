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
