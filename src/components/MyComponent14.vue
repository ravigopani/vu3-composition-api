<template>
  <h3>MyComponent14 - Ref & Props</h3>
  <!-- simple div element ref -->
  <div ref="myDivRef">this is myDiv</div>

  <!-- div in loop of array ref -->
  <div v-for="(data, index) in arr1" :key="index" ref="arrRef">{{ data }}</div>

  Child Var in Parent = {{ childUpdateVar }} <br />

  <button @click="parentFunc">Parent Button</button>

  <!-- child component ref -->
  <my-component14_1
    ref="MyCmpRef"
    :childId="parentId"
    :childTitle="parentTitle"
  />
</template>

<script setup>
import MyComponent14_1 from "./MyComponent14_1.vue";
import { ref, onMounted, watchEffect, computed } from "vue";

const myDivRef = ref(null);
const arrRef = ref([]);
const MyCmpRef = ref(null);

const arr1 = ref([1, 2, 3, 4]);

const parentId = ref(123456);
const parentTitle = ref("this is passed title");

onMounted(() => {
  // we can manipulate with ref
  //   console.log(myDivRef.value)
  myDivRef.value.style.color = "red";

  // use ref in looping array
  //   console.log(arrRef.value);

  arrRef.value[1].style.color = "red";
});

watchEffect(() => {
  // console.log('Parent watchEffect called')
  // console.log(MyCmpRef.value); // some time initially this MyCmpRef not load on DOM so
  if (MyCmpRef.value) {
    // console.log(MyCmpRef.value.counter);
  }
});

const childUpdateVar = computed(() => {
  if (MyCmpRef.value) {
    return MyCmpRef.value.counter;
  } else {
    return 0;
  }
});

const parentFunc = () => {
  console.log("parentFunc called");
  // calling child function from parent
  MyCmpRef.value.childFunc();
};
</script>