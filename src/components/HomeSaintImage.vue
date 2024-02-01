<script setup>
import { computed } from 'vue'

const props = defineProps({
  largeDisplayImage: {
    type: String,
    required: true
  },

  smallDisplayImage: {
    type: String,
    required: true
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

</script>

<template>
  <div class="wrapper-image">
    <img
      :src="responsibleSaintImage"
      :alt="acessibleDescription"
      data-test="image-test"
    />
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

@media(min-width: 1200px) {
  .wrapper-image {
    max-width: 477px;
    max-height: 656px;
    height: 70vh;
    order: 2;
  }

}

</style>