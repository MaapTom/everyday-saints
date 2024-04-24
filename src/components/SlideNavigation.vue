<script setup>
import { ref } from 'vue';
import SlideCard from './SlideCard.vue';
import ButtonIcon from './ButtonIcon.vue';
import { PhCaretRight, PhCaretLeft } from '@phosphor-icons/vue';

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

</script>

<template>
  <nav class="navigation">
    <ButtonIcon
      buttonTitle="Rolar para esquerda"
    >
      <PhCaretLeft
        :size="32"
        color="#000"
        aria-hidden="true"
      />
    </ButtonIcon>
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
    <ButtonIcon
      buttonTitle="Rolar para direita"
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
  gap: 16px;
  width: 55vw;
  max-width: 800px;

  padding: var(--medium) 0px;
  overflow: scroll;
}

</style>