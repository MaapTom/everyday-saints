<script setup>
import { ref } from 'vue';
import { useWindowSize } from "@vueuse/core";
import { useModalStore } from "../stores/modal";
import { breakpoints } from "../utils/breakpoints.js";
import ButtonIcon from "../components/ButtonIcon.vue";
import ShareTooltip from "../components/ShareTooltip.vue";
import { PhPlusCircle, PhShareFat } from "@phosphor-icons/vue";

const { width } = useWindowSize();
const modalStore = useModalStore();
const stateTooltipShare = ref(false);

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

    <h2 class="saint-apresentation__subtitle">
      <span class="saint_apresentation__subtitle__text-expand">06</span> De Julho
    </h2>

    <h1 class="saint-apresentation__title saint-apresentation__title--filled-red"
      v-show="width >= breakpoints.tabletDevice">
      Santa Maria Goretti
    </h1>

    <div class="saint-apresentation__details">
      <h3>Virgem e Mártir</h3>
      <h3>1890 - 1902</h3>
    </div>

    <p class="saint-apresentation__description" v-show="width >= breakpoints.middleDevice">
      Nasceu em Corinaldo, centro da Itália, no ano de 1890. Era de família pobre, numerosa e camponesa,
      mas muito temente a Deus. Com a morte do pai, Maria Goretti, com os seus, foram morar num local perto de Roma,
      sob o mesmo teto de uma família composta por um pai viúvo e dois filhos, sendo um deles Alessandro.
    </p>

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

.saint-apresentation__subtitle {
  font: var(--font-text);
  font-weight: 600;
}

.saint_apresentation__subtitle__text-expand {
  font: var(--font-title-secondary);
}

.saint-apresentation__details h3 {
  display: flex;
  flex-direction: column;
  gap: var(--small);
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
    font-size: clamp(3.2rem, 3.2rem + 2vw, 4.8rem);
  }
  .saint-apresentation__subtitle {
    font-size: clamp(1.6rem, 2rem, 3.2rem);
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
    gap: 16px;
  }

  .saint-apresentation__details h3 {
    font: var(--font-text-secondary);
  }
}
</style>