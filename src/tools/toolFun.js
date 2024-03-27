/*  
    js闭包的应用之---防抖与节流
    
    防抖：每次调用前清除定时器，从而达到延时触发防止页面抖动的效果
        将timer放在闭包中,


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


function throttle() {

}


export { debounce }