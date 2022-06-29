<template>
    <div class="main">
        <div class="carrossel">
            <div class="botao" id="prev"></div>
              <carousel-3d :autoplay="true" :autoplayTimeout=4000 :autoplayHoverPause="true" perspective=0 width=660 height=250 :onMainSlideClick="carrossas">
                <slide :index="0">
                    <img src="@/assets/bgImage1.png" alt="">
                </slide>
                <slide :index="1">
                    <img src="@/assets/bgImage2.png" alt="">
                </slide>
                <slide :index="2">
                    <img src="@/assets/valoranttopico.jpg" alt="">
                </slide>
            </carousel-3d>
            <div class="botao" id="next"></div>
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
    align-items: center;
    margin: 55px auto;
    width: 1500px;
    height: 400px;
    background-color: #14112C;
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
    top: -100px;
    position: relative;
}
.botao{
    background: aqua;
    width: 20px;
    height: 20px;
}
</style>