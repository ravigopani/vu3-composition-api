<template>
    <h3>MyComponent5 - Computed</h3>
    <div>{{ myComputed }}</div>
    <div>{{ fullName }}</div>
    <div>{{ fullName1 }}</div>
</template>

<script setup>
import { computed, ref } from "vue";

const var1 = ref(11);
const fName = ref('Amit');
const lName = ref('Khan');

const myComputed = computed(() => {
    return var1.value > 10 ? 'Greater than 10' : 'Less than 10';
});

/* Computed with readable only can not write value */
const fullName = computed(() => {
    return fName.value+' '+lName.value;
});
// fullName.value = 'write value in computed'

/* Computed with get-set func. -> means readable & writable both */
const fullName1 = computed({
    get(){
        return fName.value+' '+lName.value;   
    },
    set(newValue){
        [fName.value, lName.value] = newValue.split(' ')
    }
});
// fullName1.value = 'myfname mylname'
</script>