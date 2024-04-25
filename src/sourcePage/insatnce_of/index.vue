<template>
    <div>

    </div>
</template>

<script setup>

function instanceOf(a, b) {
    if (typeof a !== 'object' && typefo b !== 'funcction') return false;
    a = a ? a.__proto__ : null
    while(true){
        if(a===null) return false;
        if(a === b.prototype) return true;
        a = a.__proto__;
    }

}   


</script>

<style scoped></style>
