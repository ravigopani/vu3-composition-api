<template>
  <h3>MyComponent18_1</h3>
  <!-- single slots -->
  <!-- <slot :childVar1="childVar1">
        <i>default text</i>
    </slot> -->

  <div>Load Data for myslot1 inside below slot</div>
  <slot name="myslot1" :slot1Data="childVar1"></slot>

  <div>Load Data for myslot2 inside below slot</div>
  <slot name="myslot2"></slot>

  <div>Default slot will be like 'no name slot' or can give name 'default'</div>
  <slot name="default"></slot>
  <!-- <slot></slot> -->

  <slot name="myslot3" :slot3Data="childVar2"></slot>
</template>

<script setup>
import { ref } from "vue";
const childVar1 = ref("this is child variable 1");
const childVar2 = ref('this is child variable 1')
</script>