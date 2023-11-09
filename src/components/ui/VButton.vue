<template>
  <button
    class="button"
    :class="type"
    type="button"
  >
    <slot name="icon" />
    <slot name="text" />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped>
.button {
  padding: 4px 12px;
}
</style>
