<template>
  <v-tabs :tabs="bondsTabs" />
</template>

<script lang="ts" setup>
import VTabs from '@/components/ui/VTabs.vue';

const bondsTabs = [
  {
    id: 1,
    name: 'Все облигации',
    code: 'all'
  },
  {
    id: 2,
    name: 'Корпоративные',
    code: 'corporate'
  },
  {
    id: 3,
    name: 'Замещенные',
    code: 'exchange'
  },
  //   {
  //     id: getRandomId(),
  //     name: 'Ифи',
  //     code: 'ifi'
  //   },
  {
    id: 4,
    name: 'Субфедеральные',
    code: 'subfederal'
  },
  {
    id: 5,
    name: 'OФЗ',
    code: 'ofz'
  },
  {
    id: 6,
    name: 'Муниципальные',
    code: 'municipal'
  },
]
</script>