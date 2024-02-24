<template>
    <h3>MyComponent2 - Options & Composition API</h3>
    <div>
        <button @click="decrease()">-</button>
        {{ counter }}
        <button @click="increase()">+</button>
    </div>
</template>

<!-- options API -->
<!-- 
<script>
    export default {
        data() {
            return {
                counter: 0,
            }
        },
        methods: {
            increase(){
                this.counter++
            },
            decrease(){
                this.counter--
            }
        }
    }
</script>
-->

<!-- 1st way -> Composition API -->
<!-- 
<script>
    import { ref } from 'vue'
    export default {
        setup(){
            const counter = ref(0);

            function increase(){
                counter.value++
            }
            function decrease(){
                counter.value--
            }

            return {
                counter,
                increase,
                decrease
            }
        }
    }
</script> 
-->

<!-- 2nd & final way -> Composition API -->
<script setup>
    import { ref } from 'vue'
    const counter = ref(0);

    function increase(){
        counter.value++
    }
    const decrease = () => {
        counter.value--
    }
</script>