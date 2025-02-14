<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import SlideCard from './SlideCard.vue';
import ButtonIcon from './ButtonIcon.vue';
import { useSaintStore } from '../stores/saint';
import { useWindowSize } from "@vueuse/core";
import { PhCaretRight, PhCaretLeft } from '@phosphor-icons/vue';

const CARD_SIZE = 252;
let currentNavigationPosition = 0;

const navigation = ref(null);
const { width } = useWindowSize();
const saintStore = useSaintStore();
const { isLoaded, listSaints } = storeToRefs(saintStore);
const stateCardElements = ref([]);

watch(isLoaded, () => {
  generateListIndexCards();
})

function generateListIndexCards() {
  if (!isLoaded.value) return;

  for(let i; i <= listSaints.length; i++) {
    stateCardElements.value.push('card--inactive');
  }

  stateCardElements.value[0] = 'card--active';
}

async function handleClickOnSlideCards(index, currentId) {

  saintStore.setActiveSaint(Number(currentId));

  removeActiveClasses();
  stateCardElements.value[index] = 'card--active';
}

function removeActiveClasses() {
  const lengthArray = stateCardElements.value.length;

  for(let i = 0; i < lengthArray; i++){
    if(stateCardElements.value[i] == 'card--active'){
      stateCardElements.value[i] = 'card--inactive';
    }
  }
}

function handleClickRightControl() {
  currentNavigationPosition += CARD_SIZE;
  navigation.value.scrollLeft += CARD_SIZE;
}

function handleClickLeftControl() {
  currentNavigationPosition -= CARD_SIZE;
  navigation.value.scrollLeft -= CARD_SIZE;
}

</script>

<template>
  <nav class="navigation">
    <ButtonIcon
      buttonTitle="Rolar para esquerda"
      class="button--no-padding"
      v-show="width > 480"
      @click="handleClickLeftControl"
      data-test="leftControl"
    >
      <PhCaretLeft
        :size="32"
        color="#000"
        aria-hidden="true"
      />
    </ButtonIcon>
    <ul
      class="navigation__container"
      ref="navigation"
      data-test="containerNavigation"
    >
      <template v-if="!isLoaded">
        <SlideCard
          cardSaintUrlImage=""
          cardSaintName=""
          cardSaintBornDied=""
          data-test="slide-card"
        />
        
        <SlideCard
          cardSaintUrlImage=""
          cardSaintName=""
          cardSaintBornDied=""
          data-test="slide-card"
        />

        <SlideCard
          cardSaintUrlImage=""
          cardSaintName=""
          cardSaintBornDied=""
          data-test="slide-card"
        />
      </template>
      <template v-else>
        <SlideCard
          v-for="(saint, index) in listSaints"
          :key="saint.index"
          :cardSaintUrlImage="saint.saint_image_avatar"
          :cardSaintName="saint.name"
          :cardSaintBornDied="`${saint.year} - ${saint.death}`"
          :class="stateCardElements[index]"
          @click="handleClickOnSlideCards(index, saint.id)"
          data-test="slide-card"
        />
      </template>
    </ul>
    <ButtonIcon
      buttonTitle="Rolar para direita"
      class="button--no-padding"
      v-show="width > 480"
      @click="handleClickRightControl"
      data-test="rightControl"
    >
      <PhCaretRight
        :size="32"
        color="#000"
        aria-hidden="true"
      />
    </ButtonIcon>
  </nav>
</template>

<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';

.navigation {
  display: flex;
  align-items: center;
  max-width: 52vw;
  transition: all .2s;
}

.navigation__container {
  display: flex;
  gap: 16px;
  overflow: scroll;
  padding: var(--medium) 0px;
  transition: all .2s;
  scroll-behavior: smooth;
}

.navigation__container::-webkit-scrollbar {
  display: none;
}

.navigation__container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media(max-width: 480px) {
  .navigation__container {
    padding: 0px 0px var(--medium) 0px !important;
  }
}

@media(max-width: 834px) {
  .navigation__container {
    gap: 10px;
    padding: var(--medium) 0px;
  }
}

@media(max-width: 1200px) {
  .navigation {
    max-width: 100%;

  }
}


@media(min-width: 1400px) {
  .navigation {
    max-width: 800px;
  }
  
  .navigation__container {
    width: 55vw;
    padding: var(--medium) 0px;
  }
}

</style>