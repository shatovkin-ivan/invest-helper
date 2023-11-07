<template>
  <header class="header">
    <VContainer>
      <div class="header__wrap">
        <a href="" class="header__logo">
          <img src="" alt="logo" />
        </a>
        <nav class="header__menu menu">
          <ul class="menu__list">
            <li class="menu__item" v-for="item in menuList" :key="item.id">
              <a :href="item.to" class="menu__link">{{ item.text }}</a>
            </li>
          </ul>
        </nav>
        <div class="header__auth">
          <button type="button">Войти</button>
        </div>
      </div>
    </VContainer>
  </header>
</template>

<script lang="ts" setup>
import VContainer from '@/components/ui/VContainer.vue';

const menuList = [
  {
    id: 1,
    to: '/bonds',
    text: 'Облигации'
  },
  {
    id: 2,
    to: '/actions',
    text: 'Акции'
  }
];
</script>
