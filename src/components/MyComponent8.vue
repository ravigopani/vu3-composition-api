<template>
    <h3>MyComponent8 - v-if directive</h3>
    <div>
        <span v-if="var1">div v-if</span>
        <span v-else-if="var2">div v-if-else first</span>
        <span v-else-if="var3">div v-if-else second</span>
        <span v-else>div v-else</span>
    </div>
    <div>
        <span v-show="var2">div v-show</span>
    </div>

    <template v-if="var3">
        <div class="row">
            <div class="col-md-12">
                <!-- Block of HTML code -->
            </div>
        </div>
    </template>
    <template v-else>
        <div class="row">
            <div class="col-md-12">
                <!-- Block of HTML code -->
            </div>
        </div>
    </template>
</template>

<script setup>
import { ref } from "vue";
const var1 = ref(true);
const var2 = ref(false);
const var3 = ref(true);
</script>