<script setup>
import { reactive, ref } from 'vue';

// let number = 0;
const number = ref(0)
// let number = reactive({count:0})  => number.count++ => {{number.count}}
const clickButton = ()=>{
  // number++
  number.value++
  console.log(number.value)
}
const sv = ref({
  id: "PH55452",
  name: "Ngo Van Hiep",
  tuoi: 22,
  diaChi: "Hanoi"
})
const string = ref(['a','v','d','e','c'])
const nv = reactive({
  ma:"PH55452",
  ten: "Ngo Van Hiep",
  tuoi:200
})
const SinhVien = ref([{
  id: "PH55452",
  name: "Ngo Van Hiep",
  tuoi: 22,
  diaChi: "Hanoi"
},{
   id:"PH55452",
  name: "Ngo Van Hiep",
  tuoi:200,
  diaChi:"Hanoi"
}])
</script>

<template>
  <!--  -->
  <h1>B6_ Ref & Reactiver & for</h1>
  <p>{{ number }}</p>
  <button @click="clickButton">Click here</button>
  <p>ID:{{ sv.id }}</p>
  <p>Name:{{ sv.name }}</p>
  <p>Tuoi:{{ sv.tuoi }}</p>
  <p>Dia Chi:{{ sv.diaChi }}</p>
  <strong>{{ string[0] }}</strong>
  <p>ID:{{ nv.ma }}</p>
  <p>Name:{{ nv.ten }}</p>
  <p>Tuoi:{{ nv.tuoi }}</p>
  <strong>{{ SinhVien[1].ma }} {{ SinhVien[1].ten }} {{ SinhVien[1].tuoi }}</strong><br>
  <strong>{{ SinhVien[0].id }} {{ SinhVien[0].name }} {{ SinhVien[0].tuoi }} {{ SinhVien[0].diaChi }}</strong>
  <p>V-for trong vueJs</p>
  <!-- Cu Phap 
   v-for = (value,key,index) in danh sach mang : key = ..."truyen key"
    -->
    <ul>
      <li v-for="sv in SinhVien" :key="sv.id">
        {{ sv.name }} - {{ sv.diaChi }}
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Ten</th>
          <th>Tuoi</th>
          <th>Dia Chi</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(sv,index) in SinhVien" :key="sv.id">
          <tr>
            <td>{{ index }}</td>
            <td>{{ sv.id }}</td>
             <td>{{ sv.name }}</td> 
             <td>{{ sv.tuoi }}</td> 
             <td>{{ sv.diaChi }}</td>
          </tr>
        </template>
      </tbody>
    </table>
</template>

<style scoped>

</style>
