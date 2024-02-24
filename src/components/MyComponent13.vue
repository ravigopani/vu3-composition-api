<template>
    <h3>MyComponent13 - Component Life Cycle Hooks</h3>
    <input type="text" id="my-text-field">
</template>

<script setup>
    import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
    onBeforeMount(() => {
        console.log(document.getElementById('my-text-field'))
        console.log('onBeforeMount called');
    })

    onMounted(() => {
        console.log(document.getElementById('my-text-field'))
        console.log('onMounted called');
    })

    onBeforeUpdate(() => {
        console.log('onBeforeUpdate called');
    })

    onUpdated(() => {
        console.log('onUpdated called');
    })

    onBeforeUnmount(() => {
        console.log(document.getElementById('my-text-field'))
        console.log('onBeforeUnmount called');
    })

    onUnmounted(() => {
        console.log(document.getElementById('my-text-field'))
        console.log('onUnmounted called');
    })
</script>