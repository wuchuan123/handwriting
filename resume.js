// 防抖
const debounce = function (fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, arguments);
    }, delay);
  };
};

// 节流
const throttle = function (fn, delay) {
  let canUse = true;
  return function () {
    if (canUse) {
      fn.apply(this, arguments);
      canUse = false;
      setTimeout(() => (canUse = true), delay);
    }
  };
};

// clone
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const deepClone = (obj) => {
  if (typeof obj !== "object") return;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
  }
  return newObj;
};

// 去重
let arr = [1, 1, 1, 2, 2, 3, 3, 4, 4];
const unique = (arr) => [...new Set(arr)];

const uniqueFilter = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
const forEachUnique = (arr) => {
  let uniqueArr = [];
  arr.forEach((item, index) => {
    if (arr.indexOf(item) === index) uniqueArr.push(item);
  });
  return uniqueArr;
};

// ajax
let xhr = new XMLHttpRequest();
xhr.open("GET", "www.baidu.com", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(request.responseText);
  }
};
xhr.send();

// jsonp
function jsonp(url, data = {}) {
  return new Promise((resolve, reject) => {
    window.__fn__ = (data) => resolve(data);
    let script = document.createElement("script");
    let query = Object.entries(data)
      .map((a) => `${a[0]}=${a[1]}`)
      .join("&");
    script.src = url + "?callback=__fn__&" + query;
    script.onerror = () => reject("加载失败");
    document.head.appendChild(script);
    document.head.removeChild(script);
  });
}

// 事件委托
function delegate(element, eventType, selector, fn) {
  element.addEventListener(eventType, (e) => {
    let el = e.target;
    while (!el.matches(selector)) {
      if (element === el) {
        el = null;
        break;
      }
      el = el.parentNode;
    }
    el && fn.call(el, e, el);
  });
  return element;
}

// 继承
// 原型继承
function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function () {
  console.log(this.name);
};
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

//类继承
class Parent {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

// 快速排序

// 数组扁平
const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );
// trim()
function trim(string) {
  return string.replace(/^\s+|\s+$/g, "");
}

// new
function objectFactory() {
  let obj = new Object();
  Constructor = [].slice.call(arguments);
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret || obj : obj;
}

// bind
Function.prototype.bind2 = function (context) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  let self = this;
  let args = [].slice.call(arguments, 1);
  let fNOP = function () {};
  let fBound = function () {
    let bindArgs = [].slice.call(arguments);
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
// call
Function.prototype.call2 = function (content = window) {
  content.fn = this;
  let args = [...arguments].slice(1);
  let result = content.fn(...args);
  delete content.fn;
  return result;
};
// apply
Function.prototype.apply2 = function (content = window) {
  content.fn = this;
  let result;
  if (arguments[1]) {
    result = content.fn(arguments[1]);
  } else {
    result = content.fn();
  }
  delete content.fn;
  return result;
};
// promise
class Promise2 {
  succeed = null;
  fail = null;
  state = "pending";
  resolve(result) {
    setTimeout(() => {
      this.state = "fulfilled";
      this.succeed(result);
    });
  }
  reject(reason) {
    setTimeout(() => {
      this.state = "rejected";
      this.fail(reason);
    });
  }
  constructor(fn) {
    fn(this.resolve.bind(this), this.reject.bind(this));
  }
  then(succeed, fail) {
    this.succeed = succeed;
    this.fail = fail;
  }
}
