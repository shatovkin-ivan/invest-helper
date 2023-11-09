<template>
  {{ props.tabs }}
  <ul class="tabs">
    <li
      v-for="tab in props.tabs"
      :key="tab.id"
      class="tabs__item"
    >
      <v-button
        class="tab"
        :class="{'active': tab.id === activeTab.id }"
        @click="handleClick(tab)"
      >
        <template #text>
          {{ tab.name }}
        </template>
      </v-button>
    </li>
  </ul>
</template>

<script lang="ts" setup>

import VButton from './VButton.vue';
import { ref } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  }
})

const activeTab = ref(props.tabs[0])

const handleClick = (el) => {
  activeTab.value = props.tabs.find(item => item.id === el.id)
  console.log(activeTab.value)
}



</script>