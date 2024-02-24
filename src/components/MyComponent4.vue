<template>
    <h3>MyComponent4 - ref & reactive</h3>
    <div>
        <h5>Using Ref</h5>
        <button @click="decreaseRef()">-</button>
        {{ refCount }}
        <button @click="increaseRef()">+</button>
        &nbsp;&nbsp;&nbsp;
        {{ refTitle }}
        <input type="text" v-model="refTitle" />
    </div>
    <div>
        <h5>Using Reactive</h5>
        <button @click="decreaseRec()">-</button>
        {{ reactiveData.count }}
        <button @click="increaseRec()">+</button>
        &nbsp;&nbsp;&nbsp;
        {{ reactiveData.title }}
        <input type="text" v-model="reactiveData.title" />
    </div>
</template>

<script setup>
    import { reactive, ref } from "vue";

    const refCount = ref(0);
    const refTitle = ref('ref title');

    const decreaseRef = () => {
        refCount.value--
    }
    const increaseRef = () => {
        refCount.value++
    }

    const reactiveData = reactive({
        count: 0,
        title: 'reactive title',
    })

    const decreaseRec = () => {
        reactiveData.count--
    }
    const increaseRec = () => {
        reactiveData.count++
    }
</script>