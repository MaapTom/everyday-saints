<script setup>
const props = defineProps({
  textValue: [String, Number],
  iconName: String,
  backgroundColor: String,
  backgroundHover: String,
  largeButton: Boolean,
})
</script>

<template>
  <button 
    :title="textValue"
    :class="[ largeButton ? 'large-wrapper' : 'small-wrapper', 'button-wrapper' ]"
  >
    <span class="icon-frame">
      <slot>
      </slot>
    </span>
    {{ textValue }}
  </button>
</template>

<style scoped>
@import '../assets/main.css';
@import '../assets/base.css';

.button-wrapper {
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
  outline: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}

.large-wrapper {
  padding: var(--small-xl);
}

.small-wrapper {
  padding: var(--small-s);
}

.button-wrapper:hover {
  background-color: v-bind(backgroundHover);
}

.icon-frame {
  display: flex;
  margin: 0 var(--small-s);
}

@media(min-width: 1200px) {
  .button-wrapper {
    font: var(--font-text-secondary);
  }
}
</style>