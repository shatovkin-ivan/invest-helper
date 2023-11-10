<template>
  <v-tabs
    :tabs="bondsTabs"
    @handle-select="selectTab"
  />
  <v-content>
    <bonds-list :bonds="bonds" />
  </v-content>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import VTabs from '@/components/ui/VTabs.vue';
import type { Tab } from '@/interfaces/Tabs';
import VContent from '@/components/ui/VContent.vue';
import BondsList from '@/components/Bonds/BondsList.vue';
import { BondsFactory } from '@/api/MainApiFactory'

const bonds = ref([])

const BondsRepository = BondsFactory.get('bonds')
const getData = async () => {
  const { data } = await BondsRepository.getAllBonds()
  bonds.value.push(...data)
  console.log(bonds.value)
}

onMounted(() => {
  getData()
})


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
</script>