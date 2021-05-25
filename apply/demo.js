Function.prototype.apply2 = function (content = window) {
  content.fn = this;
  let result;
  if (arguments[1]) {
    content.fn(arguments[1]);
  } else {
    content.fn();
  }
  delete content.fn;
  return result;
};
