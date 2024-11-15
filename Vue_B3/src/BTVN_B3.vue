<script setup>
import { reactive, ref } from 'vue';

const IsAdmin = ref(true)
const changes = ()=>{
    IsAdmin.value =! IsAdmin.value
}
const so = ref([
    1,2,3,4,5,6,7,8,9,10
])
const num = ref(0)
const bangCuuchuong = ()=>{

}
const hs = ref([
    {
        name: "Nguyen Van A",
        score: 10
    },
    {
        name: "Nguyen Van B",
        score: 1
    },
    {
        name: "Nguyen Van C",
        score: 0
    },
    {
        name: "Nguyen Van D",
        score: 7
    },
    {
        name: "Nguyen Van E",
        score: 5
    },
    {
        name: "Nguyen Van H",
        score: 9
    }
])
const Input = ref('')
const User = reactive({
    name:"Nguyen Van A",
    age: 20
})
const tenU = ref('')
const tuoiU = ref(0)
const capNhat = ()=>{
    User.name = tenU
    User.age = tuoiU
}
const count = ref(0)

const tang = ()=>{
    count.value++
}
const giam = ()=>{
    count.value--
}
const reset = ()=>{
    count.value = 0
}
const tasks = reactive([
          { id: 1, name: "Nhiệm vụ 1", visible: true },
          { id: 2, name: "Nhiệm vụ 2", visible: true },
          { id: 3, name: "Nhiệm vụ 3", visible: true },
        ]);
const hideTask = (taskId) => {
          const task = tasks.find(task => task.id === taskId);
          if (task) {
            task.visible = false;
          }
        }
const No1 = ref('')
const No2 = ref('')
const Tastmoi = ref('')
const tastMoi = ()=>{
  Tastmoi.value = No1.value +' '+ No2.value
}
</script>
<template>
<h1>BTVN_B3</h1>
-----------------------------------
<h5>B1:</h5>
<p>{{ IsAdmin ? "Xin chào, Admin" :"Xin chào, người dùng" }}</p>
<button @click="changes">Chuyen</button><br>
-----------------------------------
<h5>B2:</h5>
Nhap bang cua chuong so:<input type="text" v-model="num">
<p v-for="s in so" :key="s">
{{ s*num }}
</p>
-----------------------------------
<H5>Bai3:</H5>
<ul>
    <li v-for="(h,index) in hs" :key="index">
        {{ h.name }}  -   Diem {{ h.score }} - KQ  <strong>{{ h.score <5 ? "Khong Dat" :"Dat" }}</strong>
    </li>
</ul>
-----------------------------------
<h5>Bai4:</h5>
<p>{{ Input }}</p>
<input type="text" v-model="Input"><br>
-----------------------------------
<h5>Bai5:</h5>
<p>{{ User.name }} - {{ User.age }}</p>
<input type="text" v-model="tenU">
<input type="number" v-model="tuoiU">
<button @click="capNhat">Submit</button>
-----------------------------------
<h5>Bai6:</h5>
<p>{{ count }}</p>
<button @click="tang">Tang</button>
<button @click="giam">Giam</button>
<button @click="reset">Reset</button><br>
-----------------------------------
<h5>Bai7:</h5>
<ul>
      <li v-for="task in tasks" :key="task.id" v-show="task.visible">
        {{ task.name }}
        <button @click="hideTask(task.id)">Xóa</button>
      </li>
    </ul>

-----------------------------------
<h5>Bai8:</h5>
<ul>
      <li v-for="task in tasks" :key="task.id">
      {{ task.id }}  {{ task.name }}
      </li>
       <li><p>{{ Tastmoi }}</p></li>
    </ul>
<input type="text" v-model="No1"><br>
<input type="text" v-model="No2"><br>
     <!-- <p>{{ Tastmoi }}</p> -->
     <input type="button" value="Them" @click="tastMoi"><br>
-----------------------------------

</template>

<style scoped>

</style>