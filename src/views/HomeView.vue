<script setup>
import { useWindowSize } from "@vueuse/core";
import Separator from "../components/Separator.vue";
import HomeHeader from "../components/HomeHeader.vue";
import ButtonIcon from "../components/ButtonIcon.vue";
import GithubMark from "../components/icons/GithubMark.vue";
import { PhPlusCircle, PhShareFat, PhHandsPraying, PhLink, PhHeart } from "@phosphor-icons/vue";

const { width } = useWindowSize();
</script>

<template>
  <HomeHeader />
  <main id="home-content">
    <section class="section-introduction">
      <div class="main-saint-image">
        <img
          :src="width >= 1200 ? '/santa_maria_goretti_expand.jpg' : '/santa_maria_goretti.jpg'"
          alt="Imagem de Santa Maria Goretti, por..."
        />
      </div>

      <Separator
        :width="2"
        :height="93" 
        backgroundColor="#EFEFEF"
        v-show="width < 800"
      />

      <div class="wrapper-apresentation">
        <div class="wrapper-titles-apresentation">
          <h2 class="apresentation-subtitle"><span class="text-expand">06</span> De Julho</h2>
          <div
            class="wrapper-main-title"
            v-show="width >= 800"
          >
            <h1 class="saint-title filled-red">Santa Maria Goretti</h1>
          </div>
          <div class="apresentation-details">
            <h3>Virgem e Mártir</h3>
            <h3>1890 - 1902</h3>
          </div>
          <p
            class="saint-description"
            v-show="width > 1200"
          >
            Nasceu em Corinaldo, centro da Itália, no ano de 1890. Era de família pobre, numerosa e camponesa,
            mas muito temente a Deus. Com a morte do pai, Maria Goretti, com os seus, foram morar num local perto de Roma,
            sob o mesmo teto de uma família composta por um pai viúvo e dois filhos, sendo um deles Alessandro.
          </p>
          <div class="wrapper-buttons-apresentation">          
            <ButtonIcon
              text-value="Ler Mais"
              :largeButton="true"
              iconName="Mais"
              backgroundColor="#EFEFEF"
              backgroundHover="#DFDFDF"
              v-show="width >= 1200"
            >
              <PhPlusCircle
                color="#000"
                :size="width < 480 ? 22 : 26"
                aria-describedby="describedby-icon"
                role="img"
              >
                <title id="describedby-icon" lang="pt">Ícone de mais</title>
              </PhPlusCircle>
            </ButtonIcon>
            <ButtonIcon
              text-value="Compartilhar"
              :largeButton="true"
              iconName="Compartilhar"
              backgroundColor="#EFEFEF"
              backgroundHover="#DFDFDF"
              v-show="width >= 800"
            >
              <PhShareFat
                color="#000"
                :size="width < 480 ? 22 : 26"
                aria-describedby="describedby-icon"
                role="img"
              >
                <title id="describedby-icon" lang="pt">Ícone de seta curva</title>
              </PhShareFat>
            </ButtonIcon>
          </div>
        </div>
      </div>
    </section>

    <div
      class="wrapper-main-title"
      v-show="width < 800"
    >
      <h1 class="saint-title">Santa Maria Goretti</h1>
      <Separator
        :width="100"
        :height="3"
        backgroundColor="#A60000"
        :fullWidth="true"
      />
    </div>

    <section
      class="section-history"
      v-show="width < 1200"
    >
      <div class="wrapper-paragraph">
        <h4 class="title-paragraph">Origem</h4>
        <p class="text-paragraph">
          Nasceu em Corinaldo, centro da Itália, no ano de 1890. Era de família pobre,
          numerosa e camponesa, mas muito temente a Deus. Com a morte do pai, Maria
          Goretti, com os seus, foram morar num local perto de Roma, sob o mesmo teto de
          uma família composta por um pai viúvo e dois filhos, sendo um deles Alessandro.
        </p>
      </div>

      <div class="wrapper-paragraph">
        <h4 class="title-paragraph">Martírio</h4>
        <p class="text-paragraph">
          Aconteceu que este jovem, por várias vezes, tentou seduzir Goretti, que ficava
          em casa para cuidar dos irmãozinhos. E, por ser uma menina temente a Deus, sua
          resposta era cheia de maturidade: “Não, não, Deus não quer; é pecado!”
        </p>
        <p class="text-paragraph">
          Santa Maria Goretti, certa vez, estava em casa e em oração, por isso, quando o 
          jovem, que era de maior estatura e idade, tentou novamente seduzi-la, Goretti 
          resistiu com mais um grande não.
        </p>
        <p class="text-paragraph">
          A resposta de Alessandro foram 14 facadas, enquanto da parte de Goretti, 
          percebemos a santidade na confidência à sua mãe: “Sim, o perdoo… Lá no céu,
          rogarei para que ele se arrependa… Quero que ele esteja junto comigo na glória eterna”.
        </p>
      </div>

      <div class="wrapper-paragraph">
        <h4 class="title-paragraph">Conversão</h4>
        <p class="text-paragraph">
          O martírio desta adolescente de apenas 12 anos foi a causa da conversão do jovem assassino,
          que, depois de sair da cadeia, esteve com as 400 mil pessoas, na Praça de São Pedro, na ocasião
           da canonização dessa santa, ao lado da mãe dela, que o perdoou também.
        </p>
        <p class="text-paragraph">
          Santa Maria Goretti manteve-se pura e santa por causa do seu amor a Deus, por isso, reina na glória com Cristo.
        </p>
      </div>

      <div class="wrapper-paragraph">
        <span class="title-icon">
          <PhHandsPraying
            color="#000"
            :size="width < 480 ? 24 : 26"
            aria-describedby="describedby-icon"
            role="img"
          >
            <title id="describedby-icon" lang="pt">Ícone de mãos orando</title>
          </PhHandsPraying>
          <h4 class="title-paragraph">Oração</h4>
        </span>
        <p class="text-paragraph">
          “Santa Maria Goretti, interceda por mim junto a Deus para que eu possa ser também casta e pura, de corpo, mente e coração!
          Que eu não tema entregar a minha vida por amor a Deus! Amém!”
        </p>
      </div>

      <div class="wrapper-paragraph">
        <h4 class="title-paragraph">Fonte</h4>
        <a href="#top" class="link-history">
          <PhLink
            color="#000"
            :size="width < 480 ? 24 : 26"
            aria-describedby="describedby-icon"
            role="img"
          >
            <title id="describedby-icon" lang="pt">Ícone de link</title>
          </PhLink>
          Canção Nova
        </a>
      </div>
    </section>


    <div class="wrapper-buttons">
      <ButtonIcon
        text-value="Compartilhar"
        :largeButton="true"
        iconName="Compartilhar"
        backgroundColor="#EFEFEF"
        backgroundHover="#DFDFDF"
        v-show="width < 800"
      >
        <PhShareFat
          color="#000"
          :size="width < 480 ? 22 : 26"
          aria-describedby="describedby-icon"
          role="img"
        >
          <title id="describedby-icon" lang="pt">Ícone de seta curva</title>
        </PhShareFat>
      </ButtonIcon>
    </div>
  </main>

  <footer class="footer">
    <a href="https://github.com/maaptom" class="footer-anchor" target="_blank" >
      <GithubMark/>
      <span>
        <h5 class="credits-title">Feito com amor</h5>
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
@import "../assets/base.css";
@import "../assets/main.css";

#home-content {
  width: 100%;
  padding: 0 var(--medium-xs);
}

.section-introduction {
  display: flex;
  align-items: center;
  gap: 16px;
}

.main-saint-image {
  flex: 1;
  max-width: 242px;
  max-height: 226px;
  border-radius: 16px;
  overflow: hidden;
}

.main-saint-image img {
  display: block;
  max-width: 100%;
}

.wrapper-main-title {
  width: max-content;
}

.saint-title {
  margin: var(--medium-x) 0 6px 0;
  font: var(--font-subtitle);
}

.wrapper-apresentation {
  display: flex;
  justify-content: center;
  flex: 1;
}

.wrapper-titles-apresentation {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 6px;
}

.apresentation-subtitle {
  font: var(--font-text);
  font-weight: 600;
}

.apresentation-subtitle .text-expand {
  font: var(--font-title-secondary);
}

.apresentation-details h3 {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font: var(--font-text-tertiary);
  font-weight: 400; 
}

.saint-description {
  max-width: 572px;
  font: var(--font-text);
}

.wrapper-buttons-apresentation {
  display: flex;
  gap: 16px;
}

.wrapper-paragraph {
  margin: var(--medium-x) 0 0 0;
}

.title-paragraph {
  font: var(--font-text-secondary);
  font-weight: 600;
}

.title-icon {
  display: flex;
  gap: var(--small-s);
}

.text-paragraph {
  margin: var(--small-xl) 0 var(--small-x) 0;
  font: var(--font-text);
  line-height: 2.4rem;
  color: var(--gray800);
}

.link-history {
  display: flex;
  align-items: center;
  margin: var(--small-xl) 0 var(--small-x) 0;
  gap: var(--small-s);
  font: var(--font-text);
  color: var(--gray800);
  max-width: max-content;
}

.wrapper-buttons {
  display: flex;
  flex-wrap: wrap;
  margin: var(--medium) 0 0 0;
  gap: var(--small);
}

.footer {
  width: 100%;
  padding: var(--medium) var(--medium-xs);
}

.footer-anchor {
  display: flex;
  align-items: center;
  gap: var(--medium);
  text-decoration: none;
}

.footer-anchor span {
  display: flex;
  align-items: center;
  gap: var(--small-s);
}

.credits-title {
  font: var(--font-text);
  text-decoration: none;
  color: var(--black);
}

@media(min-width: 485px) {
  .apresentation-subtitle .text-expand {
    font-size: clamp(3.2rem, 3.2rem + 2vw, 4.8rem);
  }
  .apresentation-subtitle {
    font-size: clamp(1.6rem, 2rem, 3.2rem);
  }
}

@media(min-width: 800px) {
  #home-content {
    padding: 0 var(--medium);
  }

  .section-introduction {
    gap: var(--extra-large);
  }

  .wrapper-titles-apresentation {
    gap: var(--small);
  }

  .saint-title {
    margin: 0px;
    font: var(--font-title-secondary);
    padding: var(--small-xl);
  }

  .filled-red {
    background-color: var(--red);
    border-radius: 8px;
    color: var(--white);
  }

  .apresentation-details {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .apresentation-details h3 {
    font: var(--font-text-secondary);
  }

  .footer {
    padding: var(--medium);
  }
}

@media(min-width: 1200px) {
  #home-content {
    padding: 0 var(--extra-large);
  }
  .section-introduction .main-saint-image {
    order: 2;
  }

  .main-saint-image {
    max-width: 477px;
    max-height: 656px;
    height: 70vh;
  }

  .footer {
    max-width: 1600px;
    margin: 0 auto;
    padding: var(--medium) var(--extra-large);
  }
}

@media(min-width: 1600px) {
  #home-content {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0px;
  }

  .footer {
    max-width: 1600px;
    margin: 0 auto;
    padding: var(--medium) 0px;
  }
}

</style>