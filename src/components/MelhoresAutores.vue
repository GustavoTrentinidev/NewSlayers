<template>
  <div class="autores">
      <div class="autor" v-for="(autor, index) in melhoresAutores" :key="index">
            <carousel-3d  ref="mycarousel" @before-slide-change="verificaCor" @after-slide-change="verificaCor" display="1" width="360" height="480" :disable3d="true" border="0" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true">
                <slide class="slide" :style="'background-image: url('+ noticia.img + ')'" :index="index" v-for="(noticia, index) in autor.noticiasMaisCurtidas" :key="index">
                <div class="carrossel-botoes">
                    <div class="botao" v-for="(noticia, index) in autor.noticiasMaisCurtidas" :key="index" @click="verificacao($event,index)"></div>
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
  mounted(){
    this.verificaCor()
  },
  methods:{
    verificacao(e,index){
        var retornoIf = []
        this.$refs.mycarousel.forEach(carrossel => {
            if(e.target.parentNode.parentNode.parentNode.parentNode == carrossel.$el){
                retornoIf.push(true)
            }else{
                retornoIf.push(false)
            }
        });
        console.log(retornoIf)
        for (var i in retornoIf){
            if(retornoIf[i]){
                console.log(i)
                console.log(this.$refs.mycarousel[i])
                this.goToSlide(index,this.$refs.mycarousel[i])
            }
        }
    },
    goToSlide(index, elemento){
        elemento.goSlide(index)
    },
    verificaCor(){
        this.$refs.mycarousel.forEach(carrossel =>{
            carrossel.$el.childNodes[0].childNodes.forEach(slide => {
                slide.childNodes[0].childNodes.forEach(botao => {
                    botao.style.backgroundColor = '#5F4CB4'
                })
                slide.childNodes[0].childNodes[carrossel.currentIndex].style.backgroundColor = '#fff'
            })
        })
    },
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
  z-index: 1000;
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