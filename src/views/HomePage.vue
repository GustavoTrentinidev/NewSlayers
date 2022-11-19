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
    <NoticiasDestaque :page="page" @trocaPagina="trocaPagina"/>
    <div class="fade2"></div> 
    <ReadNoticias/>

  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ReadNoticias from "@/components/ReadNoticias.vue"
import NoticiasDestaque from "@/components/NoticiasDestaque.vue"

export default {
  components: {
    Carousel,
    Slide,
    ReadNoticias,
    NoticiasDestaque
  },
  mounted(){
    this.show()
    this.$refs.carousel.currentPage = 4
    this.$refs.carousel.goToPage(4)
    console.log(this.$refs.carousel)
  },
  data(){
    return{
      page: 0,
      currentTopico:{},
      noticiasDestaqueLol: {
        topico: 'lol',
        noticias:[]
      },
      noticiasDestaqueValorant: {
        topico: 'valorant',
        noticias: []
      },
      noticiasDestaqueTFT: {
        topico: 'tft',
        noticias:[]
      },
      noticiasDestaqueWR: {
        topico: 'wr',
        noticias:[]
      },
      noticiasDestaqueLor:{
        topico: 'lor',
        noticias:[]
    },
      imagensTopicos: [require('@/assets/carrosselHome/lol-topico.png'), require('@/assets/carrosselHome/valorant-topico.png'), require('@/assets/carrosselHome/tft-topico.png'), require('@/assets/carrosselHome/wr-topico.png'), require('@/assets/carrosselHome/lor-topico.png')] 
    }
  },
  methods: {
    show(){
      const topicos = [this.noticiasDestaqueLol, this.noticiasDestaqueValorant, this.noticiasDestaqueTFT, this.noticiasDestaqueWR, this.noticiasDestaqueLor]
      this.currentTopico = topicos[this.$refs.carousel.currentPage]
      let botaoTopico = document.querySelector('.botao-topico')
      botaoTopico.classList.add('animacao-aparecer')
      setTimeout(()=>{
          botaoTopico.classList.remove('animacao-aparecer')
        }, 500)
        this.page = this.$refs.carousel.currentPage
    },
    trocaPagina(page){
      this.$refs.carousel.currentPage = page
      this.$refs.carousel.goToPage(page)
    }
  }
};
</script>

<style scoped>
.error{
  color:white;
  font-size: 30px;
  margin: auto 0;
}
.box-loading{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 415px;   
}
.loading{
    width: 100px;
    display: flex;
}
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
  margin: auto 0;
}

.VueCarousel button {
  position: absolute;
  right: 200px;
}

.fade{
  height: 100px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #060126);
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
  background-image: linear-gradient(#060126,rgba(0, 0, 0, 0));
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
  height: 500px;
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
