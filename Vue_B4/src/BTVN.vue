<script setup>
import { ref, computed } from "vue";


const tasks = ref([]); 
const newTaskName = ref(""); 
const newTaskCompleted = ref(false); 
const filterStatus = ref("all"); 


const filteredTasks = computed(() => {
  if (filterStatus.value === "completed") {
    return tasks.value.filter((task) => task.completed);
  }
  if (filterStatus.value === "incomplete") {
    return tasks.value.filter((task) => !task.completed);
  }
  return tasks.value;
});

const completedCount = computed(() =>
  tasks.value.filter((task) => task.completed).length
);
const incompleteCount = computed(() =>
  tasks.value.filter((task) => !task.completed).length
);

const addTask = () => {
  if (newTaskName.value.trim() === "") {
    alert("Vui lòng nhập tên nhiệm vụ!");
    return;
  }
  tasks.value.push({
    id: tasks.value.length ? tasks.value[tasks.value.length - 1].id + 1 : 1,
    name: newTaskName.value.trim(),
    completed: newTaskCompleted.value,
    editing: false,
  });
  newTaskName.value = "";
  newTaskCompleted.value = false;
};

const toggleTask = (task) => {
  task.completed = !task.completed;
};

const deleteCompletedTasks = () => {
  tasks.value = tasks.value.filter((task) => !task.completed);
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

const editTask = (task) => {
  task.editing = true;
};

const saveTask = (task) => {
  if (task.name.trim() === "") {
    alert("Tên nhiệm vụ không được để trống!");
    return;
  }
  task.editing = false;
};
</script>

<template>
  <div>
    <h1>Quản lý nhiệm vụ</h1>

    <section>
      <h2>Bài 1: Hiển Thị và Thêm Nhiệm Vụ</h2>
      <input v-model="newTaskName" placeholder="Tên nhiệm vụ" />
      <label>
        <input type="checkbox" v-model="newTaskCompleted" /> Hoàn thành
      </label>
      <button @click="addTask">Thêm nhiệm vụ</button>
    </section>

    <section>
      <h2>Bài 2: Đánh Dấu Hoàn Thành hoặc Chưa Hoàn Thành</h2>
      <div v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
        <span>{{ task.name }}</span>
        <button @click="toggleTask(task)">
          {{ task.completed ? "Đánh dấu chưa hoàn thành" : "Đánh dấu hoàn thành" }}
        </button>
      </div>
    </section>

    <section>
      <h2>Bài 3: Chỉnh Sửa Nhiệm Vụ</h2>
      <div v-for="task in tasks" :key="task.id">
        <div v-if="!task.editing">
          <span>{{ task.name }}</span>
          <button @click="editTask(task)">Chỉnh sửa</button>
        </div>
        <div v-else>
          <input type="text" v-model="task.name" />
          <label>
            <input type="checkbox" v-model="task.completed" /> Hoàn thành
          </label>
          <button @click="saveTask(task)">Lưu</button>
          <button @click="task.editing = false">Hủy</button>
        </div>
      </div>
    </section>

    <section>
      <h2>Bài 4: Bộ Lọc Theo Trạng Thái</h2>
      <label>
        <input type="radio" value="all" v-model="filterStatus" /> Tất cả
      </label>
      <label>
        <input type="radio" value="completed" v-model="filterStatus" /> Đã hoàn thành
      </label>
      <label>
        <input type="radio" value="incomplete" v-model="filterStatus" /> Chưa hoàn thành
      </label>
      <div v-for="task in filteredTasks" :key="task.id">
        <span>{{ task.name }} - {{ task.completed ? "Hoàn thành" : "Chưa hoàn thành" }}</span>
      </div>
    </section>

    <section>
      <h2>Bài 5: Xóa Tất Cả Nhiệm Vụ Hoàn Thành</h2>
      <button @click="deleteCompletedTasks">Xóa tất cả nhiệm vụ đã hoàn thành</button>
    </section>

    <section>
      <h2>Bài 6: Đếm và Hiển Thị Số Lượng Nhiệm Vụ</h2>
      <p>Đã hoàn thành: {{ completedCount }} | Chưa hoàn thành: {{ incompleteCount }}</p>
    </section>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
