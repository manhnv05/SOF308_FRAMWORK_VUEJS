<script setup>
const email = defineModel('e1')
const username = defineModel('u1')
const SetValue = ()=>{
    email.value = 'ndjshhgdf'
    username.value = 'hahgdgbbd'
}
</script>
<template>
    <h1>V-Model</h1>
    Email: <input v-model="email"/><br/>
    Username: <input v-model="username"/><br/>
    <p>Gia tri cua component con:</p>
    <p>Con: {{ email }} - {{ username }}</p>
    <button @click="SetValue()">Set value</button>
</template>