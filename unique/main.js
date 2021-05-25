var array = [];
for (let i = 0; i < 100000; i++) {
  array.push(Math.floor((100000 + 1) * Math.random()));
}
var arr2 = [1, 1, "1", "1", "2", "2"];
//for
function unique(array) {
  // res用来存储结果
  var res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
      for (var j = 0, resLen = res.length; j < resLen; j++ ) {
          if (array[i] === res[j]) {
              break;
          }
      }
      // 如果array[i]是唯一的，那么执行完循环，j等于resLen
      if (j === resLen) {
          res.push(array[i])
      }
  }
  return res;
}

//indexOf
function unique(array) {
  // res用来存储结果
  var res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current);
    }
  }
  return res;
}
console.log(unique(arr2));
console.time("test");
unique(array);
console.timeEnd("test");

let arr = [1, 2, 3, 22, 233, 22, 2, 233, "a", 3, "b", "a"];

function uniqueF(array) {
  let res = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
  return res;
}

function unique(array) {
  const res = [];
  array.forEach((item, index) => {
    if (array.indexOf(item) === index) {
      res.push(item);
    }
  });
  return res;
}
//sort
function unique(array) {
  const res = [];
  array.sort();
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      res.push(array[i]);
    }
  }
  return res;
}

//includes
function unique(array) {
  const res = [];
  array.forEach((item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
}
function unique(array) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (!res.includes(array[i])) {
      res.push(array[i]);
    }
  }
  return res;
}

function unique(array) {
  return array.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
      init.push(current);
    }
    return init;
  }, []);
}
