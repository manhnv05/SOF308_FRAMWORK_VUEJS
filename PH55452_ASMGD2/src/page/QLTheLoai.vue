<template>
  <div>
    <h1>Quản lý thể loại sách</h1>

    
    <div>
      <input v-model="newCategory" placeholder="Nhập tên thể loại" />
      <button @click="addCategory">Thêm</button>
    </div>

   
    <ul>
      <li v-for="category in categories" :key="category.id">
        <span v-if="editId !== category.id">{{ category.name }}</span>
        <input v-else v-model="editName" />

        <button v-if="editId === category.id" @click="updateCategory(category.id)">Lưu</button>
        <button v-if="editId === category.id" @click="cancelEdit">Hủy</button>
        <button v-else @click="startEdit(category)">Sửa</button>
        <button @click="deleteCategory(category.id)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";


const categories = ref([]); 
const newCategory = ref(""); 
const editId = ref(null); 
const editName = ref("");

const fetchCategories = () => {
  categories.value = [
    { id: 1, name: "Văn học" },
    { id: 2, name: "Truyện tranh" },
    { id: 3, name: "Manga" },
  ];
};

const addCategory = () => {
  if (!newCategory.value.trim()) return; 
  categories.value.push({
    id: categories.value.length+1, 
    name: newCategory.value.trim(),
  });
  newCategory.value = ""; 
};

const startEdit = (category) => {
  editId.value = category.id; 
  editName.value = category.name; 
};

const updateCategory = (id) => {
  const category = categories.value.find((cat) => cat.id === id);
  if (category && editName.value.trim()) {
    category.name = editName.value.trim(); 
  }
  cancelEdit(); 
};

const cancelEdit = () => {
  editId.value = null; 
  editName.value = ""; 
};

const deleteCategory = (id) => {
  categories.value = categories.value.filter((cat) => cat.id !== id); 
};

// Gọi hàm tải dữ liệu khi khởi động
onMounted(fetchCategories);
</script>

<style scoped>
h1 {
  color: #333;
  font-size: 24px;
}
button {
  margin-left: 10px;
  padding: 5px 10px;
}
input {
  margin-bottom: 10px;
}
</style>
