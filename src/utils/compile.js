// 模板引擎
function compile(template){
  template = template.replace(/\{\{(.+)\}\}/gu,function () {
    console.log(arguments);
    let key = arguments[1].trim();
    return "${"+ key +"}";
  })
  const body = "str = '';with(obj){str += `"+ template +"`} return str";

  // eslint-disable-next-line no-new-func
  return new Function('obj',body)
}

//test
let str = "<h1>{{message}}</h1>";
let obj = {
  message:"nihao",
  name:"gaojingtao"
}
let fn = compile(str)
let str1 = fn(obj)
console.log(str1)

export {
  compile
}
