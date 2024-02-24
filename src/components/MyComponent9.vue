<template>
    <h3>MyComponent9 - v-for directive</h3>
    <div>
        <ul>
            <li v-for="(val, key, index) in arr1" :key="index"> {{index}} - {{val}} - {{ val.title }}</li>
        </ul>
    </div>
    <div>
        <ul>
            <li v-for="(val, key, index) in obj1" :key="index">{{ index }} - {{key}} - {{ val }}</li>
        </ul>
    </div>

    <div v-for="(n, index) in 5" :key="index">{{ n }}</div>

    <!-- try with 'index' in key binding -->
    <div v-for="(val, index) in arr1" :key="val.id">
        {{index}} - {{ val.title }}
        <input type="text">
    </div>
    <div>
        <button type="button" @click="Shuffle1()">Shuffle</button>
    </div>

    
</template>

<script setup>
import { reactive, ref } from "vue";
const arr1 = reactive([
    {id: 1, title: 'Book-123'},
    {id: 2, title: 'Book-234'},
    {id: 3, title: 'Book-345'},
    {id: 4, title: 'Book-456'},
]);
const obj1 = reactive({
    fname: 'Raj',
    lname: 'kapoor',
    address: 'mumbai',
});

const Shuffle1 = () => {
    return arr1.sort(()=> Math.random() - 0.5);
}
</script>