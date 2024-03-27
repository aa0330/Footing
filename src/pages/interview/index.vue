<template>
    <div class="title">
        <h2>2024/3/26迎来第一次面试，次日27号拿到第一个offer</h2>
        <h3>虽然拿到了，但是全日制学校课程不结束不允许实习，所以很遗憾骗了这家公司</h3>
    </div>
    <div class="context" style="margin-left: 100px;">
        <h3>
            说一下收获吧:
            <br>
            排序问题：按照数组元素中的对象属性个数进行排序数组元素
        </h3>
        <br>
        <h4>解决办法：将对象元素转化为数组：</h4>
        数据如下：
        <div v-for="(item, index) in dataArr" :key="index">
            {{ item }}
        </div>
        可以看出数据的顺序还是比较乱的

        <h4> 获取数组长度，==》 将长度和对应位置的下标 存到新的数组中 ==》 给新的数组进行排序 ==》 将排好序的数组按照下标进行取出组成新的数组</h4>
        <br>
        <button @click.once="orderArr(dataArr)">点击进行排序</button>
        <div v-for="(item, index) in modifyArr" :key="index">{{ item }}</div>
        <h4>感觉还有更简单的办法,先保存这吧</h4>
        <h2>主要复习了对象转为数组的方法，以及sort方法的使用</h2>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

let dataArr = [
    { a: 1, b: 2 },
    { a: 1, b: 2, d: 3, e: 4, f: 8, q: 9 },
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, d: 3, e: 1, l: 1 },
    { a: 1, b: 2, d: 3, e: 4 },
    { a: 1, w: 2, },
    { a: 1, b: 2, m: 3, n: 4 },
]

let modifyArr = reactive([])

const orderArr = (data) => {

    let newArr = []
    let index = 0
    let newData = []
    for (let obj of data) {
        newArr.push([Object.entries(obj).length, index++])
    }
    newArr.sort((a, b) => {
        return a[0] - b[0]
    })

    for (let i = 0; i < data.length; i++) {
        newData.push(data[newArr[i][1]])
    }
    modifyArr.push(...newData)
    console.log(modifyArr);
}



</script>

<style scoped></style>
