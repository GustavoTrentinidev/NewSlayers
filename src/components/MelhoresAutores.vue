<template>
  <div class="autores">
      <div class="autor" v-for="(autor, index) in melhoresAutores" :key="index">
            <carousel-3d :ref="mycarousel" display="1" width="360" height="480" :disable3d="true" border="0" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true">
                <slide class="slide" :style="'background-image: url('+ noticia.img + ')'" :index="index" v-for="(noticia, index) in autor.noticiasMaisCurtidas" :key="index">
                    <div class="carrossel-botoes">
                        <div class="botao" v-for="(noticia, index) in autor.noticiasMaisCurtidas" :key="index" @click="goToSlide($event,index)"></div>
                    </div>
                </slide>
            </carousel-3d>
            <div class="informacoes-autor">
                <img class="icone" :src="autor.icone" alt="">
                <h1>{{autor.nome}}</h1>
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
  methods:{
    goToSlide(e,index){
        console.log(e.target.parentNode.parentNode.parentNode.parentNode,index)
        console.log(this.$refs.mycarousel)
    }
  },
    data(){
        return{
            melhoresAutores: [
                {
                icone: require('@/assets/melhoresAutoresImg/nicolas.jpg'),
                nome: "yK1ngz",
                noticiasMaisCurtidas: [
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic1.jpg'),
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic2.jpg'),
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic3.jpg')
                    }
                ]
                },
                {
                icone: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),
                nome: "Gragustavo",
                noticiasMaisCurtidas: [
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic4.jpg'),
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic5.jpg'),
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic6.jpg')
                    }
                ]
                },
                {
                icone: require('@/assets/melhoresAutoresImg/amanda.jpg'),
                nome: "Stanlety",
                noticiasMaisCurtidas: [
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic7.jpg'),
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic8.jpg'),
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic9.jpg')
                    }
                ]
                }, 
            ]
        }
    }
}
</script>

<style scoped>
.autores{
    margin-top: 100px;
    display: flex;
}
.autor{
    position: relative;
    width: 430px;
    height: 530px;
    background-color: #423981;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.informacoes-autor .icone{
    max-width: 70px;
    max-height: 70px;
    border-radius: 100%;
    top: -10px;
    left: 33px;
    position: relative;
}
.autor:not(:first-child):not(:last-child) {
    top: -67.5px
}
.informacoes-autor{
    display: flex;
}
.informacoes-autor h1{
    position: relative;
    top: -10px;
    left: 35px;
}
.slide {
    background-position: center;
}

.carrossel-botoes {
  display: flex;
  position: absolute;
  bottom: 70px;
  left: 35%;
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