<template>
    <div class="main_box" style="margin: 80px;">
        <input ref="inputText" type="text" @input="inputFn" />
        <div ref="showText"></div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'


let inputText = ref();
let showText = ref()

function showInfo() {
    console.log('执行！！！');
    showText.value.innerHTML = inputText.value.value
}

function debounce(func, delay) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(this, args)
        }, delay);
    }
}

//  输入时触发
const inputFn = () => {
    showText.value.innerHTML = 'waitting'
    debounce(showInfo, 1500)()
}
</script>
