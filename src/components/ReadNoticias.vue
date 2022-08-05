<template>
    <div>
        <div class="container">
            <div v-for="(noticia, index) in noticias" :key="index" class="noticia">
                <img draggable="false" :src="noticia.img" alt="">
                <div class="titulo-holder">
                    <div class="titulo">Lorem Ipsum</div>
                </div>
            </div>
            <div class="numero-de-paginas">
                <div class="numero" v-for="index in numeroDePaginas" :key="index" @click="passarPagina(index)">
                    {{index}}
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    data(){
        return{
            numeroDePaginas: 0,
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
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
                {img: require('@/assets/imagensTeste/yasuo.jpg')},
            ]
        }
    },
    mounted(){
        var classeNoticia = document.querySelectorAll('.noticia')
        var numerodapag = 0
        classeNoticia.forEach((noticia,index)=>{
            index += 1
            if(index / 12 > numerodapag){
                numerodapag = numerodapag + 1
            }
            if(numerodapag == this.$route.params.pagina){
                noticia.style.display = "block"
            }else{
                noticia.style.display = "none"
            }
            
        this.numeroDePaginas = numerodapag
        })
        setTimeout(()=>{
            var botoes = document.querySelectorAll('.numero')
            botoes.forEach((botao)=>{
                botao.classList.add('outrasPaginas')
            })
            var index = parseInt(this.$route.path.split('/')[2])
            botoes[index-1].classList.add('paginaAtual')
            botoes[index-1].classList.remove('outrasPaginas')
        },100)
    },
    methods:{
        passarPagina(index){
            let paginaReq = `/noticias/${index}`
            if(paginaReq != this.$route.path){
                this.$router.push({path: paginaReq})
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
.numero-de-paginas{
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 10px;
}
.numero{
    width: 50px;
    height: 50px;
    font-size: 40px;
    color: #fff;
    text-align: center;
}
.outrasPaginas{
    background-color: #060126;
}
.paginaAtual{
    background-color: #675BB5;
}
@media (min-width: 300px) and (max-width: 767px) {
    .container{
        width: 300px;
        gap: 0;
    }
}
</style>