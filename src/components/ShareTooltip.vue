<script setup>
import { ref } from 'vue';

const props = defineProps({
  mobileTooltip: {
    type: Boolean,
    required: true,
  },
  saintName: {
    type: String,
    required: true,
  },
  saintId: {
    type: Number,
    required: true
  }
});

const shareLinkToPage = `${import.meta.env.VITE_SAINT_API_URL}/shared_link/${ props.saintId }`;
const shareLinks = {
  twitter: encodeURI(`https://x.com/intent/post?url=${shareLinkToPage}&text=Você já conhece a história de ${props.saintName}? Venha conhecer - Santos do Dia`),
  whatsapp: encodeURI(`https://wa.me/?text=Você já conhece a história de ${props.saintName}? Venha conhecer - Santos do Dia | ${shareLinkToPage}`),
  facebook: encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${shareLinkToPage}`),
};

</script>

<template>
  <div
    :class="mobileTooltip ? 'container-share --mobile --arrow-down-left' : 'container-share'"
    role="dialog"
    aria-modal="true"
    aria-label="Escolha o local para o compartilhamento"
  >
    <h1>Compartilhar em: </h1>
    <ul class="list-social-options">
      <li>
        <a
          :href="shareLinks['twitter']"
          title="Compartilhar no Twitter"
          target="_blank"
        >
          <img src="/Twitter.svg" alt="Ícone Twitter">
        </a>
      </li>
      <li>
        <a
          :href="shareLinks['whatsapp']"
          title="Compartilhar no WhatsApp"
          target="_blank"
        >
          <img src="/WhatsApp.svg" alt="Ícone WhatsApp">
        </a>
      </li>
      <li>
        <a
          :href="shareLinks['facebook']" 
          title="Compartilhar no Facebook"
          target="_blank"
        >
          <img src="/Facebook.svg" alt="Ícone Facebook">
        </a>
      </li>
    </ul>
    <div class="arrow-down"></div>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';

.container-share,
.list-social-options {
  display: flex;
}

.container-share {
  position: absolute;
  top: calc(-100% - 33px);
  left: 50%;
  flex-wrap: wrap;
  gap: 16px;
  width: max-content;
  padding: 17px 12px;
  border-radius: 8px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.15));
  transform: translateX(-50%);
}

.container-share.--mobile {
  left: 48px;
  width: auto;
  transform: initial;
}

.arrow-down {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  width: 0; 
  height: 0; 
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  
  border-top: 12px solid #fff;
}

.container-share.--arrow-down-left .arrow-down {
  left: 30px;
}

.container-share h1 {
  font: var(--font-text-secondary);
}

.list-social-options {
  gap: 24px;
}

</style>