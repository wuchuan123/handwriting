const container = document.querySelector("#container");
let count = 1;

function getUserAction() {
  container.textContent = count++;
}
function throttle(fn, wait) {
  let timeout, context, args;
  let previous = 0;
  var later = function () {
    previous = +new Date();
    timeout = null;
    fn.apply(context, args);
  };
  var throttled = function () {
    var now = +new Date();
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
  return throttled
}

container.onmousemove = throttle(getUserAction, 3000);
