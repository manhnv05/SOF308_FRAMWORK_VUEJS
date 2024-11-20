<script setup>
defineModel(
    'mt',{
       default: ()=>({
        name:'' ,
        price: 0,
        descption: ''
       })
    }
)
</script>
<template>
    <form action="">
        <input type="text" placeholder="Nhap ten" v-model="mt.name"><br>
        <input type="number" placeholder="Nhap gia" v-model="mt.price"><br>
        <input type="text" placeholder="Nhap mieu ta" v-model="mt.descption"><br>
    </form>
</template>