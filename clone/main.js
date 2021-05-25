//数组浅拷贝
var arr = ["old", 1, true, null, undefined];
var new_arr = arr.concat();
//或者
var new_arr = arr.slice();

//数组，对象的深拷贝 JSON 但不能拷贝函数
var arr = ["old", 1, true, ["old1", "old2"], { old: 1 }];
var new_arr = JSON.parse(JSON.stringify(arr));

//数组、对象浅拷贝
var shallowCopy = function (obj) {
  if (typeof obj !== "object") return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
};

//数组、对象深拷贝 递归
var deepCopy = function (obj) {
  if (typeof obj !== "object") return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
  }
  return newObj;
};
