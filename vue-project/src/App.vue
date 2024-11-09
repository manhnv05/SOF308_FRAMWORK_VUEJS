<script setup>
const message ='hehehehhe'
const button = '<button type="button" class="btn btn-primary">Primary</button>'
const ButtonID = 'btn'
const table = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`
const clickButton = () =>{
  console.log('Demohahahha')
  alert("hahahahha")
}
</script>

<template>
  <h1>{{ message }}</h1>
 <p>HELLO</p>
 <div v-html="button"></div>
 <button :id="ButtonID">Click Here</button>
 <div v-html="table"></div>
 <button @click="clickButton">Click</button>
</template>
<style>

</style>
