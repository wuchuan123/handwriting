//浅拷贝
var arr = ["old", 1, true, null, undefined];
arr.concat();
arr.slice();

//深拷贝
//json
var arr = ["old", 1, true, ["old1", "old2"], { old: 1 }];
var newArr = JSON.parse(JSON.stringify(arr));
//对象的浅拷贝

var shallowCopy = function (obj) {
  if (typeof obj !== "object") return;
  var newObj = obj instanceof Array ? [] : {};
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

//对象的深拷贝
var deepClone = function (obj) {
  if (typeof obj !== "object") return;
  var newObj = obj instanceof Array ? [] : {};
  for (key in obj) {
    newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
  }
  return newObj;
};
