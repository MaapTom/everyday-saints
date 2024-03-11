<script setup>
import Logo from './icons/Logo.vue';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useWindowSize } from '@vueuse/core';
import { PhCalendarPlus } from '@phosphor-icons/vue';
import ButtonIcon from '../components/ButtonIcon.vue';
import { breakpoints } from '../utils/breakpoints.js';

const { width } = useWindowSize();

const largeTextButtonIcon = computed(() => {
  return width.value < breakpoints.largePhoneDevice ? 'Calendário' : "Calendário dos Santos";
});

const adjustTextButtonIcon = computed(() => {
  return width.value < breakpoints.smallPhoneDevice ? '' : largeTextButtonIcon.value;
});

</script>

<template>
  <header class="header">
    <nav id="header__nav-bar">
      <RouterLink
        to="/"
        aria-label="Link para homepage"
        data-test="link-logo"
      >
        <Logo />
      </RouterLink>
      <ButtonIcon
        :textValue="adjustTextButtonIcon"
        :largeButton="true"
        iconName="Calendário"
        backgroundColor="#FDE7BC"
        backgroundHover="#E9D4AB"
      >
        <PhCalendarPlus
          color="#000"
          :size="(width < breakpoints.largePhoneDevice) ? 22 : 26"
          aria-describedby="describedby-icon"
          role="img"
        >
          <title id="describedby-icon" lang="pt">Ícone de calendário</title>
        </PhCalendarPlus>
      </ButtonIcon>
    </nav>
  </header>
</template>

<style scoped>
@import '../assets/main.css';
@import '../assets/base.css';

.header {
  max-width: 100%;
  margin: var(--medium-x) var(--small);
}

#header__nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}


@media(min-width: 800px) {
  .header {
    margin: var(--medium) var(--large);
  }
}

@media(min-width: 1200px) {
  .header {
    margin: var(--large) var(--extra-large);
  }
}

@media(min-width: 1600px) {
  .header {
    max-width: 1600px;
    margin: var(--large) auto;
  }
}
</style>