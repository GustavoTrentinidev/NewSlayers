<template>
    <div class="container">
        <div v-for="(noticia, index) in noticias" :key="index" class="noticia">
            <img draggable="false" :src="noticia.img" alt="">
        </div>
        <div class="showHide" @click="displayNone = !displayNone, showHide()">
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
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/gnar.jpg')},
                {img: require('@/assets/imagensTeste/wild.jpg')},
                {img: require('@/assets/imagensTeste/pyke.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
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

<style>
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
}

.noticia img{
    width: 100%;
    height: 100%;
    border: 5px solid #fff;
    box-sizing: border-box;
}
.showHide{
    width: 50px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
}
.flecha{
    background: #fff;
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