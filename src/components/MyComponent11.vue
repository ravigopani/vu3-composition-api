<template>
    <h3>MyComponent11 - Form Input & Binding</h3>
    <input type="text" :value="var1" @input="event => var1 = event.target.value" /> - {{ var1 }} <br/>
    <input type="text" v-model="var1" /> - {{ var1 }} <br/>
    <textarea v-model="var2"></textarea> - {{ var2 }} <br/>
    <input type="checkbox" value="A" v-model="var3" /> A  
    <input type="checkbox" value="B" v-model="var3" /> B 
    <input type="checkbox" value="C" v-model="var3" /> C 
    - {{ var3 }} <br/>
    <input type="radio" v-model="var4" value="A" /> A
    <input type="radio" v-model="var4" value="B" /> B
    - {{ var4 }} <br/>
    <select v-model="var5">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
</template>

<script setup>
    import { reactive, ref } from "vue";
    const var1 = ref('');
    const var2 = ref('');
    const var3 = ref([]);
    const var4 = ref('');
    const var5 = ref('C');
</script>