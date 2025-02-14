<script setup>
import { storeToRefs } from 'pinia';
import { useWindowSize } from '@vueuse/core';
import { useModalStore } from '../stores/modal';
import {breakpoints} from '../utils/breakpoints.js';
import HomeSaintHistory from './HomeSaintHistory.vue';
import { PhX, PhCaretDown } from '@phosphor-icons/vue';
import { watchEffect, ref, onMounted, watch } from 'vue';
import { useSaintStore } from '../stores/saint.js';

const modalDialog = ref(null);
const isScrollEnded = ref(false);
const { width } = useWindowSize();
const modalStore = useModalStore();
const saintStore = useSaintStore();
const { isLoaded, currentSaint } = storeToRefs(saintStore);
const { stateModal } = storeToRefs(modalStore);

onMounted(() => {
  window.addEventListener('keydown', handleEscKeydown);
});

watchEffect(() => {
  if(stateModal.value) {
    modalDialog.value.showModal();
    document.body.classList.add('ModalDialog--active');
  } else {
    modalDialog.value.close();
    document.body.classList.remove('ModalDialog--active');
  }
}, { flush: 'post' });

watch(() => width.value, (width) => {
  if(width < breakpoints.middleDevice )
    modalStore.setCloseModal();
})

function handleEscKeydown(event) {
  if(event.keyCode == 27)
    modalStore.setCloseModal();
}

function handleScroll(event) {
  const maxScroll = event.target.scrollHeight - event.target.scrollTop;
  return isScrollEnded.value = maxScroll <= event.target.clientHeight + 10;
  //MaxScroll = cálculo para chegar ao clientHeight.
  //Quando for equivalente significa que o scroll encerrou
  //Adicionei 10 ao clientHeight para antecipar a remoção do elemento
}

</script>

<template>
  <dialog
    ref="modalDialog"
    class="dialog__history"
    aria-label="Leia mais sobre a história de Santa Maria Goretti"
  >
    <div
      class="dialog__modal-container"
      @click.self="modalStore.setCloseModal()"
    >
      <div class="dialog__modal-container__modal">
        <nav class="dialog__modal-container__modal__nav-bar">
          <button
            title="Fechar"
            type="button"
            @click="modalStore.setCloseModal()"
            class="dialog__modal-container__modal__nav-bar__button-close"
          >
            <PhX
              color="#000"
              size="32"
            />
          </button>
        </nav>

        <div class="dialog__modal-container__modal__header">
          <template v-if="!isLoaded">
            <div class="skeleton-container" aria-live="polite" aria-busy="true">
              <div class="skeleton-child --50percent --small  --bg-regular" aria-hidden="true"></div>
              <div class="skeleton-child --20percent --small  --bg-light" aria-hidden="true"></div>
            </div>
          </template>
          <template v-else>
            <span class="dialog__modal-container__modal__header__flex-wrapper">
              <h1 class="dialog__modal-container__modal__header__flex-wrapper__title">{{ currentSaint.name }}</h1>
              <h3 class="dialog__modal-container__modal__header__flex-wrapper__details">{{ currentSaint.year }} - {{ currentSaint.death }}</h3>
            </span> 
            <h2 class="dialog__modal-container__modal__subtitle">
              <span v-for="({ category }, index) in currentSaint.saint_category">
                {{ (currentSaint.saint_category.length == index + 1) ? category.name : `${category.name} e&nbsp;` }}
              </span>
            </h2>
          </template>
        </div>

        <section class="dialog__modal-container__modal__history-section" @scroll="handleScroll">
          <HomeSaintHistory/>
        </section>

        <footer class="dialog__modal-container__modal__footer" v-show="!isScrollEnded">
          <div class="dialog__modal-container__modal__footer__scroll-message">
            <span class="dialog__modal-container__modal__footer__scroll-message__text">
              Role para baixo
            </span>
            <PhCaretDown
              color="#000"
              size="30"
              class="caret-down"
              aria-describedby="describedby-icon"
              role="img"
            >
              <title id="describedby-icon" lang="pt">Ícone de seta para baixo</title>
            </PhCaretDown>
          </div>
        </footer>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';

.dialog__history {
  min-width: 100vw;
  min-height: 100vh;
  background: transparent;
  border: none;
}

.dialog__modal-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: flex-end;
}

.dialog__modal-container__modal {
  position: relative;
  max-width: 705px;
  width: 54vw;
  height: 90vh;
  padding: var(--medium) var(--medium) 0px var(--medium);
  background: var(--white);
}

.dialog__modal-container__modal__nav-bar {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.dialog__modal-container__modal__nav-bar__button-close {
  background: transparent;
  border: none;
  cursor: pointer;
}

.dialog__modal-container__modal__header {
  display: flex;
  flex-direction: column;
  gap: var(--small-s);
  margin: var(--medium-x) 0 0 0;
}

.dialog__modal-container__modal__header__flex-wrapper {
  display: flex;
  align-items: center;
  gap: var(--small);
}

.dialog__modal-container__modal__header__flex-wrapper__title {
  font: var(--font-subtitle);
}

.dialog__modal-container__modal__header__flex-wrapper__details {
  font: var(--font-text);
}

.dialog__modal-container__modal__subtitle {
  font: var(--font-text);
}

.dialog__modal-container__modal__history-section {
  height: 65vh;
  overflow-y: scroll;
  padding: 0 var(--small-x) 30px 0;
}

.dialog__modal-container__modal__history-section::-webkit-scrollbar {
  width: 4px;
  border-radius: 5px;
}

.dialog__modal-container__modal__history-section::-webkit-scrollbar-thumb {
  background: var(--gray400);
  /* border-left: 4px solid #faf6ed;
  border-right: 4px solid #faf6ed; */
} 

.dialog__modal-container__modal__footer {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: var(--small) 0;
  background-color: var(--white);
  transition: all 2s;
}

.dialog__modal-container__modal__footer__scroll-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.dialog__modal-container__modal__footer__scroll-message__text {
  font: var(--font-text-tertiary);
}

@keyframes slide_down {
  from {
    transform: translateX(0px);
    opacity: 0;
  }
  to {
    transform: translateY(5px);
    opacity: 1;
  }
}

.caret-down {
  animation: slide_down 1.5s infinite;
  transition: linear 1s;
  margin: -6px 0 0 0;
}

</style> 