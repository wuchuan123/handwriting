const container = document.querySelector("#container");
let count = 1;
function getUserAction() {
  container.textContent = count++;
}
function debounce(func, wait) {
  let timeout;
  return function () {
    var content = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(content, args);
    }, wait);
  };
}
container.onmousemove = debounce(getUserAction, 500);
