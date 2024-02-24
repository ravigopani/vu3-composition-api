<template>
  <h3>MyComponent18</h3>
  <!-- #1 single slots -->
  <!-- <MyComponent18_1 v-slot="slotProps">
    <b>Parent Data</b>
    {{ slotProps }}
  </MyComponent18_1>  -->
  <br />
  <!-- <MyComponent18_1 /> -->

  <!-- #2 Slot with multi section -->
  <MyComponent18_1>
    <template v-slot:myslot1="propsData1">
      <b>MySlot1 Data</b>
      {{ propsData1 }}
    </template>
    <p>other content1</p>
    <template v-slot:myslot2>
      <u>MySlot2 Data</u>
    </template>
    <p>other content2</p>
    <!-- for short hand use # -->
    <template #myslot3="propsData2">
      <code>myslot3 Data</code>
      {{ propsData2 }}
    </template>
  </MyComponent18_1>
</template>

<script setup>
import MyComponent18_1 from "./MyComponent18_1.vue";
</script>