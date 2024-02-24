<template>
  <h3>MyComponent14 Child Component</h3>
  <div>
    Parent Component Data <br />
    {{ props.childId }}<br />
    {{ props.childTitle }}<br />
  </div>

  <div :ref="(ele) => childFunc(ele)">this is test div2</div>
  <button @click="counter++">counter - {{ counter }}</button>
</template>

<script setup>
import { ref, onMounted, watchEffect, defineProps } from "vue";
const counter = ref(0);

// const props = defineProps(["childId", "childTitle"]);

const props = defineProps({
  childId: Number,
  childTitle: String,
});

onMounted(() => {
  // console.log('id - ', props.childId);
  // console.log('title - ', props.childTitle);
});

watchEffect(() => {
  //   console.log("Child watchEffect called");
  // console.log(counter);
});

const childFunc = (ele) => {
  console.log("childFunc called");
};

// we can pass variable methods to parent component
defineExpose({
  counter,
  childFunc,
});
</script>