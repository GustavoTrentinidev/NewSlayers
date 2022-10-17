<template>
    <div>
        <div class="container">
            <div v-for="(noticia, index) in noticias" :key="index" class="noticia" @click="$router.push({path: `/noticia/${noticia.id}`})">
                <div class="parte-de-cima">
                    <img draggable="false" :src="noticia.midia[0].midiapath" alt="">
                    <div class="editor-holder">
                        <div class="editor-img" :style="'background-image: url(' + noticia.user_iduser.midia.midiaprofilepath + ');'"></div>
                        <div class="editor-nome">{{noticia.user_iduser.username}}</div>
                    </div>
                </div>
                <div class="info-noticia">
                    <div class="informacoes">
                        <div class="data">{{noticia.noticiadatacadastro.split('-').reverse().join('/')}}</div>
                        <div class="titulo">{{noticia.noticiatitulo | truncate(30, '...')}}</div>
                        <div class="texto">{{noticia.texto | truncate(200, '...')}}</div>
                        <div class="topico">{{noticia.topico_idtopico.nometopico}}</div>
                    </div>
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
import axios from "axios"
export default {
    data(){
        return{
            numeroDePaginas: 0,
            noticias: []
        }
    },
    mounted(){
        this.getNoticias()
        var classeNoticia = document.querySelectorAll('.noticia')
        var numerodapag = 0
        classeNoticia.forEach((noticia,index)=>{
            index += 1
            if(index / 9 > numerodapag){
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
        },10)
    },
    methods:{
        async getNoticias(){
            const {data} = await axios.get('/noticias/')
            this.noticias = data
            console.log(this.noticias)
        },
        passarPagina(index){
            let paginaReq = `/noticias/${index}`
            if(paginaReq != this.$route.path){
                this.$router.push({path: paginaReq}).finally(()=>{
                    window.scroll({top:1300})
                })
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
    height: 700px;
    position: relative;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.parte-de-cima{
    width: 100%;
    height: 300px;
    position: relative;
}
.editor-holder{
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: calc(100%);
    height: 150px;
    color: #fff;
    font-size: 35px;
    font-weight: 200;
    background-image: linear-gradient(transparent, black);
}
.editor-img{
    width: 60px;
    height: 60px;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    margin: 0 0 10px 20px;
}
.editor-nome{
    position: absolute;
    bottom: 0;
    margin: 0 0 20px 85px;
}
.noticia img{
    width: 100%;
    height: 100%;
}
.info-noticia{
    width: 100%;
    height: 400px;
    background-color: #0D0641;
    display: flex;
    align-items: center;
    justify-content: center;
}
.informacoes{
    width: 400px;
    color: #fff;
    height: 300px;
}
.data{
    font-size: 22.5px;
    color: #03D3E0;
}
.titulo{
    font-size: 35px;
    font-weight: bold;
}
.texto{
    margin-top: 20px;
    font-size: 25px;
    height: auto;
    word-wrap: break-word
}
.topico{
    position: absolute;
    bottom: 12.5px;
    left: 12.5px;
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    font-family: 'Playfair Display SC', serif;
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
    cursor: pointer;
    padding-top: 5px;
    transition: transform 200ms ease-in-out;
}
.numero:hover{
    transform: scale(1.1);
    background-color: #3a326a;
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