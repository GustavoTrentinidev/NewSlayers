<template>
  <div class="main">
    <div class="carrossel">
      <carousel ref="carousel" :perPage="Number(1)" :autoplayTimeout="Number(5000)" @pageChange="show()" :navigationEnabled="true" :navigationClickTargetSize="Number(20)" paginationActiveColor="#fff" :paginationSize="35" paginationColor="#020013" :autoplay="true" :loop="true">
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
      <div class="fade"></div>  
    </div>
    <div class="noticias">
      <h1>Notícias em destaque</h1>
      <div class="noticias-block">
        <div v-for="(noticia, index) in currentTopico" :key="index" class="noticia-topico ">
          <div class="imagem-noticia" :style="`background-image: url('${noticia.img}')`"></div>
          <div class="other-info">
            <h1>{{noticia.titulo}}</h1>
            <h2 style="color: #fff">{{noticia.texto | truncate(100, '...') }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="fade2"></div> 
    <div class="about">
      <h1>SOBRE O SITE</h1>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
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
  mounted(){
    this.trocarNoticias()
  },
  data(){
    return{
      currentTopico:{},
      noticiasDestaqueTopico1: [
        {img: require('@/assets/melhoresAutoresImg/cinematic1.jpg') ,titulo: 'dolor sit', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic2.jpg') ,titulo: 'dolor sit', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic3.jpg'),titulo: 'dolor sit', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
      ],
      noticiasDestaqueTopico2: [
        {img: require('@/assets/melhoresAutoresImg/cinematic4.jpg'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic6.jpg'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic7.jpg'),titulo: 'Lorem ipsum', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        
        ],
      noticiasDestaqueTopico3: [
        {img: require('@/assets/melhoresAutoresImg/cinematic8.jpg'),titulo: 'amet, consectetur', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/melhoresAutoresImg/cinematic9.jpg'),titulo: 'amet, consectetur', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {img: require('@/assets/imagensTeste/wild.jpg'),titulo: 'amet, consectetur', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        ]
    }
  },
  computed: {
      currentIndex: {
        cache: false,
        get() {
          return this.$refs.carousel ? this.$refs.carousel.currentPage : 0;
        }
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
      this.trocarNoticias()
    },
    trocarNoticias(){
      const topicos = [this.noticiasDestaqueTopico1, this.noticiasDestaqueTopico2, this.noticiasDestaqueTopico3]
      this.currentTopico = topicos[this.currentIndex]
    }
  }
};
</script>

<style scoped>
.main {
  position: relative;
  top: 75px;
  display: flex;
  flex-direction: column;
}
.carrossel{
  position: relative;
  height: 700px;
}
.VueCarousel{
  height: 700px;
}

.VueCarousel img {
  width: 1920px;
  height: 100%;
  position: relative;
  top: -200px;
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
.about{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about h1{
  font-size: 100px;
  text-align: center;
}
.about h4{
  font-size: 40px;
  font-weight: normal;
  text-align: center;
  max-width: 1200px;
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

/* @media (min-width: 300px) and (max-width: 767px) {
  .carrossel {
    margin: 55px auto;
    width: 250px;
    height: 100px;
    background-color: #14112c;
  }
} */
</style>
