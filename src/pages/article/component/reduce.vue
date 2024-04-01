<template>

  <div class="container">
    <p> reduce的应用场景： <br>
      1、数组里所有值的累加、求和<br>
      2、元素出现次数、数组去重、二维数组转一维数组
    </p>
    <hr>
    场景一：累加求和 <br>
    {{ arrData }} <br>
    <br>
    <button @click.once="reduceSum">点击进行求和</button> &nbsp;&nbsp;
    {{ sumData }}
    <hr>
    场景二：元素出现次数
    <br>
    {{ arrData1 }}
    <br>
    <button @click="reduceFreq">点击进行计算</button>
    <br>
    <br>
    {{ frequeny }}
    <hr>
  </div>

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

let arrData = [1, 12, 3, 10, 4, 5, 7, 8, 9, 6]
let sumData = ref()

const reduceSum = () => {
  sumData.value = arrData.reduce((pre, cur) => {
    return pre + cur;
  }, 0)
}



let arrData1 = [1, 2, 3, 4, 1, 2, 6, 'a', 'a', 'c', 6, 55, 6, 6, 76, 6, 5, 4, 543, 8, 3]
let frequeny = ref({})
const reduceFreq = () => {
  frequeny.value = arrData1.reduce((pre, cur) => {
    if (cur in pre) {
      pre[cur]++
    } else {
      pre[cur] = 1
    }
    return pre
  }, {})
}



</script>

<style scoped></style>