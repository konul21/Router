<script setup>
import NavbarVue from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <NavbarVue/>

    <RouterView/>

  </div>
</template>