



export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(this, args)
    }, delay);
  }
}

export function throttle() {

} 
