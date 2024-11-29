<template>
    <FormTacGia v-model:t="New" />
   <button type="button" class="btn btn-primary" @click="Add" v-show="!isUpdate">ADD</button>
   <button type="button" class="btn btn-primary" @click="Update" v-show="isUpdate">Update</button>
<table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">TEN</th>
      <th scope="col">GIOI TINH</th>
      <th scope="col">DIA CHI </th>
      <th scope="col">TUOI </th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
    <template v-for="(t,index) in TacGia" :key="t.id">
    <tr>
      <th scope="row">{{ index +1 }}</th>
      <td>{{ t.ten }}</td>
      <td>{{ t.gioiTinh }}</td>
      <td>{{ t.diaChi }}</td>
      <td>{{ t.tuoi }}</td>
      <td>
        <button type="button" class="btn btn-warning" @click="Delete(t.id)">Delete</button>
        <button type="button" class="btn btn-info" @click="detail(t)">Info</button>
      </td>
    </tr>
    </template>
  </tbody>
</table>
</template>
<script setup>
import FormTacGia from '@/component/formTacGia.vue';
import { ref } from 'vue';

const TacGia = ref([
  {
    "id": "1",
    "ten": "ten 1",
    "tuoi": 66,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 1"
  },
  {
    "id": "2",
    "ten": "ten 2",
    "tuoi": 4,
    "gioiTinh": "Nu",
    "diaChi": "diaChi 2"
  },
  {
    "id": "3",
    "ten": "ten 3",
    "tuoi": 46,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 3"
  },
  {
    "id": "4",
    "ten": "ten 4",
    "tuoi": 63,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 4"
  },
  {
    "id": "5",
    "ten": "ten 5",
    "tuoi": 99,
    "gioiTinh": "Nu",
    "diaChi": "diaChi 5"
  },
  {
    "id": "6",
    "ten": "ten 6",
    "tuoi": 52,
    "gioiTinh": "Nu",
    "diaChi": "diaChi 6"
  },
  {
    "id": "7",
    "ten": "ten 7",
    "tuoi": 4,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 7"
  },
  {
    "id": "8",
    "ten": "ten 8",
    "tuoi": 91,
    "gioiTinh": "Nu",
    "diaChi": "diaChi 8"
  },
  {
    "id": "9",
    "ten": "ten 9",
    "tuoi": 90,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 9"
  },
  {
    "id": "10",
    "ten": "ten 10",
    "tuoi": 23,
    "gioiTinh": "Nu",
    "diaChi": "diaChi 10"
  },
  {
    "id": "11",
    "ten": "ten 11",
    "tuoi": 67,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 11"
  },
  {
    "id": "12",
    "ten": "ten 12",
    "tuoi": 28,
    "gioiTinh": "Nu",
    "diaChi": "diaChi 12"
  },
  {
    "id": "13",
    "ten": "ten 13",
    "tuoi": 95,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 13"
  },
  {
    "id": "14",
    "ten": "ten 14",
    "tuoi": 78,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 14"
  },
  {
    "id": "15",
    "ten": "ten 15",
    "tuoi": 67,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 15"
  },
  {
    "id": "16",
    "ten": "ten 16",
    "tuoi": 49,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 16"
  },
  {
    "id": "17",
    "ten": "ten 17",
    "tuoi": 54,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 17"
  },
  {
    "id": "18",
    "ten": "ten 18",
    "tuoi": 45,
    "gioiTinh": "Nu",
    "diaChi": "diaChi 18"
  },
  {
    "id": "19",
    "ten": "ten 19",
    "tuoi": 81,
    "gioiTinh": "Nam",
    "diaChi": "diaChi 19"
  },
  {
    "id": "20",
    "ten": "ten 20",
    "tuoi": 42,
    "gioiTinh": "Nu",
    "diaChi": "diaChi 20"
  },
  {
    "id": "21",
    "ten": "ten 21",
    "tuoi": 63,
    "gioiTinh": "Nu",
    "diaChi": "diaChi 21"
  }
])
const Delete =(id)=>{
    const index = TacGia.value.findIndex((t)=>t.id == id)
    TacGia.value.splice(index,1)
}
const New = ref({
    ten: "",
    tuoi: 0,
    gioiTinh: "",
    diaChi: ""
})
const Add =()=>{
    TacGia.value.push(
        {
            id:TacGia.value.length+1,
            ... New.value,
        }
    )
    resetValue()
}
const resetValue = ()=>{
    New.value = {
         ten: "",
    tuoi: 0,
    gioiTinh: "",
    diaChi: ""
    }
}
const isUpdate = ref(false)
const vitri = ref(-1)
const Update = ()=>{
    TacGia.value[vitri.value] = {... New.value}
    resetValue()
    isUpdate.value = true
    vitri.value = -1
}
const detail = (item)=>{
    New.value = {... item}
    isUpdate.value = true
    vitri.value = TacGia.value.findIndex((t)=>t.id === item.id)
}
</script>