<script setup>
const props = defineProps({
  textValue: {
    type: [String, Number],
    required: false,
  },

  buttonTitle: {
    type: String,
    required: false,
  },

  backgroundColor: {
    type: String,
    required: false,
  },

  backgroundHover: {
    type: String,
    required: false,
  },

  largeButton: {
    type: Boolean,
    required: false,
  }
})
</script>

<template>
  <button 
    :title="textValue || buttonTitle"
    :class="[ largeButton ? 'button--large' : 'button--small', 'button button--hover']"
    data-test="button"
    type="button"
  >
    <span class="button__icon-frame">
      <slot></slot>
    </span>

    {{ textValue }}
  </button>
</template>

<style scoped>
@import '../assets/main.css';
@import '../assets/base.css';

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  border: none;
  border-radius: 8px;
  background-color: v-bind(backgroundColor);
  font: var(--font-text-tertiary);
  line-height: normal !important;
  color: var(--black);
  transition: background-color 0.2s ease;
  /* outline: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer; */
}

.button__icon-frame {
  display: flex;
  margin: 0 var(--small-s);
}

.button--large {
  padding: var(--small-xl);
}

.button--small {
  padding: var(--small-s);
}

.button--hover:hover {
  background-color: v-bind(backgroundHover);
}

.button--no-padding {
  padding: 0px;
}

@media(min-width: 1200px) {
  .button {
    font: var(--font-text-secondary);
    font-weight: normal;
  }
}
</style>