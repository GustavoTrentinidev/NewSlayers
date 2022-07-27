<template>
  <div class="main">
    <div class="carrossel">
      <carousel :perPage="Number(1)" :navigationEnabled="true" :navigationClickTargetSize="Number(20)" paginationActiveColor="#fff" :paginationSize="40" paginationColor="#020013" :autoplay="true" :loop="true">
        <slide>
          <img src="@/assets/imagensTeste/pyke.jpg" alt="" />
        </slide>
        <slide>
          <img src="@/assets/imagensTeste/gnar.jpg" alt="" />
        </slide>
        <slide>
          <img src="@/assets/imagensTeste/yasuo.jpg" alt="" />
        </slide>
      </carousel>
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
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
html{
  max-width: 1920px;
}
.main {
  position: relative;
  top: 75px;
  display: flex;
  flex-direction: column;
}
.carrossel{
  height: 700px;
}
.VueCarousel{
  height: 700px;
}
.VueCarousel img {
  width: 1920px;
  height: 100%;
}

.VueCarousel button {
  position: absolute;
  right: 200px;
}
.topico-box {
  position: relative;
  height: 300px;
  margin: 64px 55px 64px 55px;
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
</style>
