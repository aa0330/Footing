<template>
  <div>
    <h1>
      in 和 of的区别,in应该是下标，而of是元素
      
    </h1>

</div>
</template>

<script setup>

let arr = [1,5,9.8,4,5,6,7];
for(let i in arr){
  console.log(i);
}


</script>

<style scoped>
.box1{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.boxn{
  display: -webkit-box;
  -webkite-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

}

</style>
