<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/default/TheHeader.vue';
import TheFooter from './components/default/TheFooter.vue';
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style scoped>

</style>
