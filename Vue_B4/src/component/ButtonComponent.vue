<script setup>
// lay gia tri tu cha
// const propValue = defineProps(['countValue'])
const test = defineProps({
    countValue:Number,
})
//  event defindEmits

const event = defineEmits('increNumber')
const callFunction = ()=>{
    event('increNumber')
}
</script>
<template>
    <h1>Component Con</h1>
    <!-- <p>{{ propValue.countValue }}</p> -->
    <p>{{ test.countValue }}</p>
    <h1><ComponentA/></h1>
    <button @click="callFunction">Tang 1</button>
</template>