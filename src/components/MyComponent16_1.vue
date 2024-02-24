<template>
    <h3>MyComponent16_1</h3>

    <!-- first way -->
    <!-- <input type="text" :value="var1" @input="$emit('updateParent', $event.target.value)" /> -->

    <!-- second way with default value -->
    <!-- <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->

    <!-- third way with mutliple value -->
    <!-- <input type="text" :value="var1" @input="$emit('update:var1', $event.target.value)" /> <br/>
    <input type="text" :value="var2" @input="$emit('update:var2', $event.target.value)" /> <br/> -->

    <!-- Custom modifiers -->
    <!-- <input type="text" :value="modelValue" @input="updateFunc" /> <br/> -->
    
    <!-- third way with mutliple value -->
    <input type="text" :value="var1" @input="updateFunc1" /> <br/>
    <input type="text" :value="var2" @input="updateFunc2" /> <br/>
</template>
<script setup>
    /* first way */
    // const emit = defineEmits(['updateParent'])
    // const props = defineProps({
    //     var1: {
    //         type: String,
    //         required: true,
    //     }
    // })

    // /* second way - with single default */
    // const props = defineProps({
    //     modelValue: {
    //         type: String,
    //         required: true,
    //     }
    // })
    // const emit = defineEmits(['update:modelValue'])

    // /* third way - with multiple default */
    // const props = defineProps({
    //     var1: {
    //         type: String,
    //         required: true,
    //     },
    //     var2: {
    //         type: String,
    //         required: true,
    //     },
    // })
    // const emit = defineEmits(['update:var1', 'update:var2'])

    // /* Custom Modifiers - single value */
    // const props = defineProps({
    //     modelValue: {
    //         type: String,
    //         required: true,
    //     },
    //     modelModifiers: {
    //         default: () => ({})
    //     }
    // })

    // const emit = defineEmits(['update:modelValue'])
    // const updateFunc = (event) => {
    //      let value = event.target.value
    //     //  console.log(props.modelModifiers)
    //     if(props.modelModifiers['custom-modifiers']) {
    //         value = value.split('-').join('_')
    //     }
    //     emit('update:modelValue', value)
    // }

    // /* Custom Modifiers - multiple value */
    const props = defineProps({
        var1: {
            type: String,
            required: true,
        },
        var2: {
            type: String,
            required: true,
        },
        modelModifiers: {
            default: () => ({})
        }
    })

    const emit = defineEmits(['update:var1', 'update:var2'])
    const updateFunc1 = (event) => {
         let value = event.target.value
        //  console.log(props.modelModifiers)
        if(props.modelModifiers['custom-modifiers']) {
            value = value.split('-').join('_')
        }
        emit('update:var1', value)
    }
    const updateFunc2 = (event) => {
         let value = event.target.value
        //  console.log(props.modelModifiers)
        if(props.modelModifiers['custom-modifiers']) {
            value = value.split('-').join('_')
        }
        emit('update:var2', value)
    }
</script>

