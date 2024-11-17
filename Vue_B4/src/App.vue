<script setup>
import { ref } from 'vue';
import ButtonComponent from './component/ButtonComponent.vue';
import GlobalComponent from './component/GlobalComponent.vue';

const NhanVien = ref([
  {
    maNV: 'PH55452',
    tenNV: 'Ngo Van Hiep',
    tuoiNV: 30,
    gioiTinh: 'Nam',
    sonamLamViec: 4
  },
  {
    maNV: 'PH55453',
    tenNV: 'Ngo Van Hiep',
    tuoiNV: 20,
    gioiTinh: 'Nam',
    sonamLamViec: 0
  },
  {
    maNV: 'PH55454',
    tenNV: 'Ngo Van Hiep',
    tuoiNV: 37,
    gioiTinh: 'Nam',
    sonamLamViec: 4
  },
  {
    maNV: 'PH55455',
    tenNV: 'Ngo Van Hiep',
    tuoiNV: 30,
    gioiTinh: 'Nam',
    sonamLamViec: 5
  },
  {
    maNV: 'PH55452',
    tenNV: 'Ngo Van Hiep',
    tuoiNV: 39,
    gioiTinh: 'Nam',
    sonamLamViec: 4
  },
  {
    maNV: 'PH55452',
    tenNV: 'Ngo Van Hiep',
    tuoiNV: 43,
    gioiTinh: 'Nam',
    sonamLamViec: 2
  },
  {
    maNV: 'PH55452',
    tenNV: 'Ngo Van Hiep',
    tuoiNV: 24,
    gioiTinh: 'Nam',
    sonamLamViec: 4
  },
  {
    maNV: 'PH55456',
    tenNV: 'Ngo Van Hiep',
    tuoiNV: 33,
    gioiTinh: 'Nam',
    sonamLamViec: 4
  }
]);
const number = ref(3)
</script>

<template>
  <div>
    <div class="container mt-5">
    <h1 class="text-center mb-4">Component trong VueJs!</h1>

    <!-- First Table -->
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>STT</th>
          <th>MA</th>
          <th>TEN</th>
          <th>TUOI</th>
          <th>GIOI TINH</th>
          <th>SO NAM LAM VIEC</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(n, index) in NhanVien" :key="n.maNV">
          <td>{{ index + 1 }}</td>
          <td>{{ n.maNV }}</td>
          <td>{{ n.tenNV }}</td>
          <td>{{ n.tuoiNV }}</td>
          <td>{{ n.gioiTinh }}</td>
          <td>{{ n.sonamLamViec }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Second Table -->
    <h2 class="mt-5">Những Nhân Viên Trên 30 Tuổi</h2>
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>STT</th>
          <th>MA</th>
          <th>TEN</th>
          <th>TUOI</th>
          <th>GIOI TINH</th>
          <th>SO NAM LAM VIEC</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(nv, index) in NhanVien.filter(items => items.tuoiNV >= 30)" :key="nv.maNV">
          <td>{{ index + 1 }}</td>
          <td>{{ nv.maNV }}</td>
          <td>{{ nv.tenNV }}</td>
          <td>{{ nv.tuoiNV }}</td>
          <td>{{ nv.gioiTinh }}</td>
          <td>{{ nv.sonamLamViec }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
<div>
  <h1>Component trong VueJs</h1>
  <!-- Component Cuc bo : Chi trong file dung -->
 <!-- <ButtonComponent/>
 <button-component/> -->
 <p>Cha : {{ number }}</p>
 <ButtonComponent :countValue ="number"/>
<!-- Component Toan cuc : moi noi deu goi duoc  -->
 <h1>Cha: <ComponentA/></h1>
<!-- <GlobalComponent/> -->
</div>
</template>

<style scoped>
/* Add any custom styles here if needed */
</style>
