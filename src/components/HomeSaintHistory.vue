<script setup>
import { useWindowSize } from '@vueuse/core';
import { breakpoints } from '../utils/breakpoints.js';
import { PhHandsPraying, PhLink } from '@phosphor-icons/vue';

const { width } = useWindowSize();
</script>

<template>
  <section>
    <div class="wrapper-paragraph">
      <h4 class="wrapper-paragraph__title">Origem</h4>
      <p class="wrapper-paragraph__text">
        Nasceu em Corinaldo, centro da Itália, no ano de 1890. Era de família pobre,
        numerosa e camponesa, mas muito temente a Deus. Com a morte do pai, Maria
        Goretti, com os seus, foram morar num local perto de Roma, sob o mesmo teto de
        uma família composta por um pai viúvo e dois filhos, sendo um deles Alessandro.
      </p>
    </div>

    <div class="wrapper-paragraph">
      <h4 class="wrapper-paragraph__title">Martírio</h4>
      <p class="wrapper-paragraph__text">
        Aconteceu que este jovem, por várias vezes, tentou seduzir Goretti, que ficava
        em casa para cuidar dos irmãozinhos. E, por ser uma menina temente a Deus, sua
        resposta era cheia de maturidade: “Não, não, Deus não quer; é pecado!”
      </p>
      <p class="wrapper-paragraph__text">
        Santa Maria Goretti, certa vez, estava em casa e em oração, por isso, quando o 
        jovem, que era de maior estatura e idade, tentou novamente seduzi-la, Goretti 
        resistiu com mais um grande não.
      </p>
      <p class="wrapper-paragraph__text">
         A resposta de Alessandro foram 14 facadas, enquanto da parte de Goretti, 
          percebemos a santidade na confidência à sua mãe: “Sim, o perdoo… Lá no céu,
          rogarei para que ele se arrependa… Quero que ele esteja junto comigo na glória eterna”.
      </p>
    </div>

    <div class="wrapper-paragraph">
      <h4 class="wrapper-paragraph__title">Conversão</h4>
      <p class="wrapper-paragraph__text">
        O martírio desta adolescente de apenas 12 anos foi a causa da conversão do jovem assassino,
        que, depois de sair da cadeia, esteve com as 400 mil pessoas, na Praça de São Pedro, na ocasião
        da canonização dessa santa, ao lado da mãe dela, que o perdoou também.
      </p>
      <p class="wrapper-paragraph__text">
        Santa Maria Goretti manteve-se pura e santa por causa do seu amor a Deus, por isso, reina na glória com Cristo.
      </p>
    </div>

    <div class="wrapper-paragraph">
      <span class="wrapper-paragraph__title-icon">
        <PhHandsPraying
          color="#000"
          :size="width < breakpoints.largePhoneDevice ? 24 : 26"
          aria-describedby="describedby-icon"
          role="img"
        >
          <title id="describedby-icon" lang="pt">Ícone de mãos orando</title>
        </PhHandsPraying>
        <h4 class="wrapper-paragraph__title">Oração</h4>
      </span>
      <p class="wrapper-paragraph__text">
        “Santa Maria Goretti, interceda por mim junto a Deus para que eu possa ser também casta e pura, de corpo, mente e coração!
        Que eu não tema entregar a minha vida por amor a Deus! Amém!”
      </p>
    </div>
    
    <div class="wrapper-paragraph">
      <h4 class="wrapper-paragraph__title">Fonte</h4>
      <a href="#top" class="wrapper-paragraph__link">
        <PhLink
          color="#000"
          :size="width < breakpoints.largePhoneDevice ? 24 : 26"
          aria-describedby="describedby-icon"
          role="img"
        >
          <title id="describedby-icon" lang="pt">Ícone de link</title>
        </PhLink>
        Canção Nova
      </a>
    </div>
  </section>
</template>

<style setup>
@import '../assets/base.css';
@import '../assets/main.css';

.wrapper-paragraph {
  margin: var(--medium-x) 0 0 0;
}

.wrapper-paragraph__title {
  font: var(--font-text-secondary);
  font-weight: 600;
}

.wrapper-paragraph__text {
  margin: var(--small-xl) 0 var(--small-x) 0;
  font: var(--font-text);
  line-height: 2.4rem;
  color: var(--gray800);
}

.wrapper-paragraph__title-icon {
  display: flex;
  gap: var(--small-s);
}

.wrapper-paragraph__link {
  display: flex;
  align-items: center;
  margin: var(--small-xl) 0 var(--small-x) 0;
  gap: var(--small-s);
  font: var(--font-text);
  color: var(--gray800);
  max-width: max-content;
}

</style>