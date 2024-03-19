<!-- 
    原则：复用性、适应性

    需求分析；  
        图片区 + 内容区的一个box

        图片区：
            1、图片大小控制
            2、统一的兜底图
            3、 图片地址
            4、图片是否要+标签
            5、兜底图的替换

        内容区：


    解决方案：


 -->

<template>
    <div class="item-wraper">
        <div class="image_container">
            <img src="">
        </div>
        <div class="info_container">

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.item-wraper {
    width: 100%;
    display: flex;
    padding: 10px;
    flex-grow: 1;

    .image_container {
        width: 30%;
        border-color: red;
    }

    .info_container {
        width: 70%;
        background-color: blue;
    }
}
</style>
