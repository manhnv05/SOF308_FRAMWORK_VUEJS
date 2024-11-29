<template>
<!-- <form>
    <input type="text" placeholder="Nhap ten" v-model="t.ten"><br>
    <input type="radio" v-model="t.gioiTinh" value="Nam">Nam<br>
    <input type="radio" v-model="t.gioiTinh" value="Nu">Nu<br>
    <input type="text" placeholder="Nhap dia chi " v-model="t.diaChi"><br>
    <input type="text" placeholder="Nhap tuoi" v-model="t.tuoi"><br>
</form> -->
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Ten</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ten input" v-model="t.ten" >
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="t.gioiTinh" value="Nam">
  <label class="form-check-label" for="flexRadioDefault1">
   Nam
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="t.gioiTinh" value="Nu">
  <label class="form-check-label" for="flexRadioDefault2">
    Nu
  </label>
</div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Dia chi label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Dia chi input"  v-model="t.diaChi">
  </div>
   <div class="form-group">
    <label for="formGroupExampleInput2">Tuoi label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Tuoi input"  v-model="t.tuoi">
  </div>
</form>
</template>
<script setup>
defineModel(
    "t",{
        default: ()=>({
            ten: "",
            gioiTinh: "",
            diaChi: "",
            tuoi: 0,
        })
    }
)
</script>