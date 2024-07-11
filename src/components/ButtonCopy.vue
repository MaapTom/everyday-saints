<script setup>
import { ref } from 'vue';
import { PhCheckCircle, PhClipboardText } from '@phosphor-icons/vue';

const textButton = ref('Copiar oração')
const buttonCopyState = ref('inactive');

function handleCopy() {
  const prayText = document.querySelectorAll('.pray-box')[0];
  navigator.clipboard.writeText(prayText.innerHTML);

  changeButtonState();
}

function changeButtonState() {
  textButton.value = "Copiado!";
  buttonCopyState.value = "active";

  setTimeout(() => {
    buttonCopyState.value = "inactive";
    textButton.value = "Copiar oração";
  }, 3000)

}

</script>

<template>
  <button
    title="Copiar oração"
    class="button-copy"
    @click="handleCopy"
  >
    <PhClipboardText
      color="#000"
      :size="22"
      aria-describedby="describedby-icon" role="img"
      v-if="buttonCopyState === 'inactive'"
    >
      <title id="describedby-icon" lang="pt">Ícone de copiar de texto</title>
    </PhClipboardText>

    <PhCheckCircle
      color="#000"
      :size="22"
      aria-describedby="describedby-icon" role="img"
      v-else-if="buttonCopyState === 'active'"
    >
      <title id="describedby-icon" lang="pt">Ícone de sucesso</title>
    </PhCheckCircle>

    {{ textButton }}

  </button>
</template>

<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';

.button-copy {
  display: flex;
  gap: var(--small-s);
  padding: 4px var(--small-s);
  align-items: center;
  justify-content: center;

  background-color: var(--gray100);
  border-radius: 8px;
  border: none;
  font: var(--font-text-tertiary);
}

.button-copy span {
  display: flex;
  align-items: center;
}

.button-copy:hover {
  background-color: var(--gray300);
  transition: all .2s;
}

</style>