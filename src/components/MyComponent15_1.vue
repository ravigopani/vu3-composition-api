<template>
    <h3>MyComponent15_1</h3>
    var1 - {{ var1 }} <br/>
    var2 - {{ var2 }} <br/>
    var3 - {{ var3 }} <br/>
    <button @click="changeParentVarFromChild()">Update Parent Vars</button> <br/>
    {{ cvar1 }} <br/>
    <button @click="testFunc(10)">Test Func</button> <br/>
    <button @click.prevent="$emit('childFunc',10)">child func with $emit</button> <br/>
    <button @click.prevent="emits('childFunc',10)">child func with emits</button> <br/>
    <button @click.prevent="callEmitByFunc()">callEmitByFunc</button> <br/>
</template>

<script setup>
    import { ref } from 'vue';
    import MyClass from './MyClass';
    // defineProps(['var1', 'var2', 'var3'])

    // const props = defineProps({
    //     var1: [String, Number],
    //     var2: String,
    //     var3: Object,
    // })

    const props = defineProps({
        var1: {
            type: [String, Number],
            required: true,
            default: 'this is default value',
        },
        var2: {
            type: String,
            required: true,
            default: 'success',
            validator(value){
                return ['success', 'error', 'danger'].includes(value)
            }
        },
        var3: {
            type: Object,
            default(rowProps) {
                return {key1: 'default value', key2: 'default value'}
            }
        },
        testFunc: {
            type: Function,
            default() {
                return 'default return'
            }
        },
        myclass: {
            type: MyClass
        }
    })

    

    const cvar1 = ref(props.var1)
    const changeParentVarFromChild = () => {
        // props.var1++ // it will give error
        cvar1.value++
        
    }

    // const emits = defineEmits(["childFunc"])

    // add validation
    const emits = defineEmits({
        childFunc(val){
            if(val && typeof val === 'number'){
                return true
            }
            return false
        }
    })
    const callEmitByFunc = () => {
        emits('childFunc', 12)
    }
</script>