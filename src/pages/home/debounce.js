function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer)
    const context = this
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}


function throttle(func, limit) {

  let previous;
  return function (...args) {
    let now = Date.now()
    let context = this;
    if (now - previous > limit) {
      func.apply(context, args);
      previous = now;
    }

  }
}

export default {
  debounce,
  throttle
}


