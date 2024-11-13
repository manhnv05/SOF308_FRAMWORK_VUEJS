<script setup>
import { reactive, ref } from 'vue';

const dsSp = ref([
    "Laptop",
    "Dien Thoai",
    "Tai Nghe",
    "May Tinh Bang"
])
const SanPham = ref(
    {
        name:"Laptop",
        price: 500,
        des:"window"
    }
)
const NhanVien = ref([
    {
        name:"Nguyen Van A",
        position:"Ke Toan"
    },
    {
        name:"Nguyen Van B",
        position:"Nhan Vien"
    },
    {
        name:"Nguyen Van C",
        position:"Thu Ky"
    },
    {
        name:"Nguyen Van D",
        position:"Quan Ly"
    }
])
const Xoa =(index)=>{
    NhanVien.value.splice(index,1)
}
const number = ref(0)
const Tang=()=>{
    number.value++
}
const Giam=()=>{
    number.value--
}
const User = reactive({
    name:"Nguyen Van A",
    age: 20
})
const ChangesUser=()=>{
    User.name = "Nguyen Van B",
    User.age = 100
}
const tasks = reactive([
    "Di cho",
    "Lam bt",
    "Don nha"
])
</script>
<template>
<h1>BTVN</h1>
---------------------------
<h5>B1:</h5>
<ul>
    <li v-for="(sp, index) in dsSp" :key="index">
        {{ sp }}
    </li>
</ul>
---------------------------
<h5>B2:</h5>
<ul>
    <li v-for="(value ,key) in SanPham" :key="key">
        {{ key }} : {{ value }}
    </li>
</ul>
---------------------------
<h5>B3:</h5>
<div v-for="(nv,index) in NhanVien" :key="nv.name">
{{ nv.name }} {{ nv.position }} <button @click="Xoa">Xoa</button>
</div>
---------------------------
<h5>B4:</h5>
<p>{{ number }}</p>
<button @click="Tang">+</button>
<button @click="Giam">-</button><br>
---------------------------
<h5>B5:</h5>
<div>
    {{ User.name }} {{ User.age }}
</div>
<button @click="ChangesUser" >Thay doi</button><br>
---------------------------
<h5>B6:</h5>
<div v-for="(t,index) in tasks" :key="index">
    {{ t }}
</div>
</template>
<style>
</style>