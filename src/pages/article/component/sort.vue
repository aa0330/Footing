<!-- 
    对象转数组：
    Object.entries,会将一组key value分开存成一个数组 { a:1,b:2} => [['a',1],['b',2]]

    

-->
<template>
    <div class="container">
        <h3>sort方法，当时的应用场景给数组中的对象元素按照属性个数排序</h3>
        <hr>
        数组数据:
        [<div v-for="item of data">{{ item }}</div>]
        <hr>
        <button @click="changeDetails">点击进行展示</button>
        &nbsp; （采用v-show的形式去控制显示）
        <hr>
        <div v-show="isShow">
            <h4>借用Obje.entries()方法将对象转为数组，然后递归遍历，使用sort方法进行定向排序，之后再用Object.fromEntries去转化回来就行了</h4>
            转换后的数组数据：
            <div v-for="item of newdata">{{ item }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

let isShow = ref(false)

let data = [
    { a: 1, b: 2 },
    { a: 1, b: 2, d: 3, e: 4, f: 8, q: 9 },
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, d: 3, e: 1, l: 1 },
    { a: 1, b: 2, d: 3, e: 4 },
    { a: 1, w: 2, },
    { a: 1, b: 2, m: 3, n: 4 },
]

let newdata = reactive([])

const changeDetails = () => {
    isShow.value = !isShow.value
    console.log(isShow.value);
}

onMounted(() => {
    let temMat = []
    data.forEach((item, index) => {
        temMat.push([Object.entries(item), index])
    })
    temMat.sort((a, b) => {
        return a[0].length - b[0].length
    })
    temMat.forEach((item) => {
        newdata.push(Object.fromEntries(item[0]))
    })
    console.log('newdata', newdata);
})



</script>

<style scoped>
.container {
    margin-left: 50px;
}
</style>