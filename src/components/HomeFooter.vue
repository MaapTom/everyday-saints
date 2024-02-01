<script setup>
import { PhHeart } from '@phosphor-icons/vue';
import GithubMark from "../components/icons/GithubMark.vue";
</script>

<template>
  <footer class="footer">
    <a
      href="https://github.com/maaptom"
      class="footer__anchor-github-link"
      target="_blank"
    >
      <GithubMark/>
      <span>
        <h5 class="footer__anchor-github-link__title">Feito com amor</h5>
        <PhHeart
          color="#009254"
          :size="16"
          weight="fill"
          aria-describedby="describedby-icon"
          role="img"
        >
          <title id="describedby-icon" lang="pt">Ícone de sino</title>
        </PhHeart>
      </span>
    </a>
  </footer>
</template>

<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';

.footer {
  width: 100%;
  padding: var(--medium) var(--medium-xs);
}

.footer__anchor-github-link {
  display: flex;
  align-items: center;
  gap: var(--medium);
  text-decoration: none;
}

.footer__anchor-github-link span {
  display: flex;
  align-items: center;
  gap: var(--small-s);
}

.footer__anchor-github-link__title {
  font: var(--font-text);
  text-decoration: none;
  color: var(--black);
}

@media(min-width: 800px) {
  .footer {
    padding: var(--medium);
  }
}

@media(min-width: 1200px) {
  .footer {
    max-width: 1600px;
    margin: 0 auto;
    padding: var(--medium) var(--extra-large);
  }
}

@media(min-width: 1600px) {
  .footer {
    max-width: 1600px;
    margin: 0 auto;
    padding: var(--medium) 0px;
  }
}

</style>