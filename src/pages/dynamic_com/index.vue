<template>
    <div class="recursion_tree" style="margin-left: 50px;">
        <h2>递归组件</h2>
        <Tree :data="dataTree" />
    </div>
    <div class="dynamic_com" style="margin-left: 50px;">
        <h2>动态组件</h2>
        <button @click="changeCom(Acom)">A组件</button>&nbsp;&nbsp;&nbsp;
        <button @click="changeCom(Bcom)">B组件</button>&nbsp;&nbsp;&nbsp;
        <button @click="changeCom(Ccom)">C组件</button>
        <component :is="comId"></component>
    </div>
    
    <div class="aysnc_com" style="margin-left: 50px;">
        <h2>异步组件 & 顶层await技术</h2>
        <Suspense>
            <template #default>
                <div v-if="loading">
                    <el-skeleton :rows="5" animated />
                </div>
                <div else>
                    加载成功
                </div>
            </template>

            <template #fallback>
                <div>加载失败！</div>
            </template>

        </Suspense>

    </div>


</template>

<script setup>
import { ref, reactive, shallowRef, markRaw } from 'vue'
import { axios } from '@/util/axios.js'
import Tree from '@/components/recursion_tree/Tree_bulit.vue'
import Acom from './Acom.vue'
import Bcom from './Bcom.vue'
import Ccom from './Ccom.vue'

let comId = shallowRef(Acom)
const comData = reactive([
    {
        name: 'A组件',
        comId: markRaw(Acom)
    },
    {
        name: 'B组件',
        comId: markRaw(Bcom)
    },
    {
        name: 'C组件',
        comId: markRaw(Ccom)
    },
])

const changeCom = (com) => {
    comId.value = com
}

let dataTree = [
    {
        checked: true,
        name: 1,
        children: [
            {
                checked: false,
                name: '1-1',
            },
            {
                checked: false,
                name: '1-2',
            },
            {
                checked: false,
                name: '1-3',
            },
        ]
    }, {
        name: 3,
        checked: false,
    }, {
        name: 4,
        checked: false,
    }
]

// await axios.get('')




</script>

<style scoped></style>