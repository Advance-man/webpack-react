export function deepClone(obj) {
  let cloneObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key] && typeof obj[key] == "object") {
        cloneObj[key] = deepClone(obj[key])
      } else {
        cloneObj[key] = obj[key]
      }
    }
  }
  return cloneObj;
}


// test
let obj1={
  name:"gjt",
  age:12,
  childrens:[1,23,4,5]
}

let cloneO = deepClone(obj1)
cloneO.name = "高美子"
cloneO.childrens[0]=999
console.log(cloneO)
console.log(obj1)