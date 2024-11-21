<template>
  <section class="container mt-5">
    <h1 class="text-center mb-4">Đây là Trang Sinh Viên</h1>
    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Tuổi</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(sv, index) in SinhVien" :key="sv.id">
          <tr>
            <td>{{ sv.id }}</td>
            <td>{{ sv.ten }}</td>
            <td>{{ sv.tuoi }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const SinhVien = ref([
  {
    id: "1",
    ten: "ten 1",
    tuoi: 19
  },
  {
    id: "2",
    ten: "ten 2",
    tuoi: 46
  },
  {
    id: "3",
    ten: "ten 3",
    tuoi: 24
  },
  {
    id: "4",
    ten: "ten 4",
    tuoi: 29
  },
  {
    id: "5",
    ten: "ten 5",
    tuoi: 93
  },
  {
    id: "6",
    ten: "ten 6",
    tuoi: 1
  },
  {
    id: "7",
    ten: "ten 7",
    tuoi: 90
  },
  {
    id: "8",
    ten: "ten 8",
    tuoi: 92
  },
  {
    id: "9",
    ten: "ten 9",
    tuoi: 36
  },
  {
    id: "10",
    ten: "ten 10",
    tuoi: 37
  },
  {
    id: "11",
    ten: "ten 11",
    tuoi: 63
  },
  {
    id: "12",
    ten: "ten 12",
    tuoi: 19
  },
  {
    id: "13",
    ten: "ten 13",
    tuoi: 65
  },
  {
    id: "14",
    ten: "ten 14",
    tuoi: 2
  },
  {
    id: "15",
    ten: "ten 15",
    tuoi: 33
  },
  {
    id: "16",
    ten: "ten 16",
    tuoi: 5
  },
  {
    id: "17",
    ten: "ten 17",
    tuoi: 53
  },
  {
    id: "18",
    ten: "ten 18",
    tuoi: 63
  },
  {
    id: "19",
    ten: "ten 19",
    tuoi: 78
  },
  {
    id: "20",
    ten: "ten 20",
    tuoi: 1
  },
  {
    id: "21",
    ten: "ten 21",
    tuoi: 21
  }
]);
</script>

<style>
h1 {
  color: #495057;
  font-weight: bold;
}
</style>
