<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <form @submit.prevent="addSach" class="p-4 bg-light border rounded shadow-sm">
    <div class="mb-3">
      <label for="tenSach" class="form-label">Tên</label>
      <input type="text" id="tenSach" class="form-control" placeholder="Nhập tên" v-model="newSach.ten" required>
    </div>

    <div class="mb-3">
      <label for="loaiSach" class="form-label">Loại</label>
      <select id="loaiSach" class="form-select" v-model="newSach.loai" required>
        <option value="" disabled>Chọn loại</option>
        <option value="Sách Văn Học">Sách Văn Học</option>
        <option value="Truyện Tranh">Truyện Tranh</option>
        <option value="Văn Học Nước Ngoài">Văn Học Nước Ngoài</option>
        <option value="Manga - commic">Manga - commic</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="tacGia" class="form-label">Tác Giả</label>
      <input type="text" id="tacGia" class="form-control" placeholder="Nhập Tác Giả" v-model="newSach.tacGia" required>
    </div>

    <div class="mb-3">
      <label for="giaSach" class="form-label">Giá</label>
      <input type="number" id="giaSach" class="form-control" placeholder="Nhập Giá" v-model.number="newSach.gia" required>
    </div>

    <button type="submit" class="btn btn-primary w-100">{{ isEditing ? "Cập Nhật" : "Thêm" }}</button>
  </form>

  <section class="container mt-4">
    <h1 class="text-center text-success mb-4">Quản Lý Sách</h1>
    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover">
        <thead class="table-success">
          <tr>
            <th class="text-center">STT</th>
            <th>ID</th>
            <th>TEN</th>
            <th>LOAI</th>
            <th>TAC GIA</th>
            <th>GIA</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(s, index) in Sach" :key="s.id">
            <tr>
              <td class="text-center">{{ index + 1 }}</td>
              <td>{{ s.id }}</td>
              <td>{{ s.ten }}</td>
              <td>{{ s.loai }}</td>
              <td>{{ s.tacGia }}</td>
              <td>{{ s.gia }}</td>
              <td>
                <button class="btn btn-warning btn-sm" @click="editSach(s)">Update</button>
                <button class="btn btn-danger btn-sm" @click="deleteSach(s.id)">Xóa</button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const Sach = ref([
  {
    "id": "1",
    "ten": "ten 1",
    "loai": "loai 1",
    "tacGia": "tacGia 1",
    "gia": 71
  },
  {
    "id": "2",
    "ten": "ten 2",
    "loai": "loai 2",
    "tacGia": "tacGia 2",
    "gia": 40
  },
  {
    "id": "3",
    "ten": "ten 3",
    "loai": "loai 3",
    "tacGia": "tacGia 3",
    "gia": 88
  },
  {
    "id": "4",
    "ten": "ten 4",
    "loai": "loai 4",
    "tacGia": "tacGia 4",
    "gia": 67
  },
  {
    "id": "5",
    "ten": "ten 5",
    "loai": "loai 5",
    "tacGia": "tacGia 5",
    "gia": 22
  },
  {
    "id": "6",
    "ten": "ten 6",
    "loai": "loai 6",
    "tacGia": "tacGia 6",
    "gia": 13
  },
  {
    "id": "7",
    "ten": "ten 7",
    "loai": "loai 7",
    "tacGia": "tacGia 7",
    "gia": 59
  },
  {
    "id": "8",
    "ten": "ten 8",
    "loai": "loai 8",
    "tacGia": "tacGia 8",
    "gia": 48
  },
  {
    "id": "9",
    "ten": "ten 9",
    "loai": "loai 9",
    "tacGia": "tacGia 9",
    "gia": 76
  },
  {
    "id": "10",
    "ten": "ten 10",
    "loai": "loai 10",
    "tacGia": "tacGia 10",
    "gia": 86
  },
  {
    "id": "11",
    "ten": "ten 11",
    "loai": "loai 11",
    "tacGia": "tacGia 11",
    "gia": 16
  },
  {
    "id": "12",
    "ten": "ten 12",
    "loai": "loai 12",
    "tacGia": "tacGia 12",
    "gia": 51
  },
  {
    "id": "13",
    "ten": "ten 13",
    "loai": "loai 13",
    "tacGia": "tacGia 13",
    "gia": 67
  },
  {
    "id": "14",
    "ten": "ten 14",
    "loai": "loai 14",
    "tacGia": "tacGia 14",
    "gia": 50
  },
  {
    "id": "15",
    "ten": "ten 15",
    "loai": "loai 15",
    "tacGia": "tacGia 15",
    "gia": 100
  },
  
]);

const newSach = ref({
  id: "",
  ten: "",
  loai: "",
  tacGia: "",
  gia: null,
});


const isEditing = ref(false);

const addSach = () => {
  if (isEditing.value) {
    const index = Sach.value.findIndex((s) => s.id === newSach.value.id);
    if (index !== -1) {
      Sach.value[index] = { ...newSach.value };
      isEditing.value = false;
    }
  } else {
    newSach.value.id = Sach.value.length+1;
    Sach.value.push({ ...newSach.value });
  }
  newSach.value = { id: "", ten: "", loai: "", tacGia: "", gia: null };
};

const deleteSach = (id) => {
  Sach.value = Sach.value.filter((s) => s.id !== id);
};

const editSach = (s) => {
  newSach.value = { ...s };
  isEditing.value = true;
};
</script>

<style>

</style>
