<template>
  <div class="main">
    <div class="carrossel">
      <carousel navigationPrevLabel="" navigationNextLabel="" ref="carousel" :perPage="Number(1)" :autoplayTimeout="Number(5000)" @pageChange="show()" :navigationEnabled="true" :navigationClickTargetSize="Number(20)" paginationActiveColor="#fff" :paginationSize="35" paginationColor="#020013" :autoplay="true" :loop="true">
        <slide v-for="(imagem,index) in imagensTopicos" :key="index">
          <img :src="imagem" alt="" />
        </slide>
      </carousel>
      <div class="botao-topico" @click="$router.push({path:'/topicos/'+ currentTopico.topico})">Ver notícias</div>
      <div class="fade"></div>  
    </div>
    <div class="noticias">
      <h1>Notícias em destaque</h1>
      <div class="noticias-block">
        <div v-for="(noticia, index) in currentTopico.noticias" :key="index" class="noticia-topico " @click="$router.push({path: '/noticia/1'})">
          <div class="imagem-noticia" :style="`background-image: url('${noticia.img}')`"></div>
          <div class="other-info">
            <h1>{{noticia.titulo | truncate(10, '...')}}</h1>
            <h2 style="color: #fff">{{noticia.texto | truncate(100, '...') }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="button-holder">
      <button @click="$router.push({path:'/topicos/'+ currentTopico.topico})" class="vermais">Ver mais &#8594;</button>
    </div>
    <div class="fade2"></div> 
    <MelhoresAutores/>

  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import MelhoresAutores from "@/components/MelhoresAutores.vue"

export default {
  components: {
    Carousel,
    Slide,
    MelhoresAutores
  },
  mounted(){
    this.trocarNoticias()
  },
  data(){
    return{
      currentTopico:{},
      noticiasDestaqueLol: {
        topico: 'lol',
        noticias:[
        {img: require('@/assets/melhoresAutoresImg/cinematic1.jpg') ,titulo: 'dolor sit', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic2.jpg') ,titulo: 'dolor sit', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic3.jpg'),titulo: 'dolor sit', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
      ]},
      noticiasDestaqueValorant: {
        topico: 'valorant',
        noticias: [
        {img: require('@/assets/melhoresAutoresImg/cinematic4.jpg'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic6.jpg'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic7.jpg'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        ]},
      noticiasDestaqueWR: {
        topico: 'wr',
        noticias:[
        {img: require('@/assets/melhoresAutoresImg/cinematic8.jpg'),titulo: 'amet, consectetur', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic9.jpg'),titulo: 'amet, consectetur', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/imagensTeste/wild.jpg'),titulo: 'amet, consectetur', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        ]},
      noticiasDestaqueTFT: {
        topico: 'tft',
        noticias:[
        {img: require('@/assets/carrosselHome/tft-topico.png'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/carrosselHome/tft-topico.png'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/carrosselHome/tft-topico.png'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        ]},
      noticiasDestaqueLor:{
        topico: 'lor',
        noticias:[
        {img: require('@/assets/carrosselHome/lor-topico.png'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/carrosselHome/lor-topico.png'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/carrosselHome/lor-topico.png'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
      ]},
      imagensTopicos: [require('@/assets/carrosselHome/lol-topico.png'), require('@/assets/carrosselHome/valorant-topico.png'), require('@/assets/carrosselHome/wr-topico.png'), require('@/assets/carrosselHome/tft-topico.png'), require('@/assets/carrosselHome/lor-topico.png')] 
    }
  },
  methods: {
    show(){
      let noticias = document.querySelectorAll('.noticia-topico')
      noticias.forEach( noticia =>{
        noticia.classList.add('animacao-aparecer')
        setTimeout(()=>{
          noticia.classList.remove('animacao-aparecer')
        }, 500)
      })
      let botaoTopico = document.querySelector('.botao-topico')
      botaoTopico.classList.add('animacao-aparecer')
      setTimeout(()=>{
          botaoTopico.classList.remove('animacao-aparecer')
        }, 500)
      this.trocarNoticias()
    },
    trocarNoticias(){
      const topicos = [this.noticiasDestaqueLol, this.noticiasDestaqueValorant, this.noticiasDestaqueWR, this.noticiasDestaqueTFT, this.noticiasDestaqueLor]
      this.currentTopico = topicos[this.$refs.carousel.currentPage]
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}
.carrossel{
  position: relative;
  height: 700px;
}
.botao-topico{
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #020013;
  font-weight: normal;
  color: #fff;
  position: absolute;
  border-radius: 10px;
  z-index: 100;
  width: 220px;
  height: 60px;
  right: 260px;
  bottom: 140px;
  text-transform: uppercase;
  cursor: pointer;
}
.VueCarousel{
  height: 700px;
}

.VueCarousel img {
  width: 100%;
  height: 100%;
  position: relative;
}

.VueCarousel button {
  position: absolute;
  right: 200px;
}

.fade{
  height: 100px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #0D0641);
  top: 600px;
  position: absolute;
}

.button-holder{
  position: relative;
  background-color: #0D0641;
  height: 50px;
}

.vermais{
  position: absolute;
  font-size: 20px;
  width: 130px;
  right: 150px;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Share Tech', sans-serif;
  color: #0D0641;
  border-radius: 4px;
  font-weight: 700;
}

.fade2{
  height: 100px;
  width: 100%;
  background-image: linear-gradient(#0D0641,rgba(0, 0, 0, 0));
}
.noticias{
  width: 100%;
  background-color: #0D0641;
  display: flex;
  flex-direction: column;
  padding: 0 80px 30px 80px;
  box-sizing: border-box;
}

.noticias h1{
  color: #fff;
  text-align: center;
  font-weight: normal;
}
.noticias-block{
  border-top: 1px solid#fff;
  border-bottom: 1px solid #fff;
  height: 100%;
  display: flex;
  justify-content: space-around;
  gap:50px;
}
.noticia-topico{
  width: 650px;
  height: 300px;
  background-color: #020013;
  margin: 100px auto 100px auto;
  border-left: 2px solid#fff;
  border-bottom: 2px solid #fff;
  display: flex;
  cursor: pointer;
}
.animacao-aparecer{
  animation: appear ease-in-out 600ms;
}
.imagem-noticia{
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.other-info{
  font-size: 15px;
}
.other-info h1{
  font-weight: bold;
  text-align: initial;
  margin-left: 20px;
}
.other-info h2{
  display: block;
  max-width: 300px;
  margin-left: 10px;
  font-weight: normal;
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@media (min-width: 300px) and (max-width: 767px) {
  .noticias-block {
    display: flex;
    flex-direction: column;
  }
}
</style>
