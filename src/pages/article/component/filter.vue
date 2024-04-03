<template>
  <div class="container">
    <h1>filter过滤器</h1>
    <h4>原数据{{ numbers }}</h4>
    <h4>filter过滤的数据{{ numbers }}</h4>
    

  </div>
</template>

<script setup>
import { ref } from 'vue';

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(item => item % 2 == 0)




</script>

<style scoped>
.container {
  margin-left: 50px;

}
</style>
