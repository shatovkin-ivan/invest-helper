<template>
  <li class="bond-item">
    {{ bond.id }}
  </li>

</template>

<script lang="ts" setup>

const props = defineProps({
  bond: {
    type: Object,
    default: () => {}
  }
})

</script>