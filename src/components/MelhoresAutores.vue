<template>
  <div class="autores">
      <div class="autor" v-for="(autor, index) in melhoresAutores" :key="index">
            <carousel ref="mycarousel" :perPage="Number(1)" paginationActiveColor="#fff" :paginationSize="25" paginationColor="#020013" :autoplay="true" :loop="true">
                <slide class="slide" :index="index" v-for="(noticia, index) in autor.noticiasMaisCurtidas" :key="index">
                    <div class="imagem-slide" :style="'background-image: url('+ noticia.img + ')'"></div>
                </slide>
            </carousel>
            <div class="informacoes-autor">
                <img class="icone" :src="autor.icone" alt="">
                <h1>{{autor.nome}}</h1>
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
    border: 10px solid #423981;
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
    position: relative;
    top: -65px;
}
.informacoes-autor h1{
    position: relative;
    top: -10px;
    left: 35px;
}

.VueCarousel{
    height: 100%;
}
.VueCarousel .imagem-slide{
    height: 530px;
}

.imagem-slide {
    background-position: center;
    background-size: cover;
}

</style>