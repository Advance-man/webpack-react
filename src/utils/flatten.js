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

