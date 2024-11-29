<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <form @submit.prevent="addSach" class="p-4 bg-light border rounded shadow-sm">
    <div class="mb-3">
      <label for="tenSach" class="form-label">Tên</label>
      <input
        type="text"
        id="tenSach"
        class="form-control"
        placeholder="Nhập tên"
        v-model="newNhanVien.ten"
        required
      />
    </div>

    <div class="mb-3">
      <label for="loaiSach" class="form-label">Giới Tính</label>
      <select
        id="loaiSach"
        class="form-select"
        v-model="newNhanVien.gioiTinh"
        required
      >
        <option value="" disabled>Chọn Giới Tính</option>
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="tacGia" class="form-label">Tuổi</label>
      <input
        type="number"
        id="tacGia"
        class="form-control"
        placeholder="Nhập Tuổi"
        v-model.number="newNhanVien.tuoi"
        required
      />
    </div>

    <button type="submit" class="btn btn-primary w-100">
      {{ isEditing ? "Cập Nhật" : "Thêm" }}
    </button>
  </form>

  <section class="container mt-4">
    <h1 class="text-center text-success mb-4">Quản Lý Nhân Viên</h1>
    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover">
        <thead class="table-success">
          <tr>
            <th class="text-center">STT</th>
            <th>ID</th>
            <th>TÊN</th>
            <th>GIỚI TÍNH</th>
            <th>TUỔI</th>
            <th>HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(s, index) in NhanVien" :key="s.id">
            <tr>
              <td class="text-center">{{ index + 1 }}</td>
              <td>{{ s.id }}</td>
              <td>{{ s.ten }}</td>
              <td>{{ s.gioiTinh }}</td>
              <td>{{ s.tuoi }}</td>
              <td>
                <button class="btn btn-warning btn-sm" @click="edit(s)">
                  Cập Nhật
                </button>
                <button class="btn btn-danger btn-sm" @click="deleteNV(s.id)">
                  Xóa
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const NhanVien = ref([
      { id: "1", ten: "ten 1", tuoi: 70, gioiTinh: "Nam" },
      { id: "2", ten: "ten 2", tuoi: 91, gioiTinh: "Nữ" },
      { id: "3", ten: "ten 3", tuoi: 39, gioiTinh: "Nam" },
      { id: "4", ten: "ten 4", tuoi: 73, gioiTinh: "Nữ" },
      { id: "5", ten: "ten 5", tuoi: 99, gioiTinh: "Nam" },
    ]);

    const newNhanVien = ref({
      id: "",
      ten: "",
      gioiTinh: "",
      tuoi: null,
    });

    const isEditing = ref(false);

    const addSach = () => {
      if (isEditing.value) {
        const index = NhanVien.value.findIndex(
          (s) => s.id === newNhanVien.value.id
        );
        if (index !== -1) {
          NhanVien.value[index] = { ...newNhanVien.value };
          isEditing.value = false;
        }
      } else {
        newNhanVien.value.id = NhanVien.value.length+1;
        NhanVien.value.push({ ...newNhanVien.value });
      }
      resetForm();
    };

    const deleteNV = (id) => {
      NhanVien.value = NhanVien.value.filter((s) => s.id !== id);
    };

    const edit = (s) => {
      newNhanVien.value = { ...s };
      isEditing.value = true;
    };

    const resetForm = () => {
      newNhanVien.value = { id: "", ten: "", gioiTinh: "", tuoi: null };
    };

    return {
      NhanVien,
      newNhanVien,
      isEditing,
      addSach,
      deleteNV,
      edit,
    };
  },
};
</script>

<style>

form {
  max-width: 500px;
  margin: 0 auto;
}


.table th,
.table td {
  vertical-align: middle;
}


button {
  margin: 0 5px;
}
</style>
