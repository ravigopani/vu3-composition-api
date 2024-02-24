<template>
    <h3>MyComponent7 - Style Binding</h3>
    <div :style="{color: activeColor, fontSize: fontSize+'px', 'font-size': fontSize+'px'}">Style Binding 1</div>
    <div :style="styleObj">Style Binding 2</div>
    <div :style="computedprop">Style Binding 3</div>
    <div :style="[styleObj, styleObj2]">Style Binding 4</div>
    <div :style="{display: ['priority1', 'priority2', 'priority3']}">Style Binding 5</div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const activeColor = ref('red');
const fontSize = ref(18);

const styleObj = reactive({
    color: activeColor.value,
    fontSize: fontSize.value+'px',
    // 'font-size': 16, // above and this both same
});
const styleObj2 = reactive({
    color: 'purple',
    border: '2px solid yellow',
});

activeColor.value = 'green'

const computedprop = computed(() => {
    return {
        color: activeColor.value,
        fontSize: fontSize.value+'px',
    }
});

setTimeout(() => {
    activeColor.value = 'blue'
}, 5000);
</script>