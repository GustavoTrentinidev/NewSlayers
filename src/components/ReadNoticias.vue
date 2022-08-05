<template>
    <div>
        <div class="container">
            <div v-for="(noticia, index) in noticias" :key="index" class="noticia">
                <img draggable="false" :src="noticia.img" alt="">
                <div class="titulo-holder">
                    <div class="titulo">Lorem Ipsum</div>
                </div>
            </div>
            
        </div>  
        <div class="showHide" @click="displayNone = !displayNone, showHide()" v-if="noticias.length > 12">
            <div :class="{opened: displayNone}" class="rotateArrow">
                <div class="flecha esquerdaCima"></div>
                <div class="flecha direitaCima"></div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            displayNone: true,
            noticias: [
                {img: require('@/assets/melhoresAutoresImg/cinematic1.jpg')},
                {img: require('@/assets/melhoresAutoresImg/cinematic2.jpg')},
                {img: require('@/assets/melhoresAutoresImg/cinematic3.jpg')},
                {img: require('@/assets/melhoresAutoresImg/cinematic4.jpg')},
                {img: require('@/assets/melhoresAutoresImg/cinematic7.jpg')},
                {img: require('@/assets/melhoresAutoresImg/cinematic6.jpg')},
                {img: require('@/assets/melhoresAutoresImg/cinematic8.jpg')},
                {img: require('@/assets/melhoresAutoresImg/cinematic9.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/gnar.jpg')},
                {img: require('@/assets/imagensTeste/pyke.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
            ]
        }
    },
    mounted(){
        if(this.noticias.length > 12){
            this.showHide()
        }
    },
    methods:{
        showHide(){
            var classeNoticia = document.querySelectorAll('.noticia')
            var maioresQue12 = [...classeNoticia].slice(12,classeNoticia.length)
            if(this.displayNone){
                for(var noticia of maioresQue12){
                    noticia.style.display = 'none'
                }
            } else{
                for(noticia of maioresQue12){
                    noticia.style.display = 'block'
                }
            }
        }
    }
}

</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    width: 1730px;
    margin: 100px auto 0 auto;
    gap: 40px;
   
}

.noticia{
    width: 550px;
    height: 300px;
    position: relative;
}
.titulo-holder{
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: 150px;
    color: #fff;
    font-size: 35px;
    font-weight: 200;
    background-image: linear-gradient(transparent, black);
}
.titulo{
    position: absolute;
    bottom: 0;
    margin: 0 0 10px 20px;
}
.noticia img{
    width: 100%;
    height: 100%;
    border: 5px solid #fff;
    box-sizing: border-box;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.showHide{
    width: 50px;
    height: 50px;
    margin: 50px auto 0 auto;
    position: relative;
    cursor: pointer;
}
.flecha{
    background: #000;
    width: 25px;
    height: 5px;
    position: absolute;
}
.esquerdaCima{
    transform: rotate(-45deg);
    left:5px;
}
.direitaCima{
    transform: rotate(45deg);
    right: 5px;
}
.opened{
    transform-origin: center;
    transform: rotateX(-180deg);
}
/* .esquerdaBaixo{
    transform: rotate(45deg);
    left:5px;
}
.direitaBaixo{
    transform: rotate(-45deg);
    right: 5px;
} */
.rotateArrow {
    transition: .3s;
}

@media (min-width: 300px) and (max-width: 767px) {
    .container{
        width: 300px;
        gap: 0;
    }
}
</style>