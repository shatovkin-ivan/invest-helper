<template>
  <v-tabs
    :tabs="bondsTabs"
    @handle-select="selectTab"
  />
</template>

<script lang="ts" setup>
import VTabs from '@/components/ui/VTabs.vue';
import type { Tab } from '@/interfaces/tabs';

const bondsTabs = [
  {
    id: '1',
    name: 'Все облигации',
    code: 'all'
  },
  {
    id: '2',
    name: 'Корпоративные',
    code: 'corporate'
  },
  {
    id: '3',
    name: 'Замещенные',
    code: 'exchange'
  },
  //   {
  //     id: getRandomId(),
  //     name: 'Ифи',
  //     code: 'ifi'
  //   },
  {
    id: '4',
    name: 'Субфедеральные',
    code: 'subfederal'
  },
  {
    id: '5',
    name: 'OФЗ',
    code: 'ofz'
  },
  {
    id: '6',
    name: 'Муниципальные',
    code: 'municipal'
  },
]

const selectTab = (e: Tab) => {
  console.log(e)
}
</script>@/interfaces/tabs