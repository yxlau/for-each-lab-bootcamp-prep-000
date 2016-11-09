function iterativeLog(arr){
  arr.forEach((element, index, arr) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  var arr = [1, 2, 3]
  arr.forEach(callback);
  return arr;
}

function doToArray(arr, callback){
  arr.forEach(callback);
}
