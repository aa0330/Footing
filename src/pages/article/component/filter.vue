<template>
  <div class="container">
    <h1>filter过滤器</h1>
    <h4>原数据{{ numbers }}</h4>
    <h4>filter过滤的数据{{ numbers }}</h4>
    <h1>随机数(m,n)</h1>
    <input type="number" v-model="min"> &nbsp;
    <input type="number" v-model="max">&nbsp;
    <el-button type="primary" @click="redomMN">点击随机生成 {{ min }}-{{ max }}的数字</el-button>
    <h1>{{ redomNum }}</h1>
  </div>  
</template>

<script setup>
import { ref } from 'vue';

const numbers = [1, 2, 3, 4, 5, 6];

let max = ref(10)
let min = ref(0)

let redomNum = ref()

const evenNumbers = numbers.filter(item => item % 2 == 0)

const redomMN = () => {
  redomNum.value = parseInt(Math.random()* (max.value - min.value + 1) + min.value, 10)
}


</script>

<style scoped>
.container {
  margin-left: 50px;

}
</style>
