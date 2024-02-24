<template>
    <h3>MyComponent16</h3>
    var1 - {{ var1 }} <br/>
    var2 - {{ var2 }} <br/>
    
    <!-- first way -->
    <!-- <MyComponent16_1 :var1="var1" @updateParent="var1 = $event" /> -->

    <!-- second way with v-model with single value -->
    <!-- <MyComponent16_1 v-model="var1" /> -->

    <!-- third way with v-model with multiple value -->
    <!-- <MyComponent16_1 v-model:var1="var1" v-model:var2="var2" /> -->

    <!-- custom modifiers with default single value -->
    <!-- <MyComponent16_1 v-model.custom-modifiers="var1" /> -->

    <!-- custom modifiers with multi value -->
    <MyComponent16_1 v-model:var1.custom-modifiers="var1" v-model:var2.custom-modifiers="var2" />
</template>

<script setup>
    import MyComponent16_1 from "./MyComponent16_1.vue";
    import { ref } from 'vue';
    const var1 = ref('parent var1')
    const var2 = ref('parent var2')
</script>