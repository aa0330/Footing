<template>
    <h3>今儿写了一个面试题 有个编程题没写出来[笑哭],以及昨天写半天没找出来错的防抖函数</h3>
    <hr>
    <h4>防抖函数</h4>
    <div class="main_box" style="margin: 30px 80px;">
        <input ref="inputText" type="text" @input="inputFn" />
        <div ref="showText"></div>
    </div>
    <hr>

</template>

<script setup>
import { ref, reactive } from 'vue'
// import { debounce } from '@/tools/toolFun.js'

let inputText = ref();
let showText = ref();

function showInfo() {
    console.log('执行！！！');
    showText.value.innerHTML = inputText.value.value
}

function debounce(func, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
            console.log('清除timer');
        }
        let context = this;
        timer = setTimeout(function () {
            func.apply(this, args)
        }, delay);
    }
}
const inputFn = debounce(showInfo, 1000)

//  输入时触发
// function inputFn() {
//     debounce(showInfo, 1000)()
// };



</script>
