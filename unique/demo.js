//for
let arr = [1, 2, 3, 22, 233, 22, 2, 233, "a", 3, "b", "a"];
function unique(array) {
  let res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    if (j === res.length) {
      res.push(array[i]);
    }
  }
  return res;
}
console.log(unique(arr));

//indexOf
function unique(array) {
  let res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current);
    }
  }
  return res;
}

//filter
function unique(array) {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
}

//forEach
function unique(array) {
  let res = [];
  array.forEach((item, index) => {
    if (array.indexOf(item) === index) {
      res.push(item);
    }
  });
  return res;
}

//sort  for
function unique(array) {
  let res = [];
  array.sort();
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    if (array[i] !== array[i + 1]) {
      res.push(array[i]);
    }
  }
  return res;
}

//includes
function unique(array) {
  let res = [];
  array.forEach((item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
}

//Set
function unique(array) {
  let res = Array.from(new Set(array));
  return res;
}
