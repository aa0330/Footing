<template>
  <div v-for="item in data" class="tree_box">
    <input type="checkbox" v-model="item.checked">
    <span>{{ item.name }}</span>
    <Tree_bulit v-if="item?.children?.length" :data="item?.children"></Tree_bulit>
  </div>
</template>


<script setup>
   defineProps(['data'])

</script>

<style scoped>
.tree_box {
  margin-left: 15px;
}
</style>