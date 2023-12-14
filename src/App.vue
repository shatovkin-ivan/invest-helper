<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from './components/default/TheHeader.vue';
import TheFooter from './components/default/TheFooter.vue';
</script>

<template>
    <the-header />
    <main>
        <router-view />
    </main>
    <the-footer />
</template>
