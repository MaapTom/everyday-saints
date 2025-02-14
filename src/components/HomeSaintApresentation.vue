<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useWindowSize } from "@vueuse/core";
import { useModalStore } from "../stores/modal";
import { breakpoints } from "../utils/breakpoints.js";
import ButtonIcon from "../components/ButtonIcon.vue";
import ShareTooltip from "../components/ShareTooltip.vue";
import { PhPlusCircle, PhShareFat } from "@phosphor-icons/vue";
import { useSaintStore } from '../stores/saint.js';

const { width } = useWindowSize();
const modalStore = useModalStore();
const stateTooltipShare = ref(false);
const saintStore = useSaintStore();
const { isLoaded, currentSaint } = storeToRefs(saintStore);
const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro'];

function toggleTooltipShare() {
  stateTooltipShare.value = !stateTooltipShare.value;
  window.addEventListener('click', isClickOutside);
}

function isClickOutside(event) {
  const target = event.target;
  const buttonShare = document.querySelector('[data-selector="button-share"]');

  if(target !== ShareTooltip && target !== buttonShare) {
    stateTooltipShare.value = false;
    window.removeEventListener('click', isClickOutside)
  }
}
</script>

<template>
  <div class="saint-apresentation">
    <template v-if="!isLoaded">
      <div class="skeleton-container" aria-live="polite" aria-busy="true">
        <div class="skeleton-child --10percent --small  --bg-light" aria-hidden="true"></div>
        <div
          class="skeleton-child --60percent --small  --bg-light" 
          :class="width >= breakpoints.middleDevice ? '--40percent' : ''" 
          aria-hidden="true"
        ></div>
        <div
          class="skeleton-child --70percent --small  --bg-light"
          :class="width >= breakpoints.middleDevice ? '--30percent' : ''" 
          aria-hidden="true"
        ></div>
        <div
          class="skeleton-child --60percent --small --bg-light"
          aria-hidden="true" 
          v-show="width >= breakpoints.middleDevice"
        ></div>
        <div
          class="skeleton-child --70percent --medium --bg-regular" 
          aria-hidden="true" 
          v-show="width >= breakpoints.middleDevice"
        ></div>
        <div 
          class="skeleton-child --80percent --medium --bg-dark" 
          aria-hidden="true" 
          v-show="width >= breakpoints.middleDevice"
        ></div>
      </div>
    </template>
    <template v-else>
      <h2 class="saint-apresentation__subtitle">
        <span class="saint_apresentation__subtitle__text-expand">
          {{ currentSaint.day }}
        </span>
        De {{ monthNames[currentSaint.month] }}
      </h2>
  
      <h1
        class="saint-apresentation__title saint-apresentation__title--filled-red"
        :class="true
          // currentSaint.saint_category[0].category.name == 'Mártir' ? 
          // 'saint-apresentation__title--filled-red' : 
          // 'saint-apres entation__title--filled-gray'
        "
        v-show="width >= breakpoints.tabletDevice"
      >
        {{ currentSaint.name }}
      </h1>
  
      <div class="saint-apresentation__details">
        <h3>
          <span v-for="({ category }, index) in currentSaint.saint_category">
            {{ (currentSaint.saint_category.length == index + 1) ? category.name : `${category.name} e&nbsp;` }}
          </span>
        </h3>
        <h3>| {{ currentSaint.year }} - {{ currentSaint.death }}</h3>
      </div>
  
      <p class="saint-apresentation__description" v-show="width >= breakpoints.middleDevice">
        {{ currentSaint.history ? currentSaint.history[0].content[0] : '' }}
      </p>
    </template>

    <div class="saint-apresentation__buttons">
      <ButtonIcon 
        textValue="Ler Mais"
        :largeButton="true"
        iconName="Mais"
        backgroundColor="#EFEFEF"
        backgroundHover="#DFDFDF"
        v-show="width >= breakpoints.middleDevice"
        @click="modalStore.setOpenModal()"
      >
        <PhPlusCircle
          color="#000"
          :size="width < breakpoints.largePhoneDevice ? 22 : 26"
          aria-describedby="describedby-icon" role="img"
        >
          <title id="describedby-icon" lang="pt">Ícone de mais</title>
        </PhPlusCircle>
      </ButtonIcon>

      <ShareTooltip
        v-show="stateTooltipShare"
        :mobileTooltip="false"
      />

      <ButtonIcon
        textValue="Compartilhar"
        :largeButton="true"
        iconName="Compartilhar"
        backgroundColor="#EFEFEF"
        backgroundHover="#DFDFDF"
        v-show="width >= breakpoints.tabletDevice"
        @click="toggleTooltipShare"
        data-selector="button-share"
      >
        <PhShareFat
          color="#000"
          :size="width < breakpoints.largePhoneDevice ? 22 : 26"
          aria-describedby="describedby-icon"
          role="img"
        >
          <title id="describedby-icon" lang="pt">Ícone de seta curva</title>
        </PhShareFat>
      </ButtonIcon>
    </div>

  </div>
</template>

<style scoped>
  @import '../assets/base.css';
  @import '../assets/main.css';

.saint-apresentation {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: var(--small-s);
  flex: 1;
}

.saint-apresentation__title {
  width: max-content;
  margin: var(--medium-x) 0 6px 0;
  font: var(--font-subtitle);
}

.saint-apresentation__title--filled-red {
  background-color: var(--red);
  border-radius: 8px;
  color: var(--white);
}

.saint-apresentation__title--filled-gray {
  background-color: var(--gray100);
  border-radius: 8px;
  color: var(--gray850);
}

.saint-apresentation__subtitle {
  font: var(--font-text);
  font-weight: 600;
}

.saint_apresentation__subtitle__text-expand {
  font: var(--font-title-secondary);
}

.saint-apresentation__details h3 {
  display: flex;
  font: var(--font-text-tertiary);
  font-weight: 400;
}

.saint-apresentation__description {
  max-width: 572px;
  font: var(--font-text);
}

.saint-apresentation__buttons {
  position: relative;
  display: flex;
  gap: var(--small);
}

@media(min-width: 485px) {
  .saint_apresentation__subtitle__text-expand {
    font-size: clamp(2rem, 2rem + 2vw, 3rem);
  }
  .saint-apresentation__subtitle {
    font-size: clamp(1rem, 1.25rem, 2rem);
  }

}

@media(min-width: 800px) {
  .saint-apresentation {
    gap: var(--small);
  }

  .saint-apresentation__title {
    margin: 0px;
    font: var(--font-title-secondary);
    padding: var(--small-xl);
  }

  .saint-apresentation__details {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }

  .saint-apresentation__details h3 {
    font: var(--font-text-secondary);
  }
}
</style>