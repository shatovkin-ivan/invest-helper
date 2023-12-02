<template>
  <li class="bond-item">
    <router-link :to="bond.id">
      <div class="bond-item__content">
        <p>
          название
        </p>
        <p>
          цена
        </p>
        <p>
          дата погашения
        </p>
        <p>
          доходность
        </p>
        <p>
          ликвидность
        </p>
      </div>
    </router-link>
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