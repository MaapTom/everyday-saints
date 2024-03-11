<script setup>
import { useWindowSize } from "@vueuse/core";
import { PhShareFat } from "@phosphor-icons/vue";
import Separator from "../components/Separator.vue";
import { breakpoints } from "../utils/breakpoints.js";
import HomeHeader from "../components/HomeHeader.vue";
import ButtonIcon from "../components/ButtonIcon.vue";
import HomeFooter from "../components/HomeFooter.vue";
import HomeSaintImage from "../components/HomeSaintImage.vue";
import HomeSaintHistory from "../components/HomeSaintHistory.vue";
import HomeModalHistory from "../components/HomeModalHistory.vue";
import HomeSaintApresentation from "../components/HomeSaintApresentation.vue";

const { width } = useWindowSize();
</script>

<template>
  <HomeHeader />

  <main id="home-container">
    <section class="home-container__introduction">
      <HomeSaintImage
        :largeScreen="width >= breakpoints.middleDevice ? true : false"
        largeDisplayImage="/santa_maria_goretti_expand.jpg"
        smallDisplayImage="/santa_maria_goretti.jpg"
        acessibleDescription="Imagem de Santa Maria Goretti, por..."
      />
      <Separator
        :width="2"
        :height="93" 
        backgroundColor="#EFEFEF"
        v-show="width < breakpoints.tabletDevice"
      />
      <HomeSaintApresentation/>
    </section>

    <div
      class="home-container__wrapper-mobile-title"
      v-show="width < breakpoints.tabletDevice"
    >
      <h1 class="home-container__wrapper-mobile-title__title">Santa Maria Goretti</h1>
      <Separator
        :width="100"
        :height="3"
        backgroundColor="#A60000"
        :fullWidth="true"
      />
    </div>

    <HomeSaintHistory v-show="width < breakpoints.middleDevice"/>

    <div class="home-container__wrapper-mobile-buttons">
      <ButtonIcon
        textValue="Compartilhar"
        :largeButton="true"
        iconName="Compartilhar"
        backgroundColor="#EFEFEF"
        backgroundHover="#DFDFDF"
        v-show="width < breakpoints.tabletDevice"
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
  </main>

  <HomeModalHistory />

  <HomeFooter/>
</template>

<style scoped>
@import "../assets/base.css";
@import "../assets/main.css";

#home-container {
  width: 100%;
  padding: 0 var(--medium-xs);
}

.home-container__introduction {
  display: flex;
  align-items: center;
  gap: var(--small);
}

.home-container__wrapper-mobile-title {
  width: max-content;
}

.home-container__wrapper-mobile-title__title {
  margin: var(--medium-x) 0 var(--small-s) 0;
  font: var(--font-subtitle);
}

.home-container__wrapper-mobile-buttons {
  display: flex;
  flex-wrap: wrap;
  margin: var(--medium) 0 0 0;
  gap: var(--small);
}

@media(min-width: 800px) {
  #home-container {
    padding: 0 var(--medium);
  }
  .home-container__introduction {
    gap: var(--extra-large);
  }
}

@media(min-width: 1200px) {
  #home-container {
    padding: 0 var(--extra-large);
  }
}

@media(min-width: 1600px) {
  #home-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0px;
  }
}

</style>