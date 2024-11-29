<script setup>
import FooterLayout from './layout/FooterLayout.vue';
import HeaderLayout from './layout/HeaderLayout.vue';
import DongHo from './page/DongHo.vue';


</script>

<template>
  <h1>Lab7_8</h1>
  <HeaderLayout/>
  <!-- <DongHo/> -->
   <main>
    <RouterView/>
   </main>
  <FooterLayout/>
</template>

<style scoped>

</style>
