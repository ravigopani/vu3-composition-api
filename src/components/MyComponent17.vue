<template>
  <h3>MyComponent17</h3>
  <MyComponent17_1
    class="parent-class"
    style="color: red; background-color: gray"
    @click="parentClick"
  />
</template>

<script setup>
import MyComponent17_1 from "./MyComponent17_1.vue";

const parentClick = () => {
  console.log("Parent click called");
};
</script>