<template>
  <div class="main">
    <div class="img-chamada" :style="'background-image: url(' + midiaprincipal.midiapath + ')'"></div>
    <div class="chamada">
        <div class="container-chamada">
            <div class="date">
                {{noticia.noticiadatacadastro.split('-').reverse().join('/')}}
            </div>
            <div class="titulo">
                {{noticia.noticiatitulo}} 
            </div>
            <div class="area-editor" @click="$router.push({name: 'Perfil', params:{id:noticia.user_iduser.id}})">
                <div class="img-editor" :style="'background-image: url(' + noticia.user_iduser.midia.midiaprofilepath + ')'"></div>
                <div class="nome-editor">{{noticia.user_iduser.username}}</div>
            </div>
        </div>
    </div>
    <div class="texto-container">
        <div class="texto" v-html="noticia.texto"></div>
        <div class="inteiracoes">
            <div class="curtir" @click="mudarCurtida"><CardsHeart class="icon" :size="30" :class="curtiu ? 'curtido' : 'nao-curtido'"/></div>
            <div class="compartilhar" @click="compartilhar"><Link class="icon" :size="30"/></div>
        </div>
        <div class="snackbar" id="snackbar">
            <div class="quadrado"></div>
            Link copiado!
        </div>
    </div>
    <ConteudoComentarios/>
  </div>
</template>

<script>
import CardsHeart from 'vue-material-design-icons/CardsHeart.vue';
import Link from 'vue-material-design-icons/Link.vue';
import ConteudoComentarios from '@/components/ConteudoComentarios.vue'
import {mapActions} from "vuex"
import {mapState} from "vuex"
import axios from 'axios';
// import CurtidasCreateDelete from "@/api/curtidas.js"

export default {
    components: {CardsHeart,Link,ConteudoComentarios},
    computed:{
        ...mapState('noticia', ['noticia']),
        ...mapState('usuario', ['usuario']),
    },
    data(){
        return{
            midiaprincipal: '',
            midiasrestantes: [],
            curtiu: false
        }
    },
    methods:{
        ...mapActions('noticia',['getNoticia']),
        atualizaComentarios(comentariosAtualizados){
            this.comentarios = comentariosAtualizados
        },
        separarMidiaPrincipal(){
            this.midiaprincipal = this.noticia.midia[0]
            this.midiasrestantes = this.noticia.midia.splice(1,this.noticia.midia.length) 
        },
        colocarMidiasNoTexto(){
            for(let midia of this.midiasrestantes){
                if((this.noticia.texto.split('<img>').length -1) != 0){
                    this.noticia.texto = this.noticia.texto.replace("<img>", `<div class="img-texto" style="margin:50px 0; background-position:center; background-size:cover; height:600px; width:1200px; background-image: url(${midia.midiapath})"></div>`)
                }        
            }
        },
        verificaUsuarioNasCurtidas(){
            this.curtiu = false
            for(let user of this.noticia.curtidas){
                if(this.usuario.id == user.iduser){
                    this.curtiu = true
                }
            }
        },
        mudarCurtida(){
            if(!this.usuario.id){
                this.$router.push({path: '/login'})
            }else{
                if(this.curtiu){
                    this.descurtir()
                }else{
                    this.curtir()
                }
            }
        },
        async curtir(){
            this.noticia.curtidas.push({iduser: this.usuario.id})
            this.verificaUsuarioNasCurtidas()
            await axios.post('/curtidas/', {idnoticia: this.noticia.id})
            this.getNoticia(this.noticia.id)
        },
        async descurtir(){
            let id = this.noticia.curtidas.find((curtida)=>{
                return curtida.iduser == this.usuario.id
            })
            this.noticia.curtidas.splice(this.noticia.curtidas.indexOf(id),1)
            this.verificaUsuarioNasCurtidas()
            const {data} = await axios.get(`/curtidas/?idnoticia=${this.noticia.id}`)
            for(let curtida of data){
                if(curtida.iduser == this.usuario.username){
                    await axios.delete(`/curtidas/${curtida.id}`)
                }
            }
            this.getNoticia(this.noticia.id)
        },
        compartilhar(){
            const link = window.location.href
            navigator.clipboard.writeText(link)
            let snackbar = document.getElementById('snackbar')
            snackbar.classList.add('show')
            setTimeout(()=>{
                snackbar.classList.remove('show')
            },3000)
        }
    },
    mounted(){
        this.getNoticia(this.$route.params.id).then(()=>{
            this.separarMidiaPrincipal()
            this.colocarMidiasNoTexto()
            this.verificaUsuarioNasCurtidas()
            this.comentarios = this.noticia.comentarios
        })
        console.log(this.noticia.texto)
    },
}
</script>

<style scoped>
.curtido{
    color: red;
}
.nao-curtido{
    color:white;
}
.main{
    position: relative;
    top: 75px;
    display: flex;
    flex-direction: column;
    background-color: #Fff;
    margin-bottom: 100px;
}
.img-chamada{
    height: 700px;
    background-size: cover;
    background-position: center;
}
.chamada{
    width: 70%;
    height: 325px;
    margin: 0 auto;
    background-color: #060E25;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border-radius: 0 0 40px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.container-chamada{
    height: 300px;
    margin: 25px auto;
    width: 1200px;
    color: #fff;
    position: relative;
}
.area-editor{
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    width: fit-content;
    margin: 30px 0 0 0;
}
.img-editor{
    width: 70px;
    height: 70px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
}
.nome-editor{
    font-size: 30px;
}
.titulo{
    width: fit-content;
    display: flex;
    align-items: center;
    font-size: 38px;
    font-family: 'Kadwa', serif;
    gap: 25px;
    margin: 50px 0 0 0;
}
.date{
    color: #04B9CC;
    display: inline;
    font-size: 38px;
    right: 0;
    position: absolute;
}
.inteiracoes{
    color: #fff;
    margin-left: 140px;
    display: flex;
    gap: 20px;
}
.curtir, .compartilhar{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #020013;
    gap: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 4px;
}
/* .curtir{
    width: 140px;
    height: 50px;
    cursor: pointer;
}
.compartilhar{
    width: 220px;
    cursor: pointer;
} */

.snackbar{
    color: #fff;
    opacity: 0;
    position: relative;
    left: 175px;
    background-color: #04B9CC;
    margin-top: 30px;
    width: 120px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.show{
    opacity: 1;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
    /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s; */
}
@keyframes fadein {
  from {bottom: 30px; opacity: 0;}
  to {bottom: 0; opacity: 1;}
}
@keyframes fadeout {
  from {bottom: 0; opacity: 1;}
  to {bottom: 30px; opacity: 0;}
}
/* @-webkit-keyframes fadein {
  from {bottom: 30px; opacity: 0;}
  to {bottom: 0; opacity: 1;}
}
@-webkit-keyframes fadeout {
  from {bottom: 0; opacity: 1;}
  to {bottom: 30px; opacity: 0;}
} */
.quadrado{
    position: absolute;
    top: -15%;
    width: 10px;
    height: 10px;
    background-color: #04B9CC;
    transform: rotate(45deg);
}
.material-design-icon{
    width: fit-content;
    height: fit-content;
}
.texto-container{
    width: 1480px;
    margin: 0 auto;
    /* border-left: 2px solid #000;
    border-right: 2px solid #000; */
}
.texto{
    width: 1200px;
    color: #000;
    font-size: 30px;
    margin: 50px auto 50px auto;
}
.img-texto{
    width: 1200px;
    background-size: cover;
    background-position: center;
    height: 600px;
}
.texto h1{
    margin: 20px;
    font-size: 40px;
}
</style>