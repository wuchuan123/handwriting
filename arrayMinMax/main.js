//利用 Math.max()  Math.min()

//循环
var arr = [6, 4, 1, 8, 2, 11, 23];
var result = arr[0];
for (var i = 1; i < arr.length; i++) {
  result = Math.max(result, arr[i]);
}
console.log(result);

//reduce
var arr = [6, 4, 1, 8, 2, 11, 23];
function max(pre, next) {
  return Math.max(pre, next);
}
console.log(arr.reduce(max));

//排序
var arr = [6, 4, 1, 8, 2, 11, 23];
arr.sort((a, b) => {
  return a - b;
});
console.log(arr[arr.length - 1]);

//apply
var arr = [6, 4, 1, 8, 27, 11, 23];
console.log(Math.max.apply(null,arr))

//...运算符
var arr = [6, 4, 1, 8, 27, 11, 23];
console.log(Math.max(...arr))