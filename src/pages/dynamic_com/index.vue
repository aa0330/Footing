<template>
    <h1>此文章写了关于递归组件、动态组件、异步组件</h1>
    <div class="recursion_tree" style="margin-left: 50px;">
        <h2>递归组件</h2>
        <Tree :data="dataTree" />
    </div>
    <hr>
    <div class="dynamic_com" style="margin-left: 50px;">
        <h2>动态组件</h2>
        <button @click="changeCom(Acom)">A组件</button>&nbsp;&nbsp;&nbsp;
        <button @click="changeCom(Bcom)">B组件</button>&nbsp;&nbsp;&nbsp;
        <button @click="changeCom(Ccom)">C组件</button>
        <component :is="comId"></component>
    </div>
    <hr>
    <div class="aysnc_com" style="margin-left: 50px;">
        <h2>异步组件 & 顶层await技术</h2>
        <suspense>
            <template #default>
                <AsyncComp />
            </template>

            <template #fallback>
                <Ccom />
            </template>
        </suspense>

    </div>


</template>

<script setup>
import { ref, reactive, shallowRef, markRaw, defineAsyncComponent } from 'vue'
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


1// await axios.get('')
const AsyncComp = defineAsyncComponent(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Bcom)
        }, 2000)
    })
})
// {
//     delay: 200,
//     loader: () => {
//         return new Promise((resolve) => {
//             resolve(() => import('./Acom.vue'))
//         })
//     },
//     loadingComponent: () => import('./Acom.vue'),
//     errorComponent: () => import('./error.vue'),
//     timeout: 3000
// }



</script>

<style scoped></style>