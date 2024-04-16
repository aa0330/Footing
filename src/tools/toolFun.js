/*  
    工具包: 




   


*/

/*  
js闭包的应用之---防抖与节流
    
    防抖：每次调用前清除定时器，从而达到延时触发防止页面抖动的效果
        将timer放在闭包中,

    节流： 第一次触发会直接执行,以后一段时间内执行一次,
 */


/**
 * 
 * @param {function} func - 要防抖的函数
 * @param {number} delay - 防抖延迟的时间ms
 * @returns 
 */
function debounce(func, delay) {
    let timer;
    console.log('执行debounce');
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
            console.log('清除timer');
        }
        let context = this
        timer = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }
}

//  节流
/**
 *@param {function} func -要节流的函数 
 *@param {number} limit -要节流时间端 
*/
function throttle(func, limit) {
    // 上次的事件
    let previous = 0;
    return function (...args) {
        let now = Date.now()
        let context = this
        if ((now - previous) > limit) {
            func.apply(context, args)
            previous = now
        }
    }
}
// 随机数
/**
 * 
 * @param {number} start -开始的
 * @param {number} length 
 * @returns 
 */
function Random(start, length) {
    return Math.floor(Math.random() * (length - start)) + start;
}

/* */
function myInstanceOf(left, right) {
    if (typeof left !== 'object' || left == null) return false
    let proto = Object.getPrototypeOf(left)
    while (true) {
        if (proto == null) return false;
        if (proto === right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }

}


export { debounce, throttle, Random }