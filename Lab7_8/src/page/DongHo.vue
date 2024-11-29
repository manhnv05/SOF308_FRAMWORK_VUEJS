<template>
    <h1 style="text-align: center;">Quan Ly Dong Ho</h1>
    <FormDH v-model:d="New"/>
    <button type="button" class="btn btn-danger" @click="ADD" v-show="!isUpdate"><a @click="cf">ADD</a></button>
    <button type="button" class="btn btn-info" @click="Update" v-show="isUpdate"><a @click="cf">Update</a></button>
<table class="table">
  <thead>
    <tr>
      <th scope="col">STT</th>
      <!-- <th scope="col">ID</th> -->
      <th scope="col">TEN</th>
      <th scope="col">LOAI</th>
      <th scope="col">GIA</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
    <template v-for="(d,index) in DongHo" :key="d.id">
    <tr>
         <th scope="row">{{ index +1 }}</th>
      <!-- <td>{{d.id}}</td> -->
      <td>{{d.ten}}</td>
      <td>{{ d.loai }}</td>
      <td>{{ d.gia }}</td>
      <td>
        <button type="button" class="btn btn-primary" @click="Detail(d)"><a @click="cf">DETAIL</a></button>
        <button type="button" class="btn btn-success" @click="DELETE(d.id)"><a @click="cf">DELETE</a></button>
      </td>
    </tr>
    </template>
  </tbody>
</table>
</template>
<script setup>
import FormDH from '@/component/formDH.vue';
import { ref } from 'vue';

const DongHo = ref([
  {
    "id": "1",
    "ten": "ten 1",
    "loai": "loai 1",
    "gia": 86
  },
  {
    "id": "2",
    "ten": "ten 2",
    "loai": "loai 2",
    "gia": 50
  },
  {
    "id": "3",
    "ten": "ten 3",
    "loai": "loai 3",
    "gia": 12
  },
  {
    "id": "4",
    "ten": "ten 4",
    "loai": "loai 4",
    "gia": 25
  },
  {
    "id": "5",
    "ten": "ten 5",
    "loai": "loai 5",
    "gia": 33
  },
  {
    "id": "6",
    "ten": "ten 6",
    "loai": "loai 6",
    "gia": 41
  },
  {
    "id": "7",
    "ten": "ten 7",
    "loai": "loai 7",
    "gia": 57
  },
  {
    "id": "8",
    "ten": "ten 8",
    "loai": "loai 8",
    "gia": 87
  },
  {
    "id": "9",
    "ten": "ten 9",
    "loai": "loai 9",
    "gia": 8
  },
  {
    "id": "10",
    "ten": "ten 10",
    "loai": "loai 10",
    "gia": 42
  },
  {
    "id": "11",
    "ten": "ten 11",
    "loai": "loai 11",
    "gia": 35
  },
  {
    "id": "12",
    "ten": "ten 12",
    "loai": "loai 12",
    "gia": 37
  },
  {
    "id": "13",
    "ten": "ten 13",
    "loai": "loai 13",
    "gia": 61
  },
  {
    "id": "14",
    "ten": "ten 14",
    "loai": "loai 14",
    "gia": 57
  },
  {
    "id": "15",
    "ten": "ten 15",
    "loai": "loai 15",
    "gia": 57
  },
  {
    "id": "16",
    "ten": "ten 16",
    "loai": "loai 16",
    "gia": 69
  },
  {
    "id": "17",
    "ten": "ten 17",
    "loai": "loai 17",
    "gia": 87
  },
  {
    "id": "18",
    "ten": "ten 18",
    "loai": "loai 18",
    "gia": 40
  },
  {
    "id": "19",
    "ten": "ten 19",
    "loai": "loai 19",
    "gia": 50
  },
  {
    "id": "20",
    "ten": "ten 20",
    "loai": "loai 20",
    "gia": 22
  },
  {
    "id": "21",
    "ten": "ten 21",
    "loai": "loai 21",
    "gia": 64
  }
])
const DELETE = (id)=>{
    const index = DongHo.value.findIndex((d)=>d.id == id)
    DongHo.value.splice(index,1)
}
const New = ref(
    {
        id: "",
    ten: "",
    loai: "",
    gia: 0
    }
)
const ADD = ()=>{
    DongHo.value.push(
        {
        id:DongHo.value.length +1,
        ...New.value,
    }
)
    resetValue()
}
const resetValue = ()=>{
    New.value = {
        id: "",
    ten: "",
    loai: "",
    gia: 0
    }
}
const isUpdate = ref(false)
const vitri = ref(-1)
const Update = ()=>{
    DongHo.value[vitri.value]={... New.value}
    resetValue()
    isUpdate.value = !isUpdate.value
    vitri.value = -1
}
const Detail = (item)=>{
    New.value={...item}
    isUpdate.value= true
    vitri.value = DongHo.value.findIndex((d)=>d.id === item.id)
}
const cf = ()=>{
    alert("Chac Chan chua!")
}
</script>