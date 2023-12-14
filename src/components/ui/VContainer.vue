<template>
    <div class="container">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0 var(--container-padding);
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
}
</style>
