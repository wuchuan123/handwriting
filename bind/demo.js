Function.prototype.bind2 = function (content) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  var self = this;
  var args = [].slice.call(arguments, 1);
  var fNop = function () {};
  var fBound = function () {
    var bindArgs = [].slice.call(arguments);
    return self.apply(
      this instanceof fNop ? this : content,
      args.concat(bindArgs)
    );
  };
  fNop.prototype = this.prototype;
  fBound.prototype = new fNop();
  return fBound;
};
