<template>
    <h3>MyComponent12 - watcher property</h3>
    var1 = <input type="text" v-model="var1"> <br/>
    var2 = <input type="text" v-model="var2"> <br/>
    var3 = <input type="text" v-model="var3.fname"> <br/>
    var4 = <input type="text" v-model="var4.count.value"> <br/> 
    {{ sumFunc() }}
</template>

<script setup>
    import { reactive, ref, watch, watchEffect, watchPostEffect } from "vue";
    const var1 = ref(0);
    const var2 = ref(0);
    const var3 = reactive({fname: 'raj', lname: 'kapoor', age: 20});
    const var4 = reactive({fname: 'raj', lname: 'kapoor', age: 20, count: { value: 0, name: 'rahul' } });

    // watch(var1, (newVal, oldVal) => {
    //     console.log(oldVal);
    //     console.log(newVal);
    // })

    // watch([var1, var2], ([newVar1, newVar2], [oldVar1, oldVar2]) => {
    //     console.log(`New - var1 = ${newVar1} & var2 = ${newVar2}`);
    //     console.log(`Old - var1 = ${oldVar1} & var2 = ${oldVar2}`);
    // })

    // watch(() => var1.value + var2.value, (sum) => {
    //     console.log(`sum new value ${sum}`);
    // })

    // watch([var1, () => var2.value], ([newVar1, newVar2], [oldVar1, oldVar2]) => {
    //     console.log(`New - var1 = ${newVar1} & var2 = ${newVar2}`);
    //     console.log(`Old - var1 = ${oldVar1} & var2 = ${oldVar2}`);
    // })

    // this will not work
    // watch(var3.fname, (newFname, oldFname) => {
    //     console.log('New - ', newFname, 'Old - ', oldFname)
    // })
 
    // this will work
    // watch(() => var3.fname, (newFname, oldFname) => {
    //     console.log('New - ', newFname, 'Old -', oldFname)
    // })

    // watch(var3, (newObj, oldObj) => {
    //     // console.log('New - ', newObj, 'Old -', oldObj)
    //     console.log('New - ', newObj.fname, 'Old -', oldObj.fname)
    // })

    // watch(var4, (newObj, oldObj) => {
    //     // console.log('New - ', newObj, 'Old -', oldObj)
    //     console.log('New - ', newObj.count.value, 'Old -', oldObj.count.value)
    // }, {deep: true})

    // 'immediate' use for call watch once after page load
    // watch(var4, (newObj, oldObj) => {
    //     // console.log('New - ', newObj, 'Old -', oldObj)
    //     console.log('New - ', newObj.count.value, 'Old -', oldObj.count.value)
    // }, {immediate: true})

    const sumFunc = (x,y) => {
        return parseInt(var1.value) + parseInt(var2.value);
    }

    // flush post used to watch call after dom updation
    // otherwise in watcheffect get older value of variable
    watchEffect(() => {
        console.log('watchEffect called');
        console.log(var1.value)
    }, { flush: 'post' })

    // same as above
    watchPostEffect(() => {
        console.log('watchEffect called');
        console.log(var1.value)
    })

    // stop watcher at some point
    // const unwatch = '';
    // setTimeout(() => {
    //     unwatch = watchPostEffect(()=>{});
    // }, 5000);
    // unwatch();
</script>