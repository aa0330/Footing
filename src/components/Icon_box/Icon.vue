<template>
    <div>
        <svg class="icon" aria-hidden="true" @click="handlClick">
            <use :xlink:href="iconName"></use>
        </svg>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    styleClass: {
        type: String,
        default: ''
    },
    iconName: {
        required: true,
        type: String
    }
})
const emits = defineEmits(['handler'])
const iconName = ref(`#${props.iconName}`)


function handlClick() {
    emits('handler','aaaaaaaa')
}


</script>

<style scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    cursor: hand;
}
</style>
