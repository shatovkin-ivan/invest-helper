<template>
    <header class="header">
        <v-container>
            <div class="header__wrap">
                <router-link
                    to="/"
                    class="header__logo"
                >
                    <img
                        src=""
                        alt="logo"
                    >
                </router-link>
                <nav class="header__menu menu">
                    <ul class="menu__list">
                        <li
                            v-for="item in menuList"
                            :key="item.id"
                            class="menu__item"
                        >
                            <router-link
                                :to="item.to"
                                class="menu__link"
                            >
                                {{ item.text }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="header__auth">
                    <v-button
                        v-if="!isAuth"
                        type="login"
                    >
                        <template #text>
                            Войти
                        </template>
                    </v-button>
                    <router-link
                        v-if="isAuth"
                        to="/profile"
                    >
                        Профиль
                    </router-link>
                </div>
            </div>
        </v-container>
    </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VContainer from '@/components/ui/VContainer.vue';
import VButton from '../ui/VButton.vue';

const isAuth = ref(false);

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

<style lang="scss" scoped>
.header {
    padding: 12px 0;
    &__wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.menu {
    &__list {
        display: flex;
        gap: 10px;
    }
}
</style>
