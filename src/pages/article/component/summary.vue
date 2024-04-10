<template>

    <div class="container">
        <h3>sort: &nbsp;可迭代对象.sort((a,b)==>a-b) --通过控制回调函数的语句进行控制结果排序</h3>
        <p>同时介绍了，数组转换对象Object.entries，对象转换为数组的放法(Object.entries) </p>
        <hr>
        <label for="cardNumber" class="card-item__number" ref="cardNumberRef">
            <!-- 目标 1 TODO：在当前 <label for="cardNumber"> 标签中补充代码，完成输入卡号的显示效果。-->
            <span v-for="(n, $index) in otherCardMask" :key="$index">
                <transition name="slide-fade-up">
                    <!-- 目标 1 TODO Start -->
                    <div v-if="n" class="card-item__numberItem">{{ n }}</div>

                    <!-- 目标 1 TODO End -->
                </transition>
            </span>
        </label>
    </div>

</template>

<script setup>
import { ref, reactive } from 'vue'
const otherCardMask = 'aaaaaaaaaaaaaaaa'
</script>

<style scoped>
.container {
    margin-left: 50px;
}
</style>