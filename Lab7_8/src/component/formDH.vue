<template>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Ten</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Ten" v-model="d.ten">
  </div>
  <label for="">Loai</label><br>
  <select class="form-select" aria-label="Default select example" v-model="d.loai">
  <option value="Dong ho tre em">Dong ho tre em</option>
  <option value="Dong ho nam">Dong ho nam</option>
  <option value="Dong Ho nu">Dong Ho nu</option>
</select>
 <div class="form-group">
    <label for="exampleInputEmail1">Gia</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Gia" v-model="d.gia">
  </div>
</form>
</template>
<script setup>
defineModel(
    "d",{
        default:()=>(
            {
                 id: "",
        ten: "",
        loai: "",
        gia: 0
            }
        )
    }
)
</script>