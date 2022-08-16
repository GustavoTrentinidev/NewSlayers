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
                <div class="logout">
                    <img class="icon" :src="require('@/assets/iconsPerfil/logout.png')" alt="">
                    <span>Sair</span>
                </div>
            </div>
            <div class="area-componente">
                <div class="overlay">
                    <div class="banner" :style="'background-image: url('+ usuarioVisitado.banner + ')'"></div>
                    <div class="qualUsuario" v-show="componenteMostrado == 'Notícias Curtidas' || componenteMostrado == 'Notícias Publicadas' ">
                        <div class="foto-usuario" :style="'background-image: url('+ usuarioVisitado.img + ')'"></div>
                        <div class="nome-usuario">{{usuarioVisitado.nome}}</div>
                    </div> 
                </div>
                <PerfilInicial v-show="componenteMostrado == 'Perfil'" :usuarioVisitado="usuarioVisitado" :usuarioLogado="usuarioLogado"/>
                <EditarPerfil v-show="componenteMostrado == 'Editar Perfil'" :usuario="usuarioLogado"/>
                <PublicarNoticia v-show="componenteMostrado == 'Publicar Notícia'"/>
                <NoticiasCurtidas v-show="componenteMostrado == 'Notícias Curtidas'" :noticiasCurtidas="usuarioVisitado.noticiasCurtidas"/>
                <NoticiasPublicadas v-show="componenteMostrado == 'Notícias Publicadas'" :noticiasPublicadas="usuarioVisitado.noticiasPublicadas"/>
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
export default {
    components: {Header, EditarPerfil, PublicarNoticia, PerfilInicial, NoticiasCurtidas, NoticiasPublicadas},
    data(){
        return{
            componenteMostrado: 'Perfil',
            usuarioLogado: {
                nome: 'yK1ngz',
                email: 'nicolas@gmail.com',
                senha:'',
                banner: require('@/assets/noticiasImagem.png'),
                img: require('@/assets/melhoresAutoresImg/nicolas.jpg'),
                id: 1,
                tipo: 1,
                seguidores: [
                    {
                        nome:'Gragustavo',
                        img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),
                        id: 2,
                        tipo: 1,
                    },
                    {
                        nome:'Stanlety',
                        img: require('@/assets/melhoresAutoresImg/amanda.jpg'),
                        id: 3,
                        tipo: 1,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                ],
                seguindo: [
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Gragustavo',
                        img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),
                        id: 2,
                        tipo: 1,
                    },
                    {
                        nome:'Stanlety',
                        img: require('@/assets/melhoresAutoresImg/amanda.jpg'),
                        id: 3,
                        tipo: 1,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                ]
            },
            // usuarioLogado: {nome: 'GugasShow', email: 'gustavotrentini@gmail.com', senha:'', banner: require('@/assets/carrosselHome/tft-topico.png'), img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'), id: 52353},
            usuarioVisitado: {
                nome: 'yK1ngz',
                email: 'nicolas@gmail.com',
                senha:'',
                banner: require('@/assets/noticiasImagem.png'),
                img: require('@/assets/melhoresAutoresImg/nicolas.jpg'),
                id: 1,
                tipo: 1,
                seguidores: [
                    {
                        nome:'Gragustavo',
                        img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),
                        id: 2,
                        tipo: 1,
                    },
                    {
                        nome:'Stanlety',
                        img: require('@/assets/melhoresAutoresImg/amanda.jpg'),
                        id: 3,
                        tipo: 1,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                ],
                seguindo: [
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Gragustavo',
                        img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),
                        id: 2,
                        tipo: 1,
                    },
                    {
                        nome:'Stanlety',
                        img: require('@/assets/melhoresAutoresImg/amanda.jpg'),
                        id: 3,
                        tipo: 1,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                    {
                        nome:'Tropa do calvo',
                        img: require('@/assets/melhoresAutoresImg/wukas.jpg'),
                        id: 4,
                        tipo: 0,
                    },
                ],
                noticiasCurtidas:[
                    {titulo: 'NOTAS DA ATUALIZAÇÃO 12.14', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic1.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic2.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic3.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic4.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic7.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic6.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic8.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic9.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                ],
                noticiasPublicadas:[
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic2.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'NOTAS DA ATUALIZAÇÃO 12.14', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic1.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic7.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic3.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic6.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic9.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic8.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                    {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic4.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                ],
            },
            // usuarioVisitado: {nome: 'GugasShow', email: 'gustavotrentini@gmail.com', senha:'', banner: require('@/assets/carrosselHome/tft-topico.png'), img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'), id: 52353},
            listaItens: [
                {icon: require('@/assets/iconsPerfil/perfil.png'), item: 'Perfil'},
                {icon: require('@/assets/iconsPerfil/curtidas.png'), item: 'Notícias Curtidas'},
                {icon: require('@/assets/iconsPerfil/editar.png'), item: 'Editar Perfil'},
                {icon: require('@/assets/iconsPerfil/noticias.png'), item: 'Notícias Publicadas'},
                {icon: require('@/assets/iconsPerfil/publicar.png'), item: 'Publicar Notícia'}
            ]
        }
    },
    mounted(){
        if(this.usuarioLogado.id != this.usuarioVisitado.id){
            this.listaItens.splice(2,1)
        }
    },
    methods: {
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