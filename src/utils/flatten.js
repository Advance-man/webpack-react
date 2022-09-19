// 数组扁平化
function flatten(arr) {
  if(!Array.isArray(arr)) return false;
  
  let flattenArr = [];
  for (let i = 0; i< arr.length; i++) { 
    if(Array.isArray(arr[i])){
      flattenArr = flattenArr.concat(flatten(arr[i]));
    }else{
      flattenArr.push(arr[i]);
    }
  }
  return flattenArr
}

export { flatten }

// test 
let arr = [1,2,[3,4,34,5,[11,22,33,44,55,[12,13,14,15,[23,24,25,26]]]]];
console.log(arr)
console.log(flatten(arr))