<template>
  <ul class="bonds-list">
    <bonds-item
      v-for="bond in bonds"
      :key="bond._id"
      :bond="bond"
    />
  </ul>
  <v-button class="show-more">
    <template #text>
      Загрузить ещё
    </template>
  </v-button>
</template>

<script lang="ts" setup>

import BondsItem from './BondsItem.vue'
import VButton from '@/components/ui/VButton.vue'

const props = defineProps({
  bonds: {
    type: Array,
    default: () => []
  }
})

</script>