<script setup>
import Logo from './icons/Logo.vue'
import { reactive, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { PhCalendarPlus } from '@phosphor-icons/vue'
import ButtonIcon from '../components/ButtonIcon.vue'

const { width } = useWindowSize();

const currentMenuText = computed(() => {
  return width.value < 480 ? 'Calendário' : 'Calendário dos Santos';
});

</script>

<template>
  <header class="header-wrapper">
    <nav id="home-nav-bar">
      <a
        href="#"
        aria-label="Link para homepage"
        role="navigation"
        class="logo"
      >
        <Logo />
      </a>
      <ButtonIcon
        :text-value="(width < 375) ? '' : currentMenuText"
        :largeButton="true"
        icon-name="Calendário"
        background-color="#FDE7BC"
        background-hover="#E9D4AB"
      >
        <PhCalendarPlus
          color="#000"
          :size="(width < 480) ? 22 : 26"
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

.header-wrapper {
  max-width: 100%;
  margin: var(--medium-x) var(--small);
}

#home-nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}


@media(min-width: 800px) {
  .header-wrapper {
    margin: var(--medium) var(--large);
  }
}

@media(min-width: 1200px) {
  .header-wrapper {
    margin: var(--large) var(--extra-large);
  }
}

@media(min-width: 1600px) {
  .header-wrapper {
    max-width: 1600px;
    margin: var(--large) auto;
  }
}
</style>