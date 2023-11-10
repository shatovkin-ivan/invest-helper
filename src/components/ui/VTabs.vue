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
        :class="{'active': tab.id === activeTab?.id }"
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
import type { PropType } from 'vue'
import type { Tabs, Tab } from '@/interfaces/tabs'

const props = defineProps({
  tabs: {
    type: Array as PropType<Tabs>,
    default: () => []
  }
})

const emit = defineEmits(['handleSelect'])

const activeTab = ref<Tab | null>(props.tabs[0] ? props.tabs[0] : null)

const handleClick = (el: Tab) => {
  const foundTab = props.tabs.find(item => item.id === el.id);
  if (foundTab) {
    activeTab.value = foundTab;
    emit('handleSelect', activeTab.value)
  }
}



</script>