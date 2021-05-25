// 循环  递归 类型判断
var arr2 = [1, ["2", [3, "4"]]];
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

//toString  缺点是只能扁平化Array<number>
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
  return arr
    .toString()
    .split(",")
    .map((item) => {
      return +item;
    });
}

//reduce 配合递归
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
  return arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}

// ...运算符 配合some
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
