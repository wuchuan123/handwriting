function flatten(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

//toString
function flatten(arr) {
  return arr
    .toString()
    .split(",")
    .map((item) => {
      return +item;
    });
}

//reduce
function flatten(arr) {
  return arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}
//some ...
function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat([...arr]);
  }
  return arr;
}
