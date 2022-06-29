<template>
    <div class="main">
        <div class="carrossel">
              <carousel-3d @before-slide-change="mudarCor" @after-slide-change="mudarCor" ref="mycarousel" :controls-visible="true" perspective=0 width=660 height=300 :controls-prev-html="'&#10096; '" :controls-next-html="'&#10097;'" :autoplay="true" :autoplayTimeout=4000 :autoplayHoverPause="true">
                <slide class="index0" :index="0">
                    <img src="@/assets/imagensTeste/pyke.jpg" alt="">
                </slide>
                <slide class="index1" :index="1">
                    <img src="@/assets/imagensTeste/gnar.jpg" alt="">
                </slide>
                <slide class="index2" :index="2">
                    <img src="@/assets/imagensTeste/yasuo.jpg" alt="">
                </slide>
            </carousel-3d>
            <div class="carrossel-botoes">
                <div class="botao" @click="goToSlide(0)" ref="botao0"></div>
                <div class="botao" @click="goToSlide(1)" ref="botao1"></div>
                <div class="botao" @click="goToSlide(2)" ref="botao2"></div>
            </div>
        </div>
        <div class="topico">
            <div class="valorant">
                <img src="@/assets/logoValorant.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    components: {
    Carousel3d,
    Slide
  },
  mounted(){
    this.mudarCor()
  },
  methods:{
    goToSlide(index) {
        this.$refs.mycarousel.goSlide(index)
    },
    mudarCor(){
        if (this.$refs.mycarousel.currentIndex == 0){
            this.$refs.botao0.style.backgroundColor = '#fff'
            this.$refs.botao1.style.backgroundColor = '#5F4CB4'
            this.$refs.botao2.style.backgroundColor = '#5F4CB4'
        } else if(this.$refs.mycarousel.currentIndex == 1){
            this.$refs.botao0.style.backgroundColor = '#5F4CB4'
            this.$refs.botao1.style.backgroundColor = '#fff'
            this.$refs.botao2.style.backgroundColor = '#5F4CB4'
        } else if(this.$refs.mycarousel.currentIndex == 2){
            this.$refs.botao0.style.backgroundColor = '#5F4CB4'
            this.$refs.botao1.style.backgroundColor = '#5F4CB4'
            this.$refs.botao2.style.backgroundColor = '#fff'
        }
    }
  }
}
</script>

<style>
.main{
    height: 100vh;
    position: relative;
    top: 75px;
    display: flex;
    flex-direction: column;
}
.carrossel{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 55px auto;
    width: 1500px;
    height: 400px;
}

.topico{
    margin: 0 auto;
    position: relative;
    height: 300px;
    margin: 0 55px;
    padding: 20px;
    border: 5px solid #fff;
    background-color: #14112C;
}
.topico .valorant{
    background-image: url("@/assets/valoranttopico.jpg");
    background-position: 50% 33%;
    background-repeat: no-repeat;
    position: absolute;
    height: 300px;
    left: -55px;
    right: -55px;
}
.valorant img{
    display: block;
    margin: -30px auto;
    max-width: 70%;
}

@media (min-width: 300px) and (max-width: 767px) {
    .carrossel{
        margin: 55px auto;
        width: 250px;
        height: 100px;
        background-color: #14112C;
    }
    .valorant{
        background-image: url("@/assets/valoranttopico.jpg");
        background-position: 50% 33%;
        position: absolute;
        width: 325px;
        height: 100px;
    }
}
.carousel-3d-slide{
    cursor: pointer;
    background-color: #2D265F;
}
.carousel-3d-slide img {
    position: relative;
}
.carrossel-botoes{
    display: flex;
}
.carrossel-botoes .botao{
    background: #5F4CB4;
    width: 20px;
    height: 20px;
    margin: 10px;
    border-radius: 100%;
    cursor: pointer;
}
.carousel-3d-controls .prev{
    color: #fff;
    left: 100px;
}
.carousel-3d-controls .next{
    color: #fff;
    right: 100px;
}
</style>