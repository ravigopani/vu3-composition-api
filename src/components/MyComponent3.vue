<template>
    <h3>MyComponent3 - Attribute & Event Binding</h3>
    <div>{{ var1 }}</div>
    <div v-html="var1"></div>
    <div v-bind:id="var2" :shortHand="var2">Dynamic bind Attr</div>
    <div v-bind="var3">Multiple Attrs Binding</div>
    <div :[attrKey]="attrValue">Bind attr key-value both dynamic</div>
    <div v-on:click="func1()" @click="func1()">Click Event</div>
    <div @[eventName]="func1()">Dynamic Event Binding</div>
</template>

<script setup>
    const var1 = '<i>Hello world</>';
    const var2 = 'my-div-id';
    const var3 = {
        id: 'my-div-id',
        class: 'my-div-class',
        another: 'another-thing',
    };

    const attrKey = "dynamicKey";
    const attrValue = "dynamicValue";

    const eventName = 'click';
    function func1(){
        alert('clicked');
    }
</script>