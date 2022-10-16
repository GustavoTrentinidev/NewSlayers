<template>
    <div class="area-curtidas">
        <div class="noticiasPublicadas">
            <div class="noticia" @click="$router.push({name: 'Noticia', params:{id: noticia.id}})" v-for="(noticia,index) in usuariovisitado.noticias" :key="index">
                <div class="img-noticia" :style="'background-image: url(' + noticia.midia[0].midiapath + ')'"></div>
                <div class="textos">
                    <div class="data">{{noticia.noticiadatacadastro.split('-').reverse().join('/')}}</div>
                    <div class="titulo">{{noticia.noticiatitulo | truncate(30, '...')}}</div>
                    <div class="texto">{{noticia.texto | truncate(225, '...')}}</div>
                </div>
            <Trash class="icon" style="color:white"/>
            <DotsVertical class="icon2" style="color:white"/>
            </div>
        </div>
  </div>
</template>

<script>
import Trash from 'vue-material-design-icons/TrashCan.vue';
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue';
import {mapState} from "vuex"


export default {
    computed:{
        ...mapState('usuariovisitado', ['usuariovisitado'])
    },
    mounted(){
        console.log(this.usuariovisitado.noticias.id)
    },
    components:{Trash,DotsVertical},
    props: ['noticiasPublicadas'],
}
</script>

<style scoped>
.area-curtidas{
    width: 100%;
    height: calc(100% - 500px);
    background-color: #060F29;
}
.noticiasPublicadas{
    width: 1580px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 15px;
    padding: 15px 20px 15px 50px;
    box-sizing: border-box;
}
.noticiasPublicadas::-webkit-scrollbar{
    background-color: #616161;
    height: 7px;
    border-radius: 5px;
    width: 1480px;
    background-clip: padding-box;
    border-left: 50px transparent solid;
    border-right: 50px transparent solid;
}
.noticiasPublicadas::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    background-clip: padding-box;
    border-left: 50px transparent solid;
    border-right: 50px transparent solid;
}
.noticia{
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    max-height: 410px;
    max-width: 370px;
    margin: 0;
    background-color: #03123D;
    position: relative;
}
.img-noticia{
    height: 200px;
    background-size: cover;
    background-position: center;
}
.textos{
    margin: 20px;
}
.titulo{
    font-family: 'Playfair Display SC', sans-serif;
    font-size: 18px;
    font-weight: bold;
}
.texto{
    width: 100%;
    word-wrap: break-word;
    color: #C5C5C5;
    font-size: 15px;
}
.data{
    font-size: 15px;
    color: #04B9CC;
}
.icon{
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    right: 0px;
}
.icon2{
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    right: 30px;
}
</style>