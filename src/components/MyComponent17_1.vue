<template>
    <!-- If we call child element as root element then it will forward attribute in child element
     -->
     <!-- Try with - com-uncom below div -->

    <!-- <div> -->
        <MyComponent17_2 @click="middleClick" />
    <!-- </div> -->
</template>

<!-- This will stop passing attribute to child with false value -->
<script>
export default {
    // inheritAttrs: false
};
</script>

<script setup>
    import MyComponent17_2 from './MyComponent17_2.vue';

    const middleClick = () => {
        console.log('Middle click called')   
    }
</script>