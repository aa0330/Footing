<template>
    <div>

    </div>
</template>

<script setup>

function patchChildren(n1, n2, container) {
    if (typeof n2.children === 'string') {

    } else if (Array.isArray(n2.children)) {
        const oldChiled = n1.children;
        const newChiled = n2.children;

        const oldLen = oldChiled.length;
        const newLen = newChiled.length;

        // 遍历长度较短的那一组
        const commonLength = Math.min(oldLen, newLen);
        for (let i = 0; i < commonLength; i++) {
            patch(oldChiled[i], newChiled[i], container)
        }

        if (newLen > oldLen) {
            for (let i = commonLength; i < newLen; i++) {
                patch(null, newChiled, container);
            }
        } else if (oldLen > newLen) {
            for (let i = commonLength; i < oldLen; i++) {
                unmount(oldChiled[i])
            }
        } else {

        }
    }


}


</script>

<style scoped></style>
