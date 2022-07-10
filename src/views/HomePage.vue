<template>
  <div class="main">
    <div class="carrossel">
      <carousel-3d
        @before-slide-change="verificaCor"
        @after-slide-change="verificaCor"
        ref="mycarousel"
        :controls-visible="true"
        perspective="0"
        width="660"
        height="300"
        :controls-prev-html="'&#10096; '"
        :controls-next-html="'&#10097;'"
        :autoplay="true"
        :autoplayTimeout="4000"
        :autoplayHoverPause="true"
      >
        <slide class="index0" :index="0">
          <img src="@/assets/imagensTeste/pyke.jpg" alt="" />
        </slide>
        <slide class="index1" :index="1">
          <img src="@/assets/imagensTeste/gnar.jpg" alt="" />
        </slide>
        <slide class="index2" :index="2">
          <img src="@/assets/imagensTeste/yasuo.jpg" alt="" />
        </slide>
      </carousel-3d>
      <div class="carrossel-botoes">
        <div class="botao" @click="goToSlide(0)"></div>
        <div class="botao" @click="goToSlide(1)"></div>
        <div class="botao" @click="goToSlide(2)"></div>
      </div>
    </div>
    <div class="topico">
      <div class="topico-box" @click="$router.push({path:'/noticias/valorant'})">
        <div class="valorant">
          <img src="@/assets/logoValorant.png" alt="" />
        </div>
      </div>
      <div class="noticias-topico">
        <div class="noticia-exemplo direita">
          <h1 class="texto-noticia-exemplo">TÍTULO NOTÍCIA</h1>
          <img
            class="imagem-noticia-exemplo"
            src="@/assets/imagensTeste/valorantnoticia.jpg"
            alt=""
          />
        </div>
        <div class="noticia-exemplo esquerda">
          <h1 class="texto-noticia-exemplo">TÍTULO NOTÍCIA</h1>
          <img
            class="imagem-noticia-exemplo"
            src="@/assets/imagensTeste/valorantnoticia.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="topico topico-lol">
      <div class="topico-box" @click="$router.push({path:'/noticias/leagueoflegends'})">
        <div class="league"></div>
      </div>
      <div class="noticias-topico">
        <div class="noticia-exemplo direita">
          <h1 class="texto-noticia-exemplo">TÍTULO NOTÍCIA</h1>
          <img
            class="imagem-noticia-exemplo"
            src="@/assets/imagensTeste/valorantnoticia.jpg"
            alt=""
          />
        </div>
        <div class="noticia-exemplo esquerda">
          <h1 class="texto-noticia-exemplo">TÍTULO NOTÍCIA</h1>
          <img
            class="imagem-noticia-exemplo"
            src="@/assets/imagensTeste/valorantnoticia.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide,
  },
  mounted() {
    this.verificaCor();
  },
  methods: {
    goToSlide(index) {
      this.$refs.mycarousel.goSlide(index);
    },
    verificaCor() {
      let botoes = document.querySelectorAll(".carrossel-botoes .botao");
      let currentIndex = this.$refs.mycarousel.currentIndex;
      botoes.forEach((botao) => {
        this.mudaCor(botao);
      });
      this.mudaCor(botoes[currentIndex], "#fff");
    },
    mudaCor(el, cor = "#5F4CB4") {
      el.style.backgroundColor = cor;
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  top: 75px;
  display: flex;
  flex-direction: column;
}
.carrossel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 55px auto;
  width: 1500px;
  height: 400px;
}

.topico-box {
  margin: 0 auto;
  position: relative;
  height: 300px;
  margin: 0 55px 64px 55px;
  padding: 20px;
  border: 5px solid #fff;
  background-color: #14112c;
}
.topico-box .valorant,
.league {
  background-image: url("@/assets/valoranttopico.jpg");
  background-position: 50% 33%;
  background-repeat: no-repeat;
  position: absolute;
  height: 300px;
  left: -55px;
  right: -55px;
}
.topico-box .league {
  background-image: url("@/assets/leagueoflegendstopico.jpg") !important;
  background-position: center;
  background-size: cover;
}

.valorant img,
.league img {
  display: block;
  margin: -30px auto;
  max-width: 70%;
}

.noticias-topico {
  display: flex;
  flex-direction: column;
}

.noticia-exemplo {
  width: 1200px;
  height: 330px;
  background-color: #2d265f;
  margin: 0px 100px 50px 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.direita {
  align-self: flex-end;
}
.esquerda {
  align-self: flex-start;
  flex-direction: row-reverse;
}

.texto-noticia-exemplo {
  color: #fff;
  font-size: 80px;
  font-weight: 100;
}
.imagem-noticia-exemplo {
  max-width: 500px;
}

@media (min-width: 300px) and (max-width: 767px) {
  .carrossel {
    margin: 55px auto;
    width: 250px;
    height: 100px;
    background-color: #14112c;
  }
  .valorant,
  .league {
    background-position: 50% 33%;
    position: absolute;
    width: 325px;
    height: 100px;
  }
}
.carousel-3d-slide {
  cursor: pointer;
  background-color: #2d265f;
}
.carousel-3d-slide img {
  position: relative;
}
.carrossel-botoes {
  display: flex;
}
.carrossel-botoes .botao {
  background: #5f4cb4;
  width: 20px;
  height: 20px;
  margin: 10px;
  border-radius: 100%;
  cursor: pointer;
}
</style>
