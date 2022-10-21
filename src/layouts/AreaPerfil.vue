<template>
    <div>
        <Header/>
        <div class="main">
            <div class="lateral">
                <ul class="lista-lateral">
                    <li v-for="(item,index) in listaItens" :key="index" class="item" :class="index == 0 ? 'selected' : ''" @click="trocarComponente($event), componenteMostrado = item.item">
                        <img class="icon" :src="item.icon" alt="">
                        <span>{{item.item}}</span>
                    </li>
                </ul>
                <div class="logout" @click="makeLogout">
                    <img class="icon" :src="require('@/assets/iconsPerfil/logout.png')" alt="">
                    <span>Sair</span>
                </div>
            </div>
            <div class="area-componente">
                <div class="overlay">
                    <div class="banner" v-if="usuarioVisitado.midia" :style="'background-image: url('+ usuarioVisitado.midia.midiabannerpath + ')'"></div>
                    <div class="banner" v-else :style="'background-image: url('+ require('@/assets/noticiasImagem.png') + ')'"></div>
                    <div class="qualUsuario" v-show="componenteMostrado == 'Notícias Curtidas' || componenteMostrado == 'Notícias Publicadas' ">
                        <div class="foto-usuario" v-if="usuarioVisitado.midia && usuarioVisitado.midia.midiaprofilepath" :style="'background-image: url('+ usuarioVisitado.midia.midiaprofilepath + ')'"></div>
                        <div class="foto-usuario" v-else :style="'background-image: url('+ imgUserDefault + ')'"></div>
                        <div class="nome-usuario">{{usuarioVisitado.username}}</div>
                    </div> 
                </div>
                <PerfilInicial v-if="componenteMostrado == 'Perfil'"/>
                <EditarPerfil v-if="componenteMostrado == 'Editar Perfil'"/>
                <PublicarNoticia v-if="componenteMostrado == 'Publicar Notícia'"/>
                <NoticiasCurtidas v-if="componenteMostrado == 'Notícias Curtidas'"/>
                <NoticiasPublicadas v-if="componenteMostrado == 'Notícias Publicadas'" :noticiasPublicadas="usuarioVisitado.noticiasPublicadas"/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/HeaderDefault.vue"
import EditarPerfil from "@/components/perfil/EditarPerfil.vue"
import PublicarNoticia from "@/components/perfil/PublicarNoticia.vue"
import PerfilInicial from '@/components/perfil/PerfilInicial.vue'
import NoticiasCurtidas from '@/components/perfil/NoticiasCurtidas.vue'
import NoticiasPublicadas from '@/components/perfil/NoticiasPublicadas.vue'
import {mapActions} from "vuex"
import {mapState} from "vuex"


export default {
    components: {Header, EditarPerfil, PublicarNoticia, PerfilInicial, NoticiasCurtidas, NoticiasPublicadas},
    data(){
        return{
            componenteMostrado: 'Perfil',
            listaItens: [
                {icon: require('@/assets/iconsPerfil/perfil.png'), item: 'Perfil'},
                {icon: require('@/assets/iconsPerfil/curtidas.png'), item: 'Notícias Curtidas'},
                
            ],
            imgUserDefault: require('@/assets/iconsPerfil/imgdefault.png')
        }
    },
    computed: {
        ...mapState('usuario',{'usuarioLogado':'usuario'}),
        ...mapState('usuariovisitado',{'usuarioVisitado': 'usuariovisitado'})
    },
    created(){
        this.getUsuariovisitado(this.$route.params.id).then(()=>{
            if(this.usuarioLogado.id == this.usuarioVisitado.id){
                this.listaItens.push({icon: require('@/assets/iconsPerfil/editar.png'), item: 'Editar Perfil'})
                if(this.usuarioLogado.groups[0] == 2){
                    this.listaItens.push({icon: require('@/assets/iconsPerfil/publicar.png'), item: 'Publicar Notícia'})
                }
            }
            if(this.usuarioVisitado.groups[0] == 2){
                this.listaItens.push({icon: require('@/assets/iconsPerfil/noticias.png'), item: 'Notícias Publicadas'})
            }
        })
    },
    methods: {
        ...mapActions('usuariovisitado',['getUsuariovisitado']),
        trocarComponente(e){
            var itens = document.querySelectorAll('.item')
            itens.forEach(item=>{
                item.classList = ['item']
            })
            if(e.target.tagName == 'LI'){
                e.target.classList.add('selected')
            }else{
                e.target.parentNode.classList.add('selected')
            }
        },
        ...mapActions('auth', ["logout"]),
        makeLogout(){
            this.logout()
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style scoped>
.main{
    position: relative;
    top: 75px;
    display: flex;
    flex-direction: initial;
    background: #fff;
    height: calc(100vh - 75px);
    max-height: calc(100vh - 75px);
    color: #fff;
}
.lateral{
    position: relative;
    width: 400px;
    background-color: #020013;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.lista-lateral{
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.lista-lateral .item{
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    max-width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
}
.item img, .item span{
    margin-left: 35px;
}
.icon{
    width: 60px;
    height: 60px;
}
.selected{
    background-color: #03123D;
    min-width: calc(100% + 30px);
    animation: aumentar 100ms ease-in-out;
}
@keyframes aumentar {
    from{min-width: 300px;}
    to{min-width: calc(100% + 30px);}
}

.logout{
    margin-left: 35px;
    display: flex;
    align-items: center;
    margin-bottom: 75px;
    cursor: pointer;
}
.logout span{
    font-size: 25px;
    color: #eb3223;
}
.area-componente{
    width: 100%;
    position: relative;
    z-index: 0;
}
.overlay{
    position: relative;
}
.banner{
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: contain;
    background-repeat: no-repeat;
    filter: brightness(50%);
}
.qualUsuario{
    position: absolute;
    top: 35%;
    left: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.foto-usuario{
    background-color: #fff;
    width: 100px;
    height: 100px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
}
.nome-usuario{
    font-size: 50px;
    font-family: 'Kadwa', serif;
}
</style>