<template>
    <section class="content">
        <v-container>
            <slot />
        </v-container>
    </section>
</template>

<script lang="ts" setup>

import VContainer from './VContainer.vue';

</script>

<style lang="scss" scoped>

.content {
    padding: 20px 0;
}

</style>
