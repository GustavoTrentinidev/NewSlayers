<template>
    <div>
        <Header/>
        <div class="main">
            <div class="lateral">
                <ul class="lista-lateral">
                    <li v-for="(item,index) in listaItens" :key="index" class="item" :class="index == 0 ? 'selected' : ''" @click="trocarComponente($event)">
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
                <div class="banner" :style="'background-image: url('+ require('@/assets/noticiasImagem.png') + ')'"><router-view></router-view></div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/HeaderDefault.vue"
export default {
    components: {Header},
    data(){
        return{
            usuarioVisitado:{banner: require('@/assets/noticiasImagem.png')},
            listaItens: [
                {icon: require('@/assets/iconsPerfil/perfil.png'), item: 'Perfil'},
                {icon: require('@/assets/iconsPerfil/curtidas.png'), item: 'Notícias Curtidas'},
                {icon: require('@/assets/iconsPerfil/comentarios.png'), item: 'Comentarios'},
                {icon: require('@/assets/iconsPerfil/editar.png'), item: 'Editar Perfil'},
                {icon: require('@/assets/iconsPerfil/noticias.png'), item: 'Notícias Publicadas'},
                {icon: require('@/assets/iconsPerfil/publicar.png'), item: 'Publicar Notícia'}
            ]
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
    min-height: calc(100vh - 75px);
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
    background-color: #0D0641;
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
.banner{
    width: 100%;
    height: 350px;
    background-size: cover;
    background-position: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
}
</style>