<script setup>
import { ref } from 'vue';

const login = ref(true)
const ToggenEvent=()=>{
    login.value =! login.value
    
}
const UserStatus = ref('Online')
const Status=()=>{
  if(UserStatus.value === 'Online'){
    UserStatus.value = 'Away'
  }else if(UserStatus.value === 'Away'){
    UserStatus.value = 'Busy'
  }else{
    UserStatus.value = 'Online'
  }
  console.log(UserStatus.value)
}
const Isshow = ref(true)
const ClickShow=()=>{
    Isshow.value =! Isshow.value
    
}
const Mess = ref('')
const No1 = ref(0)
const No2 = ref(0)
const Tong = ref(0)
const tinhTong = ()=>{
  Tong.value = Number(No1.value)+Number(No2.value)
}
const gioiTinh = ref('')
</script>

<template>
  <h1>If else & Lam viec voi form</h1>
  <h1>Kiem Tra dang nhap</h1>
  <button @click="ToggenEvent">{{login == true ? "Xin Chao Nguoi Dung" :  "Nguoi Dung Chua Dang Nhap"}}</button>
  <p>{{ login }}</p>
  <!-- ----------------------------------- -->
   <p v-if="UserStatus === 'Online'">Nguoi Dung Dang Hoat Dong</p>
   <p v-else-if="UserStatus === 'Away'">Nguoi Dung Khong Hoat Dong</p>
   <p v-else="UserStatus">Nguoi Dung Dang Ban</p>
  <p>{{ UserStatus === 'Online' ? "Nguoi Dung Dang Hoat Dong" : UserStatus === 'Away'? "Nguoi Dung Khong hoat dong" : "Nguoi Dung Dang Ban" }}</p><br>
   <button @click="Status()">Thay Doi Trang Thai</button>
   <!-- ---------------- -->
    <div>
    <p v-show="Isshow">HelloWorld!!</p>
    <button @click="ClickShow">click</button>
    </div>
    <!-- ----------------------- -->
     <h1>Form data binding - binding 2 chieu</h1>
     Mess : <input type="text" v-model="Mess">
     <p>{{ Mess }}</p>
     No1<input type="text" v-model="No1"><br>
     No2<input type="text" v-model="No2"><br>
     <p>{{ Tong }}</p>
     <input type="button" value="Tong" @click="tinhTong"><br>
    Nam <input type="radio" name="gt" id="gioiTinh" value="Nam" v-model="gioiTinh">
    Nu <input type="radio" name="gt" id="gioiTinh" value="Nu" v-model="gioiTinh">
    <p>Gioi Tinh Ban Vua Chon: <Strong>{{ gioiTinh }}</Strong></p>
</template>

<style scoped>

</style>
