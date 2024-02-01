<script setup>
import { reactive } from 'vue'

const props = defineProps({
  height: {
    type: Number,
    required: true
  },

  width: {
    type: Number,
    required: true
  },

  backgroundColor: {
    type: String,
    required: true
  },

  fullHeight: {
    type: Boolean,
    required: false
  },

  fullWidth: {
    type: Boolean,
    required: false
  }
});

const styleProps = reactive({
  height: props.fullHeight && !props.fullWidth ? '100%' : props.height + 'px',
  width: props.fullWidth && !props.fullHeight ? '100%' : props.width + 'px',
  backgroundColor: props.backgroundColor,
})
</script>

<template>
  <span
    :style="styleProps"
    class="span-separator"
  ></span>
</template>

<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';

.span-separator {
  display: block;
  border-radius: 4px;
}

</style>