<template>
    <div class="container">
        <div v-for="(noticia, index) in noticias" :key="index" class="noticia">
            <img :src="noticia.img" alt="">
        </div>
        <div class="showHide" @click="displayNone = !displayNone, showHide()"></div>
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
    max-height: 100%;
    border: 5px solid #fff;
    box-sizing: border-box;
}
.showHide{
    width: 50px;
    height: 50px;
    background: #fff;
    margin: 0 auto;
}
</style>