<template>
    <!-- if we have root element as below div then 'parent-class' automatically apply on it and merge with existing class -->
    <!-- if we have not single root element then it will show error -->
    <!-- <div class="child-class"> -->
        <h3>MyComponent6 - Class Binding</h3>
        <div :class="{'class-1': isActiveC1, 'class-2': isActiveC2}">Class Binding 1</div>
        <div :class="classObj">Class Binding 2</div>
        <div :class="computedprop">Class Binding 3</div>
        <div :class="[class1, class2, isActiveC1 ? 'class1' : 'class2' ]">Class Binding 4</div>
        <div :class="[class1, class2, isActiveC1 ? 'class123' : 'class234' ]">Class Binding 4</div>
        <div class="staic" :class="[class1, {'class-1': isActiveC1}]">Class Binding 5</div>
        <div :class="$attrs.class">Class Binding 6</div> <!-- manually bind 'parent-class' -->
    <!-- </div> -->
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const isActiveC1 = ref(true);
const isActiveC2 = ref(true);
const class1 = ref('c-1');
const class2 = ref('c-2');

const classObj = reactive({
    'class-1': true,
    'class-2': true,
});

const computedprop = computed(() => {
    return {
        class11: true,
        class22: true,
    }
});
</script>