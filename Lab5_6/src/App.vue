<script setup>
import FooterLayout from './layout/FooterLayout.vue';
import HeaderLayout from './layout/HeaderLayout.vue';
import TacGia from './page/TacGia.vue';


</script>

<template>
  <h1>Kiem tra</h1>
  <HeaderLayout/>
  <!-- <TacGia/> -->
   <main>
    <RouterView/>
   </main>
  <FooterLayout/>
</template>

<style scoped>

</style>
