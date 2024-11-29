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
  {
    "id": "16",
    "ten": "ten 16",
    "loai": "loai 16",
    "tacGia": "tacGia 16",
    "gia": 36
  },
  {
    "id": "17",
    "ten": "ten 17",
    "loai": "loai 17",
    "tacGia": "tacGia 17",
    "gia": 31
  },
  {
    "id": "18",
    "ten": "ten 18",
    "loai": "loai 18",
    "tacGia": "tacGia 18",
    "gia": 61
  },
  {
    "id": "19",
    "ten": "ten 19",
    "loai": "loai 19",
    "tacGia": "tacGia 19",
    "gia": 9
  },
  {
    "id": "20",
    "ten": "ten 20",
    "loai": "loai 20",
    "tacGia": "tacGia 20",
    "gia": 67
  },
  {
    "id": "21",
    "ten": "ten 21",
    "loai": "loai 21",
    "tacGia": "tacGia 21",
    "gia": 70
  },
  {
    "id": "22",
    "ten": "ten 22",
    "loai": "loai 22",
    "tacGia": "tacGia 22",
    "gia": 21
  },
  {
    "id": "23",
    "ten": "ten 23",
    "loai": "loai 23",
    "tacGia": "tacGia 23",
    "gia": 85
  },
  {
    "id": "24",
    "ten": "ten 24",
    "loai": "loai 24",
    "tacGia": "tacGia 24",
    "gia": 39
  },
  {
    "id": "25",
    "ten": "ten 25",
    "loai": "loai 25",
    "tacGia": "tacGia 25",
    "gia": 41
  },
  {
    "id": "26",
    "ten": "ten 26",
    "loai": "loai 26",
    "tacGia": "tacGia 26",
    "gia": 5
  },
  {
    "id": "27",
    "ten": "ten 27",
    "loai": "loai 27",
    "tacGia": "tacGia 27",
    "gia": 59
  },
  {
    "id": "28",
    "ten": "ten 28",
    "loai": "loai 28",
    "tacGia": "tacGia 28",
    "gia": 46
  },
  {
    "id": "29",
    "ten": "ten 29",
    "loai": "loai 29",
    "tacGia": "tacGia 29",
    "gia": 10
  },
  {
    "id": "30",
    "ten": "ten 30",
    "loai": "loai 30",
    "tacGia": "tacGia 30",
    "gia": 73
  },
  {
    "id": "31",
    "ten": "ten 31",
    "loai": "loai 31",
    "tacGia": "tacGia 31",
    "gia": 59
  },
  {
    "id": "32",
    "ten": "ten 32",
    "loai": "loai 32",
    "tacGia": "tacGia 32",
    "gia": 62
  },
  {
    "id": "33",
    "ten": "ten 33",
    "loai": "loai 33",
    "tacGia": "tacGia 33",
    "gia": 88
  },
  {
    "id": "34",
    "ten": "ten 34",
    "loai": "loai 34",
    "tacGia": "tacGia 34",
    "gia": 93
  },
  {
    "id": "35",
    "ten": "ten 35",
    "loai": "loai 35",
    "tacGia": "tacGia 35",
    "gia": 8
  },
  {
    "id": "36",
    "ten": "ten 36",
    "loai": "loai 36",
    "tacGia": "tacGia 36",
    "gia": 63
  },
  {
    "id": "37",
    "ten": "ten 37",
    "loai": "loai 37",
    "tacGia": "tacGia 37",
    "gia": 69
  },
  {
    "id": "38",
    "ten": "ten 38",
    "loai": "loai 38",
    "tacGia": "tacGia 38",
    "gia": 53
  },
  {
    "id": "39",
    "ten": "ten 39",
    "loai": "loai 39",
    "tacGia": "tacGia 39",
    "gia": 51
  },
  {
    "id": "40",
    "ten": "ten 40",
    "loai": "loai 40",
    "tacGia": "tacGia 40",
    "gia": 46
  },
  {
    "id": "41",
    "ten": "ten 41",
    "loai": "loai 41",
    "tacGia": "tacGia 41",
    "gia": 75
  },
  {
    "id": "42",
    "ten": "ten 42",
    "loai": "loai 42",
    "tacGia": "tacGia 42",
    "gia": 93
  },
  {
    "id": "43",
    "ten": "ten 43",
    "loai": "loai 43",
    "tacGia": "tacGia 43",
    "gia": 78
  },
  {
    "id": "44",
    "ten": "ten 44",
    "loai": "loai 44",
    "tacGia": "tacGia 44",
    "gia": 21
  },
  {
    "id": "45",
    "ten": "ten 45",
    "loai": "loai 45",
    "tacGia": "tacGia 45",
    "gia": 38
  },
  {
    "id": "46",
    "ten": "ten 46",
    "loai": "loai 46",
    "tacGia": "tacGia 46",
    "gia": 98
  },
  {
    "id": "47",
    "ten": "ten 47",
    "loai": "loai 47",
    "tacGia": "tacGia 47",
    "gia": 70
  },
  {
    "id": "48",
    "ten": "ten 48",
    "loai": "loai 48",
    "tacGia": "tacGia 48",
    "gia": 13
  },
  {
    "id": "49",
    "ten": "ten 49",
    "loai": "loai 49",
    "tacGia": "tacGia 49",
    "gia": 60
  },
  {
    "id": "50",
    "ten": "ten 50",
    "loai": "loai 50",
    "tacGia": "tacGia 50",
    "gia": 92
  },
  {
    "id": "51",
    "ten": "ten 51",
    "loai": "loai 51",
    "tacGia": "tacGia 51",
    "gia": 87
  },
  {
    "id": "52",
    "ten": "ten 52",
    "loai": "loai 52",
    "tacGia": "tacGia 52",
    "gia": 92
  },
  {
    "id": "53",
    "ten": "ten 53",
    "loai": "loai 53",
    "tacGia": "tacGia 53",
    "gia": 46
  },
  {
    "id": "54",
    "ten": "ten 54",
    "loai": "loai 54",
    "tacGia": "tacGia 54",
    "gia": 51
  },
  {
    "id": "55",
    "ten": "ten 55",
    "loai": "loai 55",
    "tacGia": "tacGia 55",
    "gia": 65
  },
  {
    "id": "56",
    "ten": "ten 56",
    "loai": "loai 56",
    "tacGia": "tacGia 56",
    "gia": 67
  },
  {
    "id": "57",
    "ten": "ten 57",
    "loai": "loai 57",
    "tacGia": "tacGia 57",
    "gia": 44
  },
  {
    "id": "58",
    "ten": "ten 58",
    "loai": "loai 58",
    "tacGia": "tacGia 58",
    "gia": 29
  },
  {
    "id": "59",
    "ten": "ten 59",
    "loai": "loai 59",
    "tacGia": "tacGia 59",
    "gia": 70
  },
  {
    "id": "60",
    "ten": "ten 60",
    "loai": "loai 60",
    "tacGia": "tacGia 60",
    "gia": 80
  },
  {
    "id": "61",
    "ten": "ten 61",
    "loai": "loai 61",
    "tacGia": "tacGia 61",
    "gia": 55
  },
  {
    "id": "62",
    "ten": "ten 62",
    "loai": "loai 62",
    "tacGia": "tacGia 62",
    "gia": 32
  },
  {
    "id": "63",
    "ten": "ten 63",
    "loai": "loai 63",
    "tacGia": "tacGia 63",
    "gia": 65
  },
  {
    "id": "64",
    "ten": "ten 64",
    "loai": "loai 64",
    "tacGia": "tacGia 64",
    "gia": 93
  },
  {
    "id": "65",
    "ten": "ten 65",
    "loai": "loai 65",
    "tacGia": "tacGia 65",
    "gia": 46
  },
  {
    "id": "66",
    "ten": "ten 66",
    "loai": "loai 66",
    "tacGia": "tacGia 66",
    "gia": 63
  },
  {
    "id": "67",
    "ten": "ten 67",
    "loai": "loai 67",
    "tacGia": "tacGia 67",
    "gia": 97
  },
  {
    "id": "68",
    "ten": "ten 68",
    "loai": "loai 68",
    "tacGia": "tacGia 68",
    "gia": 13
  },
  {
    "id": "69",
    "ten": "ten 69",
    "loai": "loai 69",
    "tacGia": "tacGia 69",
    "gia": 51
  },
  {
    "id": "70",
    "ten": "ten 70",
    "loai": "loai 70",
    "tacGia": "tacGia 70",
    "gia": 40
  },
  {
    "id": "71",
    "ten": "ten 71",
    "loai": "loai 71",
    "tacGia": "tacGia 71",
    "gia": 1
  },
  {
    "id": "72",
    "ten": "ten 72",
    "loai": "loai 72",
    "tacGia": "tacGia 72",
    "gia": 100
  },
  {
    "id": "73",
    "ten": "ten 73",
    "loai": "loai 73",
    "tacGia": "tacGia 73",
    "gia": 57
  },
  {
    "id": "74",
    "ten": "ten 74",
    "loai": "loai 74",
    "tacGia": "tacGia 74",
    "gia": 31
  },
  {
    "id": "75",
    "ten": "ten 75",
    "loai": "loai 75",
    "tacGia": "tacGia 75",
    "gia": 72
  },
  {
    "id": "76",
    "ten": "ten 76",
    "loai": "loai 76",
    "tacGia": "tacGia 76",
    "gia": 45
  },
  {
    "id": "77",
    "ten": "ten 77",
    "loai": "loai 77",
    "tacGia": "tacGia 77",
    "gia": 41
  },
  {
    "id": "78",
    "ten": "ten 78",
    "loai": "loai 78",
    "tacGia": "tacGia 78",
    "gia": 76
  },
  {
    "id": "79",
    "ten": "ten 79",
    "loai": "loai 79",
    "tacGia": "tacGia 79",
    "gia": 54
  },
  {
    "id": "80",
    "ten": "ten 80",
    "loai": "loai 80",
    "tacGia": "tacGia 80",
    "gia": 9
  },
  {
    "id": "81",
    "ten": "ten 81",
    "loai": "loai 81",
    "tacGia": "tacGia 81",
    "gia": 90
  },
  {
    "id": "82",
    "ten": "ten 82",
    "loai": "loai 82",
    "tacGia": "tacGia 82",
    "gia": 4
  },
  {
    "id": "83",
    "ten": "ten 83",
    "loai": "loai 83",
    "tacGia": "tacGia 83",
    "gia": 89
  },
  {
    "id": "84",
    "ten": "ten 84",
    "loai": "loai 84",
    "tacGia": "tacGia 84",
    "gia": 38
  },
  {
    "id": "85",
    "ten": "ten 85",
    "loai": "loai 85",
    "tacGia": "tacGia 85",
    "gia": 34
  },
  {
    "id": "86",
    "ten": "ten 86",
    "loai": "loai 86",
    "tacGia": "tacGia 86",
    "gia": 44
  },
  {
    "id": "87",
    "ten": "ten 87",
    "loai": "loai 87",
    "tacGia": "tacGia 87",
    "gia": 76
  },
  {
    "id": "88",
    "ten": "ten 88",
    "loai": "loai 88",
    "tacGia": "tacGia 88",
    "gia": 62
  },
  {
    "id": "89",
    "ten": "ten 89",
    "loai": "loai 89",
    "tacGia": "tacGia 89",
    "gia": 93
  },
  {
    "id": "90",
    "ten": "ten 90",
    "loai": "loai 90",
    "tacGia": "tacGia 90",
    "gia": 29
  },
  {
    "id": "91",
    "ten": "ten 91",
    "loai": "loai 91",
    "tacGia": "tacGia 91",
    "gia": 32
  },
  {
    "id": "92",
    "ten": "ten 92",
    "loai": "loai 92",
    "tacGia": "tacGia 92",
    "gia": 32
  },
  {
    "id": "93",
    "ten": "ten 93",
    "loai": "loai 93",
    "tacGia": "tacGia 93",
    "gia": 70
  },
  {
    "id": "94",
    "ten": "ten 94",
    "loai": "loai 94",
    "tacGia": "tacGia 94",
    "gia": 87
  },
  {
    "id": "95",
    "ten": "ten 95",
    "loai": "loai 95",
    "tacGia": "tacGia 95",
    "gia": 66
  },
  {
    "id": "96",
    "ten": "ten 96",
    "loai": "loai 96",
    "tacGia": "tacGia 96",
    "gia": 16
  },
  {
    "id": "97",
    "ten": "ten 97",
    "loai": "loai 97",
    "tacGia": "tacGia 97",
    "gia": 10
  },
  {
    "id": "98",
    "ten": "ten 98",
    "loai": "loai 98",
    "tacGia": "tacGia 98",
    "gia": 75
  },
  {
    "id": "99",
    "ten": "ten 99",
    "loai": "loai 99",
    "tacGia": "tacGia 99",
    "gia": 12
  },
  {
    "id": "100",
    "ten": "ten 100",
    "loai": "loai 100",
    "tacGia": "tacGia 100",
    "gia": 83
  }
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
