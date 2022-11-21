<template>
  <div class="destaque">
    <div class="direita">
        <div class="texto">
            Notícias em Destaque
        </div>
    </div>
    <div class="esquerda">
        <div class="noticias">
            <ul class="topicos">
                <li class="li" :class="index == 0 ? 'selected' : 'no-selected'" v-for="(topico, index) in topicos" :key="index" @click="mudarParaTopico(topico,$event)">
                    {{topico}}
                </li>
            </ul>
            <div class="box-loading" v-if="loading">
                <img class="loading" src="@/assets/loading.gif" alt="">
            </div>
            <div v-else class="noticias-destacadas" >
                <div v-for="(noticia,index) in currentTopico.noticias" :key="index" class="noticia" :style="'background-image: url(' + noticia.midia[0].midiapath + ');'" @click="$router.push({path: `/noticia/${noticia.id}`})">
                    <div class="editor-holder">
                        <div class="editor-img" :style="'background-image: url(' + noticia.user_iduser.midia.midiaprofilepath + ');'"></div>
                        <div class="editor-nome">{{noticia.user_iduser.username}}</div>
                    </div>
                    <div class="info-noticia">
                        <div class="texto-noticia">
                            <div class="data"> {{noticia.noticiadatacadastro.split('-').reverse().join('/')}}</div>
                            <div class="titulo">{{noticia.noticiatitulo | truncate(30, '...')}}</div>
                        </div>
                        <div class="texto-noticia-texto">{{noticia.texto | truncate(130, ('...'))}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['page'],
    watch:{
        page(){
            let noticias = [this.noticiasDestaqueLol, this.noticiasDestaqueValorant,  this.noticiasDestaqueTFT, this.noticiasDestaqueWR, this.noticiasDestaqueLor]
            this.currentTopico = noticias[this.page]
            let topicos = document.querySelectorAll('.li')
            topicos.forEach(category=>{
                category.classList = ['li']
                category.classList.add('no-selected')
            })
            topicos[this.page].classList = ['li']
            topicos[this.page].classList.add('selected')
        },
        currentTopico(){
            this.loading = true
            this.getNoticiasTopico(this.currentTopico["id"]).then((data)=>{
                this.loading = false
                return this.currentTopico["noticias"] = data    
            }).catch(()=>{
                this.loading = false
            })
        }
    },
    created(){
        this.currentTopico = this.noticiasDestaqueLol
    },
    methods:{
        mudarParaTopico(topico,e){
            let topicos = document.querySelectorAll('.li')
            topicos.forEach(category=>{
                category.classList = ['li']
                category.classList.add('no-selected')
            })
            e.target.classList = ['li']
            e.target.classList.add('selected')
            
            let noticias = [this.noticiasDestaqueLol, this.noticiasDestaqueValorant, this.noticiasDestaqueTFT, this.noticiasDestaqueWR, this.noticiasDestaqueLor]
            noticias.forEach((noticiasdestaque, index)=>{
                if(topico == noticiasdestaque.topico){
                    this.currentTopico = noticiasdestaque
                    this.$emit('trocaPagina', index)
                }
            })
        },
        async getNoticiasTopico(idtopico){
            const {data} = await axios.get(`/noticias/?idtopico=${idtopico}`)
            let threeNews = data.results.reverse().splice(0,3)
            return threeNews
        }
    },
    data(){
        return{
            loading: false,
            currentTopico:{},
            topicos: ['League of Legends', 'Valorant', 'TeamfightTatics', 'Wild Rift', 'Runeterra'],
            noticiasDestaqueLol: {
                topico: 'League of Legends',
                id: 1,
                noticias:[]
            },
            noticiasDestaqueValorant: {
                topico: 'Valorant',
                id: 2,
                noticias: []
            },
            noticiasDestaqueWR: {
                topico: 'Wild Rift',
                id:4,
                noticias:[]
            },
            noticiasDestaqueTFT: {
                topico: 'TeamfightTatics',
                id: 3,
                noticias:[]
            },
            noticiasDestaqueLor:{
                topico: 'Runeterra',
                id: 5,
                noticias:[]
            },
        }
    }
}
</script>

<style scoped>
.box-loading{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 415px;   
}
.loading{
    width: 100px;
    display: flex;
    margin-right: 200px;
}
.destaque{
    height: 650px;
    background-color: #060126;
    font-family: 'Playfair Display SC', serif;
    color: #fff;
    display: flex;
}
.direita{
    display: flex;
    align-items: center;
    width: 35%;
    justify-content: center;
}
.texto{
    width: 450px;
    font-size: 65px;
    font-weight: bold;
}
.esquerda{
    width: 65%;
}
.topicos{
    display: flex;
    gap: 50px;
    list-style: none;
    font-size: 20px;
    margin-top: 50px;
    padding: 0;
}
.topicos li{
    cursor: pointer;
}
.selected{
    opacity: 1;
    border-bottom: 3px solid #2095AE;
    padding-bottom:2px;
}

.topicos .no-selected{
    opacity: 0.4;
    
}
.noticias-destacadas{
    display: flex;
    position: relative;
    top: 50%;
    gap: 30px;
    margin-top: 35px;
}
.noticia{
    width: 380px;
    height: 415px;
    position: relative;
    background-size: cover;
    background-position: center;
}
.editor-img{
    width: 50px;
    height: 50px;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    margin: 0 0 10px 10px;
}
.editor-nome{
    position: absolute;
    top: 20px;
    margin: 0 0 20px 70px;
    font-size: 30px;
    font-family: 'Share Tech', sans-serif;
}
.editor-holder{
    top: 0;
    position: relative;
    height: 150px;
    background-image: linear-gradient(black,transparent);
}
.info-noticia{
    position: absolute;
    bottom: -1px;
    background-image: linear-gradient(transparent,rgba(0, 0, 0, 0.438));
    max-height: 150px;
    height: 100%;
    width: 100%;
    font-family: 'Share Tech', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: max-height 0.7s ease;
}
.texto-noticia{
    margin: 0 0 20px 30px;
    transition: transform 0.7s ease-in-out;
}
.data{
    font-size: 30px;
    color: #ffffff80;
}
.titulo{
    font-size: 30px;
}
.texto-noticia-texto{
    font-size: 20px;
    position: absolute;
    transform: translateY(-10%);
    opacity: 0;
    transition: opacity 2s ease;
    margin: 0 0 20px 30px;
    /* color: #060126;
    transition: color 1.2s ease-out; */
}
.noticia:hover .texto-noticia{
    transform: translateY(-100%);
}
.noticia:hover .info-noticia{
    max-height: 400px;
}
.noticia:hover .texto-noticia-texto{
    opacity: 1;
    color: #fff;
}
</style>