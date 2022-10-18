<template>
  <div class="main">
    <div class="img-chamada" :style="'background-image: url(' + midiaprincipal.midiapath + ')'"></div>
    <div class="chamada">
        <div class="container-chamada">
            <div class="area-editor" @click="$router.push({name: 'Perfil', params:{id:noticia.user_iduser.id}})">
                <div class="img-editor" :style="'background-image: url(' + noticia.user_iduser.midia.midiaprofilepath + ')'"></div>
                <div class="nome-editor">{{noticia.user_iduser.username}}</div>
            </div>
            <div class="titulo-e-data">
                <div class="titulo">
                    {{noticia.noticiatitulo}} 
                    <div class="data">
                        {{noticia.noticiadatacadastro.split('-').reverse().join('/')}}
                    </div>
                </div>
            </div>
            <div class="inteiracoes">
                <div class="curtir" @click="mudarCurtida">CURTIR<CardsHeart class="icon" :size="30" :class="curtiu ? 'curtido' : 'nao-curtido'"/></div>
                <div class="compartilhar" @click="compartilhar">COMPARTILHAR<Link class="icon" :size="30"/></div>
            </div>
            <div class="snackbar">
                <div class="quadrado"></div>
                Link copiado!
            </div>
        </div>
    </div>
    <div class="texto-container">
        <div class="texto" v-html="noticia.texto"></div>
    </div>
    <ConteudoComentarios :comentarios="comentarios" @updateComentarios="atualizaComentarios"/>
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
            comentarios: [
                {texto:'Muito show mano!! Notícia top !!! Qualidade do site insana tbm...  Os devs e designers mandaram muitooo. Em relação à notícia, eu discordo. Pois acho que as mudanças na annie são nocivas ao meio ambiente e causam um impacto paia...', usuario:{img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),nome:'Gragustavo'}, data: '22/08/22'},
                {texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ', usuario:{img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),nome:'Gragustavo'}, data: '22/08/22'},
                {texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ', usuario:{img: require('@/assets/melhoresAutoresImg/amanda.jpg'),nome:'Stanlety'}, data: '22/08/22'},
                {texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ', usuario:{img: require('@/assets/melhoresAutoresImg/wukas.jpg'),nome:'Tropa do calvo'}, data: '22/08/22'},
                {texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ', usuario:{img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),nome:'Gragustavo'}, data: '22/08/22'},
            ],
            //Dados reais
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
            const data = await axios.post('/curtidas/', {idnoticia: this.noticia.id})
            console.log(data)
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

        }
    },
    mounted(){
        this.getNoticia(this.$route.params.id).then(()=>{
            this.separarMidiaPrincipal()
            this.colocarMidiasNoTexto()
            this.verificaUsuarioNasCurtidas()
        })
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
    height: 325px;
    background-color: #03123D;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.container-chamada{
    height: 300px;
    margin: 25px auto;
    width: 1200px;
    color: #fff;
}
.area-editor{
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    width: fit-content;
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
.titulo-e-data{
    display: flex;
    align-items: center;
    font-size: 38px;
    font-family: 'Kadwa', serif;
    gap: 25px;
}
.data{
    color: #04B9CC;
    display: inline;
}
.inteiracoes{
    display: flex;
    gap: 20px;
}
.curtir, .compartilhar{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #04B9CC;
    gap: 10px;
}
.curtir{
    width: 140px;
    height: 50px;
    cursor: pointer;
}
.compartilhar{
    width: 220px;
    cursor: pointer;
}
.snackbar{
    position: relative;
    left: 215px;
    background-color: #04B9CC;
    margin-top: 30px;
    width: 120px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
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
    border-left: 2px solid #000;
    border-right: 2px solid #000;
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