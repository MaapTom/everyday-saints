<script setup>
import Logo from './icons/Logo.vue';
import { RouterLink } from 'vue-router';
import ButtonCalendar from '../components/ButtonCalendar.vue';

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
     <ButtonCalendar/>
    </nav>
  </header>
</template>

<style scoped>
@import '../assets/main.css';
@import '../assets/base.css';

.header {
  max-width: 100%;
  margin: var(--medium-x) var(--medium);
}

#header__nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

@media(max-width: 480px) {
  .header {
    margin: var(--medium-x) var(--small);
  }
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