<!-- 
该网页用于写一下常见好用的方法





 -->

<template>
  <div class="container">
    <el-row>
      <el-col :span="2">
        <button @click="changeCom('sortCom')">Arr.sort</button>
      </el-col>
      <el-col :span="2">
        <button @click="changeCom('reduceCom')">reduce</button>
      </el-col>
      <el-col :span="2">
        <button @click="changeCom('filterCom')">filter</button>
      </el-col>
      <el-col :span="2">
        <button @click="changeCom('mapCom')">map</button>
      </el-col>
      <el-col :span="2">
        <button @click="changeCom('assignCom')">Object.assign</button>
      </el-col>


      <el-col :span="2">
        <button @click="changeCom('summaryCom')">summary</button>
      </el-col>
    </el-row>
    <hr>
    <component :is="componentId"></component>
  </div>
</template>

<script setup>
import { ref, reactive, shallowRef, markRaw } from 'vue';
import sortCom from './component/sort.vue';
import filterCom from './component/filter.vue';
import mapCom from './component/map.vue';
import reduceCom from './component/reduce.vue'
import summaryCom from './component/summary.vue'


let componentId = shallowRef(sortCom)

let comMap = new Map([
  ['sortCom', markRaw(sortCom)],
  ['filterCom', markRaw(filterCom)],
  ['mapCom', markRaw(mapCom)],
  ['reduceCom', markRaw(reduceCom)],
  ['assignCom', markRaw()],
  ['summaryCom', markRaw(summaryCom)],

])

const changeCom = (comName) => {
  componentId.value = comMap.get(comName)
}



</script>

<style scoped>
.container {
  margin-top: 50px;
  margin-left: 50px;

  button {
    width: 120px;
    height: 40px;
    background-color: #cecdcd;
    border: transparent;
    font-size: large;
  }
}
</style>
