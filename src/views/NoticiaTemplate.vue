<template>
  <div class="main">
    <div class="img-chamada" :style="'background-image: url(' + noticia.img + ')'"></div>
    <div class="chamada">
        <div class="container-chamada">
            <div class="area-editor">
                <div class="img-editor" :style="'background-image: url(' + noticia.editor.img + ')'"></div>
                <div class="nome-editor">{{noticia.editor.nome}}</div>
            </div>
            <div class="titulo-e-data">
                <div class="titulo">
                    {{noticia.titulo}} 
                    <div class="data">
                        {{noticia.data}}
                    </div>
                </div>
            </div>
            <div class="inteiracoes">
                <div class="curtir" @click="coracao == 'white' ? coracao = 'red' : coracao = 'white'" >CURTIR<CardsHeart class="icon" :size="30" :style="'color: ' + coracao"/></div>
                <div class="compartilhar">COMPARTILHAR<Link class="icon" :size="30"/></div>
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
export default {
    components: {CardsHeart,Link,ConteudoComentarios},
    data(){
        return{
            coracao: 'white',
            noticia: {titulo: 'ATUALIZAÇÃO NA CONSISTÊNCIA DAS PARTIDAS DO VALORANT – 2', 
            texto: '<h1> ANNIE MUITO SHOW BALA FERA SHOW DE BOLA SHOWS LEGALS </h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br> <img> <h1> ATUALIZAÇÃO NA CONSISTÊNCIA DAS PARTIDAS DO VALORANT – 2 </h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            data: '05/08/2022',
            topico: 'League of Legends',
            img: require('@/assets/noticiaTemplateChamada.png'),
            midia:[require('@/assets/noticiaTemplateTexto.png')],
            editor: {img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
            comentarios: [
                {texto:'Muito show mano!! Notícia top !!! Qualidade do site insana tbm...  Os devs e designers mandaram muitooo. Em relação à notícia, eu discordo. Pois acho que as mudanças na annie são nocivas ao meio ambiente e causam um impacto paia...', usuario:{img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),nome:'Gragustavo'}, data: '22/08/22'},
                {texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ', usuario:{img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),nome:'Gragustavo'}, data: '22/08/22'},
                {texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ', usuario:{img: require('@/assets/melhoresAutoresImg/amanda.jpg'),nome:'Stanlety'}, data: '22/08/22'},
                {texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ', usuario:{img: require('@/assets/melhoresAutoresImg/wukas.jpg'),nome:'Tropa do calvo'}, data: '22/08/22'},
                {texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ', usuario:{img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),nome:'Gragustavo'}, data: '22/08/22'},
            ]
        }
    },
    methods:{
        atualizaComentarios(comentariosAtualizados){
            this.comentarios = comentariosAtualizados
        }
    },
    mounted(){
        // console.log(this.noticia.texto.split('<img>').length -1)
        if((this.noticia.texto.split('<img>').length -1) != 0){
            this.noticia.texto = this.noticia.texto.replace("<img>", `<div class="img-texto" style="margin:50px 0; background-position:center; background-size:cover; height:600px; width:1200px; background-image: url(${this.noticia.midia[0]})"></div>`)
        }
    },
}
</script>

<style scoped>
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