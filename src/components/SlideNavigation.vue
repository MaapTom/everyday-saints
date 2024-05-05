<script setup>
import { ref } from 'vue';
import SlideCard from './SlideCard.vue';
import ButtonIcon from './ButtonIcon.vue';
import { useWindowSize } from "@vueuse/core";
import { PhCaretRight, PhCaretLeft } from '@phosphor-icons/vue';

const CARD_SIZE = 252;
let currentNavigationPosition = 0;
const { width } = useWindowSize();
const navigation = ref(null);
const stateCardElements = ref(['card--inactive', 'card--active', 'card--inactive']);

function handleClickOnSlideCards(currentId) {
  removeActiveClasses();
  stateCardElements.value[currentId] = 'card--active';
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
      <SlideCard
        cardSaintUrlImage="/sao_judas_tadeu_caroussel.png"
        cardSaintName="São Judas Tadeu"
        cardSaintBornDied="1500 - 1902"
        :class="stateCardElements[0]"
        data-test="slide-card"
        @click="handleClickOnSlideCards(0)"
      />
      <SlideCard
        cardSaintUrlImage="/santa_maria_goretti_caroussel.png"
        cardSaintName="Santa Maria Goretti"
        cardSaintBornDied="1500 - 1902"
        :class="stateCardElements[1]"
        data-test="slide-card"
        @click="handleClickOnSlideCards(1)"
      />
      <SlideCard
        cardSaintUrlImage="/sao_judas_tadeu_caroussel.png"
        cardSaintName="São Judas Tadeu"
        cardSaintBornDied="1500 - 1902"
        :class="stateCardElements[2]"
        data-test="slide-card"
        @click="handleClickOnSlideCards(2)"
      />
      <SlideCard
        cardSaintUrlImage="/santa_maria_goretti_caroussel.png"
        cardSaintName="Santa Maria Goretti"
        cardSaintBornDied="1500 - 1902"
        :class="stateCardElements[3]"
        data-test="slide-card"
        @click="handleClickOnSlideCards(3)"
      />
      <SlideCard
        cardSaintUrlImage="/sao_judas_tadeu_caroussel.png"
        cardSaintName="São Judas Tadeu"
        cardSaintBornDied="1500 - 1902"
        :class="stateCardElements[4]"
        data-test="slide-card"
        @click="handleClickOnSlideCards(4)"
      />
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