<script setup>
import { useWindowSize } from '@vueuse/core';
import { breakpoints } from '../utils/breakpoints';

const props = defineProps({
  cardSaintUrlImage: {
    type: String,
    required: true,
  },
  cardSaintName: {
    type: String,
    required: true,
  },
  cardSaintBornDied: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
  }
});

const { width } = useWindowSize();

</script>
<template>
  <button :class="[props.isActive ? 'card card--active' : 'card']">
    <img
      :src="props.cardSaintUrlImage" 
      class="card__saint-image"
      :alt="'Image de ' + cardSaintName"
      v-show="width >= breakpoints.largePhoneDevice"
    >
    <li class="card__text-card">
      <p class="card__text-card__title">{{ cardSaintName }}</p>
      <p class="card__text-card__details">{{ cardSaintBornDied }}</p>
    </li>
  </button>
</template>
<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';

.card {
  min-width: 172px;
  display: flex;
  justify-content: center;
  padding: var(--small-s) 0;
  background-color: var(--white);
  border: 1px solid var(--gray100);
  border-radius: 8px;
  transition: all .2s;
}

.card:hover {
  background-color: rgba(51, 51, 51, 0.04);
}

.card__text-card {
  display: flex;
  flex-direction: column;
  align-items: center; 
  overflow-wrap: normal;
  transition: all .2s;
}

.card--active{
  max-height: 78px;
  display: flex;
  gap: var(--small-xl);
  box-shadow: 0 13px 10px 4px rgba(0, 0, 0, 0.11);
  border: 1.5px solid var(--gray300) !important;
}

.card--active.card__text-card {
  gap: 8px;
}

.card__text-card__title {
  font: var(--font-text-secondary);
}

.card__text-card__details {
  font: var(--font-text);
}

@media(min-width: 480px){
  .card {
    min-width: 252px;
    max-height: 94px;
    display: flex;
    align-items: center;
    gap: var(--small-xl);
    padding: var(--small-xs) 0;
    border: 1px solid var(--gray100);
    border-radius: 8px;
  }

  .card--active{
    box-shadow: 0 10px 15px 4px rgba(0, 0, 0, 0.08);
  }

  .card__saint-image {
    display: block;
    max-width: 100%;
    border: 2px solid #AB8C51;
    border-radius: 50%;
  }

  .card__text-card {
    display: flex;
    flex-direction: column;
    gap: var(--small-s);
  }

  .card__text-card__title {
    font: var(--font-text-secondary);
  }

  .card__text-card__details {
    font: var(--font-text);
  }
}

</style>