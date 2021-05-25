let count = 1;
let container = document.querySelector("#container");
function getUserAction(e) {
  container.textContent = count++;
}
// container.onmousemove = getUserAction;

function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

container.onmousemove = debounce(getUserAction, 1000);
