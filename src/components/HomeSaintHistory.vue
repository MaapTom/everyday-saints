<script setup>
import { storeToRefs } from 'pinia';
import ButtonCopy from './ButtonCopy.vue';
import { useWindowSize } from '@vueuse/core';
import { useSaintStore } from '../stores/saint.js';
import { breakpoints } from '../utils/breakpoints.js';
import { PhHandsPraying, PhLink } from '@phosphor-icons/vue';

const { width } = useWindowSize();
const saintStore = useSaintStore();
const { currentSaint, isLoaded } = storeToRefs(saintStore);

</script>

<template>
  <section>
    <template v-if="!isLoaded">
      <div class="skeleton-container" aria-live="polite" aria-busy="true">
        <div class="skeleton-child --20percent --small  --bg-dark" aria-hidden="true"></div>
        <div class="skeleton-child --80percent --small  --bg-light" aria-hidden="true"></div>
        <div class="skeleton-child --100percent --small  --bg-light" aria-hidden="true"></div>
        <div class="skeleton-child --100percent --small  --bg-light" aria-hidden="true"></div>
        <div class="skeleton-child --60percent --small  --bg-light" aria-hidden="true"></div>
      </div>

      <div class="skeleton-container" aria-live="polite" aria-busy="true">
        <div class="skeleton-child --20percent --small  --bg-dark" aria-hidden="true"></div>
        <div class="skeleton-child --100percent --small  --bg-light" aria-hidden="true"></div>
        <div class="skeleton-child --100percent --small  --bg-light" aria-hidden="true"></div>
        <div class="skeleton-child --70percent --small  --bg-light" aria-hidden="true"></div>
      </div>

      <div class="skeleton-container" aria-live="polite" aria-busy="true">
        <div class="skeleton-child --90percent --small  --bg-light" aria-hidden="true"></div>
        <div class="skeleton-child --100percent --small  --bg-light" aria-hidden="true"></div>
        <div class="skeleton-child --80percent --small  --bg-light" aria-hidden="true"></div>
      </div>

      <div class="skeleton-container" aria-live="polite" aria-busy="true">
        <div class="skeleton-child --20percent --small  --bg-dark" aria-hidden="true"></div>
        <div class="skeleton-child --70percent --small  --bg-light" aria-hidden="true"></div>
        <div class="skeleton-child --70percent --small  --bg-light" aria-hidden="true"></div>
        <div class="skeleton-child --70percent --small  --bg-light" aria-hidden="true"></div>
      </div>
    </template>
    <template v-else>
      <div
        class="wrapper-paragraph"
        v-for="(history, index) in currentSaint.history"
        :key="index"
      >
        <h4 class="wrapper-paragraph__title">{{ history.title }}</h4>
        <p
          class="wrapper-paragraph__text"
          v-for="(textContent, index) in history.content"
          :key="index"
        >
          {{ textContent }}
        </p>
      </div>

      <div class="wrapper-paragraph" v-if="currentSaint.prayer">
        <div class="wrapper-paragraph__flex-elements">   
          <span class="wrapper-paragraph__title-icon">
            <PhHandsPraying
              color="#000"
              :size="width < breakpoints.largePhoneDevice ? 24 : 26"
              aria-describedby="describedby-icon"
              role="img"
            >
              <title id="describedby-icon" lang="pt">Ícone de mãos orando</title>
            </PhHandsPraying>
            <h4 class="wrapper-paragraph__title">Oração</h4>
          </span>
          
          <ButtonCopy/>
        </div>
        <p class="wrapper-paragraph__text pray-box">
          {{ currentSaint.prayer ? currentSaint.prayer : ''  }}
        </p>
      </div>
      
      <div class="wrapper-paragraph" v-if="currentSaint.saint_source">
        <h4 class="wrapper-paragraph__title">Fonte</h4>

        <template v-for="{ source } in currentSaint.saint_source">
          <a :href="source.link" class="wrapper-paragraph__link" target="_blank">
            <PhLink
              color="#000"
              :size="width < breakpoints.largePhoneDevice ? 24 : 26"
              aria-describedby="describedby-icon"
              role="img"
            >
              <title id="describedby-icon" lang="pt">Ícone de link</title>
            </PhLink>
            {{ source.name }}
          </a>
        </template>
      </div>
    </template>
  </section>
</template>

<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';

.wrapper-paragraph {
  margin: var(--medium-x) 0 0 0;
}

.wrapper-paragraph__flex-elements {
  display: flex;
  justify-content: space-between;
}

.wrapper-paragraph__title {
  font: var(--font-text-secondary);
  font-weight: 600;
}

.wrapper-paragraph__text {
  margin: var(--small-xl) 0 var(--small-x) 0;
  font: var(--font-text);
  line-height: 1.5rem;
  color: var(--gray800);
}

.wrapper-paragraph__title-icon {
  display: flex;
  gap: var(--small-s);
}

.wrapper-paragraph__link {
  display: flex;
  align-items: center;
  margin: var(--small-xl) 0 var(--small-x) 0;
  gap: var(--small-s);
  font: var(--font-text);
  color: var(--gray800);
  max-width: max-content;
}

.skeleton-container {
  margin-top: 16px;
}

</style>