<template>
    <h3>MyComponent10 - Event handling</h3>
    <button type="button" @click="count++">Inline event handle</button> - {{ count }} <br/>
    <button type="button" @click="countFunc()">In Method event handle</button> <br/>
    <button type="button" @click="countFunc1('Ravi', $event)">In Method event handle</button> <br/>
    
    <!-- this below both same -->
    <a href="https://www.google/com" @click="countFunc">Prevent default 1</a> <br/>
    <a href="https://www.google/com" @click="countFunc($event)">Prevent default 2</a> <br/>

    <a href="https://www.google/com" @click.prevent="countFunc1('Ravi', $event)">Prevent default 3</a> <br/>

    <!-- try with another event handling thing with document -->
</template>

<script setup>
    import { ref } from "vue";
    const count = ref(0);

    const countFunc = (event) => {
        event.preventDefault();
        // default get event object
        console.log(event);
        count.value++
    }

    // get event obj on functions multi args
    const countFunc1 = (name, event) => {
        // default get event object
        console.log(name);
        console.log(event);
        count.value++
    }
</script>