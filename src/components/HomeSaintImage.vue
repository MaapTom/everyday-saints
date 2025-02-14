<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSaintStore } from '../stores/saint';
import { useWindowSize } from '@vueuse/core';

const props = defineProps({
  largeDisplayImage: {
    type: String,
    required: false
  },

  smallDisplayImage: {
    type: String,
    required: false
  },

  largeScreen: {
    type: Boolean,
    required: true,
    default() {
      return false
    }
  },

  acessibleDescription: {
    type: String,
    required: true,
    default() {
      return "Imagem Santo do dia"
    }
  }
})


const responsibleSaintImage = computed(() => {
  return (
    props.largeScreen ? props.largeDisplayImage : props.smallDisplayImage
  )
})

const { width } = useWindowSize();
const saintStore = useSaintStore()
const { isLoaded } = storeToRefs(saintStore);

</script>

<template>
  <div class="wrapper-image">
    <template v-if="!isLoaded">
      <div class="skeleton-container" aria-live="polite" aria-busy="true">
        <div
          class="skeleton-child --small  --bg-regular"
          :class="width <= 1200 ? '--100percent' : '--100percent'"
          aria-hidden="true"
        ></div>
      </div>
    </template>
    <template v-else>
      <img
        :src="responsibleSaintImage"
        :alt="acessibleDescription"
        data-test="image-test"
      />
    </template>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';

.wrapper-image {
  flex: 1;
  max-width: 242px;
  max-height: 226px;
  border-radius: 16px;
  overflow: hidden;
}

.wrapper-image img {
  display: block;
  max-width: 100%;
}

.skeleton-child {
  height: 70vh;
}

@media(min-width: 1200px) {
  .wrapper-image {
    min-width: 477px;
    max-height: 656px;
    height: 70vh;
    order: 2;
  }
}

@media(max-width: 420px) {
  .skeleton-container {
    max-height: 150px;
  }
}

</style>