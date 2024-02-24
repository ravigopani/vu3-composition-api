<template>
    <!-- with single root element - it will bind to parent element automatically -->
    <!-- <div class="child-class" style="color: blue;"> -->
        <!-- with nested element - we can bind with '$attrs' property -->
        <h3 @click="childClick" class="child-class" style="color: blue;" v-bind="$attrs">This is MyComponent17_2</h3>
    <!-- </div> -->

    <!-- with multi root element - we need to specify with the '$attrs' property - otherwise it will show warning -->
    <!-- <div v-bind="$attrs">
        Another Root Element
    </div> -->
</template>

<script setup>
import { useAttrs } from 'vue';
    const childClick = () => {
        console.log('Child click called')   
    }

    const attrs = useAttrs()
    console.log(attrs)

    // if 'attrs' change you can catch that event on onupdate hook
</script>