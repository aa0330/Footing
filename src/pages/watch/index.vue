<!-- 
     表单修饰符 
        .lazy
        .number
        .trim
 -->
<template>
    <div>
        <h1>Watch </h1>
        <hr>
        <h3>name: {{ name }}</h3>
        <input type="text" v-model.trim="name">
        <hr>
        userName<input type="text" v-model.trim="userName">
        <hr>
        <h4 ref="h4text">提示信息</h4>
        <input ref="inputValue" type="text" @input="alertText">
    </div>
</template>
<script setup>
import { watch, ref, watchEffect, onMounted } from 'vue';

let name = ref('tom')
let userName = ref('王池')
let inputValue = ref('')
let h4text = ref(null)

// 监听器
watch(name, (newvalue, oldvalue) => {
    console.log('newvalue==>', newvalue, 'oldvalue==>', oldvalue);

}, {
    // immediate: true,
    deep: true,
})

// 深层监听器 自动跟踪回调的响应依赖   参数进行依赖
const stop = watchEffect((oninvalidate) => {
    console.log('先执行谁呢？');
    let timer;
    oninvalidate(
        // (func, delayTime) => {
        //     if (timer) clearTimeout(timer)
        //     timer = setTimeout(() => {
        //         func.apply(this, args);
        //     }, delayTime)
        // }
    )
    console.log('userName=>', userName.value);
})

const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(function () {
            func.apply(this, args)
        }, delay)
    }
}

function printText() {
    console.log('执行啦');
    h4text.value.innerHTML = inputValue.value.value
}

function alertText() {
    h4text.value.innerHTML = '正在输入...'
    debounce(printText, 3000)()
}





</script>

<style scoped></style>
