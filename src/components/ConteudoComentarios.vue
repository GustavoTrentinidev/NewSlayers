<template>
  <div class="conteudoRelacionado-e-comentarios">
    <div class="seletor">
        <ul>
            <li :value="index" @click="selecionar($event)" :class="index == 0 ? 'selecionado' : ''" v-for="opcao,index in opcoes" :key="index">
                <span v-if="opcao == 'Comentários'">{{opcao}} ({{comentarios.length}})</span>
                <span v-else>{{opcao}}</span>
            </li>
        </ul>
    </div>
    <div class="conteudoRelacionado" v-show="mostrar == opcoes[0]">
        <div class="noticias">
            <div class="noticia" @click="$router.push({name:'Noticia', params:{id: noticia.id}})" v-for="noticia,index in noticiasRelacionadas" :key="index" :style="'background-image: url(' + noticia.midia[0].midiapath + ')'">
                <div class="info-editor">
                    <div class="img-editor" :style="'background-image: url('+ noticia.user_iduser.midia.midiaprofilepath + ')'"></div>
                    <div class="nome-editor">{{noticia.user_iduser.username}}</div>
                </div>
                <div class="info-noticia">
                    <div class="data">{{noticia.noticiadatacadastro.split('-').reverse().join('/')}}</div>
                    <div class="titulo">{{noticia.noticiatitulo | truncate(30, ('...'))}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="comentarios-container" v-show="mostrar == opcoes[1]">
        <div class="comentarios">
            <div class="comentario" v-for="(comentario,index) in comentarios" :key="index">
                <div class="row">
                    <div class="usuario" @click="$router.push({name: 'Perfil', params:{id: comentario.user_iduser.id}})">
                        <div class="img-usuario img-editor" :style="'background-image: url('+ comentario.user_iduser.midia.midiaprofilepath + ')'"></div>
                        <div class="nome-usuario nome-editor">{{comentario.user_iduser.username}}</div>
                    </div>
                    <div class="data">{{comentario.datacomentario.split('-').reverse().join('/')}}</div>
                </div>
                <div class="texto">{{comentario.textocomentario}}</div>
                <div class="icons" v-if="usuario.id == comentario.user_iduser.id">
                    <Trash class="icon" style="color:white" @click="deleteComentario(comentario.id)"/>
                </div>
            </div>
        </div>
        <div class="enviar-comentario">
            <label for="comentarInput">Escreva um comentário</label>
            <input type="text" v-model="comentar" @keydown.enter="enviarComentario" name="comentarInput" placeholder="Digite o comentário">
            <div class="row2">
                <button class="enviar" @click="enviarComentario">Publicar comentário</button>
                <div class="error" v-if="error">{{errorText}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import {mapState} from "vuex"
import Trash from 'vue-material-design-icons/TrashCan.vue';
export default {
    components: {Trash},
    computed:{
        ...mapState('noticia',['noticia']),
        ...mapState('usuario',['usuario'])
    },
    watch:{
        noticia(){
            this.getNoticiasRelacionadas()
            this.comentarios = []
            this.getComentarios()
        }
    },
    data(){
        return{
            comentarios: [],
            comentar: '',
            opcoes: ['Conteúdo Relacionado', 'Comentários'],
            mostrar: 'Conteúdo Relacionado',
            noticiasRelacionadas: [],
            error: false,
            errorText: '',
        }
    },
    methods:{
        selecionar(e){
            let opcoes = document.querySelectorAll('li')
            opcoes.forEach(opcao=>{
                opcao.classList.remove('selecionado')
            })
            e.target.parentNode.classList.add('selecionado')
            this.mostrar = this.opcoes[e.target.parentNode.value]
        },
        enviarComentario(){
            this.enviarComentarioBack().then(()=>{
                let comentario = {textocomentario: this.comentar, user_iduser: this.usuario, datacomentario: this.getDateNow()}
                this.comentarios.unshift(comentario)
                this.comentar = ''
                this.getComentarios()
            }).catch((e)=>{
                this.error = true
                this.errorText = e.response.data.detail
            })
        },
        async getNoticiasRelacionadas(){
            const {data} = await axios.get(`/noticias/?idtopico=${this.noticia.topico_idtopico.id}`)
            const noticia = data.find((noticia)=>{
                return noticia.id == this.noticia.id
            })
            data.splice(data.indexOf(noticia),1)
            this.noticiasRelacionadas = data.reverse().splice(0,5) //Limita as notícias, para não ficar um scroll infinito caso existam muitas notícias
        },
        async getComentarios(){
            const {data} = await axios.get(`/comentarios/?idnoticia=${this.noticia.id}`)
            this.comentarios = []
            this.comentarios.push(...data.reverse())
        },
        async enviarComentarioBack(){
            await axios.post('/comentarios/', {
                textocomentario: this.comentar,
                noticia_idnoticia: this.noticia.id
            })
        },
        getDateNow(){
            var data = new Date(),
                dia  = data.getDate().toString(),
                diaF = (dia.length == 1) ? '0'+dia : dia,
                mes  = (data.getMonth()+1).toString(),
                mesF = (mes.length == 1) ? '0'+mes : mes,
                anoF = data.getFullYear();
            return diaF+"/"+mesF+"/"+anoF;
        },
        async deleteComentario(id){
            for(let comentario of this.comentarios){
                console.log(comentario, id)
                if(comentario.id == id){
                    this.comentarios.splice(this.comentarios.indexOf(comentario),1)
                }
            }
            await axios.delete(`/comentarios/${id}`)
            this.getComentarios()
        }
    },
    mounted(){
        this.getNoticiasRelacionadas()
        this.getComentarios()
    }
}
</script>

<style scoped>
.conteudoRelacionado-e-comentarios{
    background-color: #060F29;
    height: 945px;
    margin-bottom: -25px;
    padding: 100px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.4);
}
.seletor ul{
    display: flex;
    list-style: none;
    gap: 50px;
    font-size: 20px;
    font-family: 'Playfair Display SC', sans-serif;
    padding: 0;
}
.seletor li{
    cursor: pointer;
}
.selecionado{
    color: #fff;
    border-bottom: 2px solid #2095AE;
}
.noticia{
    min-width: 550px;
    height: 600px;
    background-size: cover;
    background-position: center;
    position: relative;
}
.info-editor{
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    gap: 15px;
    align-items: center;
}
.img-editor{
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
}
.nome-editor{
    font-size: 30px;
    color: #fff;
}
.info-noticia{
    bottom: 0;
    position: absolute;
    height: 180px;
    width: 100%;
    background-image: linear-gradient(transparent, black);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 10px;
}
.titulo{
    font-size: 40px;
    color: #fff;
}
.data{
    font-size: 25px;
    color: #04B9CC;
}
.noticias{
    padding-bottom: 50px;
    overflow-x: auto;
    gap: 40px;
    display: flex;
    flex-wrap: nowrap;
}
.noticias::-webkit-scrollbar{
    background-color: #616161;
    height: 7px;
    border-radius: 5px;
}
.noticias::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
.comentarios{
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex-wrap: nowrap;
    gap: 15px;
    height: 520px;
    overflow-y: scroll;
}
.comentario{
    max-width: 1700px;
    background-color: #03123D;
    min-height: 160px;
    word-wrap: break-word;
    box-sizing: border-box;
    padding: 10px;
    margin-right: 20px;
    position: relative;
}
.row{
    display: flex;
    justify-content: space-between;
}
.row .data{
    font-size: 20px;
}
.usuario{
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
}
.nome-usuario{
    font-size: 20px;
    font-family: 'Kadwa', serif;
}
.texto{
    font-size: 25px;
    margin: auto 80px;
    align-self: center;
    color: rgba(255, 255, 255, 0.603);
}
.comentarios::-webkit-scrollbar{
    background-color: #616161;
    border-radius: 5px;
    width: 7px;
}
.comentarios::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
.enviar-comentario{
    width: 1700px;
    height: 200px;
    background-color: #020013;
    display: flex;
    flex-direction: column;
    padding: 20px 30px 30px 30px;
    box-sizing: border-box;
    margin-top: 15px;
    gap: 10px;
}
.enviar-comentario label{
    font-size: 30px;
    color: #fff;
}
.enviar-comentario input{
    height: 70px;
    border: 0;
    font-family: 'Share Tech', sans-serif;
    font-size: 30px;
    outline: 0;
    padding-left: 20px;
}
.enviar-comentario input::placeholder{
    font-family: 'Share Tech', sans-serif;
    font-size: 30px;
}
.enviar-comentario button{
    height: 40px;
    text-transform: uppercase;
    font-family: 'Share Tech', sans-serif;
    width: 210px;
    font-size: 20px;
    border: 0;
    cursor: pointer;
    background-color: #2095AE;
    color: #fff;
}
.row2{
    display: flex;
    gap: 10px;
    align-items: center;
}
.error{
    color: red;
}
.icons{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
.icon{
    cursor: pointer;
}
</style>