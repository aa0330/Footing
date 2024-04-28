<template>
    <div>
        deepCopy
    </div>
</template>

<script setup>

function deepCopy(source) {
    if (!isObject(source)) {
        return source
    }
    const target = Array.isArray(source) ? [] : {};
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = deepCopy(source[key])
        }
    }
    return target
}

function isObject(obj) {
    return obj && typeof obj === 'object'
}


</script>

<style scoped></style>
