<template>
    <div>
        <h4>插槽的分类：</h4>
        <ul>
            <li>默认插槽</li>
            <li>具名插槽</li>
            <li>条件插槽</li>
            <li>动态插槽</li>
            <li>作用域插槽</li>
        </ul>
        <hr>
        <h4>动态插槽就是将插槽绑定为一个变量可以调整插槽的位置</h4>
        <h4>作用域插槽就是子组件通过slot标签传递 :name=value的方式传递给 上层出口，父组件通过v-slot拿到参数进行展示</h4>

    </div>
</template>

<script setup>

</script>

<style scoped></style>
