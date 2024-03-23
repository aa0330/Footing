<template>
    <h1> setup Store:</h1>

    <h2>
        Pinia: {{ counter.count }}
    </h2>
    <hr>
    <h2>
        compute->: {{ counter.infoAd }}
    </h2>
    <button @click="() => { counter.count++ }"> +1</button>
    <hr>
    <button @click="resetData">点击初始化全局状态数据</button>
</template>

<script setup>
import { useCounterState } from '@/store/counter.js'
const counter = useCounterState()

function resetData(){
}

</script>

<style scoped></style>