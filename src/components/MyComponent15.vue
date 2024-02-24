<template>
    <h3>MyComponent15</h3>
    var1 - {{ var1 }} <br/>
    var2 - {{ var2 }} <br/>
    var3 - {{ var3 }} <br/>
    testVar - {{ testVar }} <br/>
    testVar1 - {{ testVar1 }} <br/>
    <button @click="changeParentVar()">Update Parent Vars</button> <br/>

    <MyComponent15_1 
        ref="MyCmpRef" 
        :var1="var1" 
        :var2="var2" 
        :var3="var3" 
        :testFunc="testFunc" 
        :myclass="myclass" 
        @childFunc="parentFunc"
    /> <br/>
</template>

<script setup>
    import MyComponent15_1 from "./MyComponent15_1.vue";
    import { ref, onMounted, watchEffect } from "vue";
    import MyClass from "./MyClass";
    
    const MyCmpRef = ref(null)
    const var1 = ref(123)
    const var2 = ref('success')
    const var3 = ref({
        key1: 123,
        key2: 123,
    })
    const testVar = ref(2)
    const testVar1 = ref(5)

    const myclass = new MyClass('test name', 20)

   const changeParentVar = () => {
        var1.value++
        var2.value+=Math.floor((Math.random() * 100) + 1)
   }

   const testFunc = (val) => {
        return testVar.value = testVar.value + val
   }

   const parentFunc = (val) => {
        testVar1.value = testVar1.value+val
        return 'parent Func called' + val;
   }
</script>