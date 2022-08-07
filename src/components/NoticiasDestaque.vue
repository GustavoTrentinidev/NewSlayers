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
                <li :class="index == 0 ? 'selected' : 'no-selected'" v-for="(topico, index) in topicos" :key="index" @click="mudarParaTopico(topico,$event)">
                    {{topico}}
                </li>
            </ul>
            <div class="noticias-destacadas">
                <div v-for="(noticia,index) in currentTopico.noticias" :key="index" class="noticia" :style="'background-image: url(' + noticia.img + ');'">
                    <div class="editor-holder">
                        <div class="editor-img" :style="'background-image: url(' + noticia.editor.img + ');'"></div>
                        <div class="editor-nome">{{noticia.editor.nome}}</div>
                    </div>
                    <div class="info-noticia">
                        <div class="texto-noticia">
                            <div class="data"> {{noticia.data}}</div>
                            <div class="titulo">{{noticia.titulo | truncate(30, '...')}}</div>
                        </div>
                        <div class="texto-noticia-texto">{{noticia.texto | truncate(280, ('...'))}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.currentTopico = this.noticiasDestaqueLol
    },
    methods:{
        mudarParaTopico(topico,e){
            let topicos = document.querySelectorAll('li')
            topicos.forEach(category=>{
                category.classList = []
                category.classList.add('no-selected')
            })
            e.target.classList = []
            e.target.classList.add('selected')
            
            let noticias = [this.noticiasDestaqueLol, this.noticiasDestaqueValorant, this.noticiasDestaqueWR, this.noticiasDestaqueLor, this.noticiasDestaqueTFT]
            noticias.forEach(noticiasdestaque=>{
                if(topico == noticiasdestaque.topico){
                    this.currentTopico = noticiasdestaque
                }
            })
        }
    },
    data(){
        return{
            currentTopico:{},
            topicos: ['League of Legends', 'Valorant', 'TeamfightTatics', 'Wild Rift', 'Runeterra'],
            noticiasDestaqueLol: {
                topico: 'League of Legends',
                noticias:[
                {img: require('@/assets/melhoresAutoresImg/cinematic1.jpg') ,titulo: 'dolor sit', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/melhoresAutoresImg/cinematic2.jpg') ,titulo: 'dolor sit', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/melhoresAutoresImg/cinematic3.jpg'),titulo: 'dolor sit', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
            ]},
            noticiasDestaqueValorant: {
                topico: 'Valorant',
                noticias: [
                {img: require('@/assets/melhoresAutoresImg/cinematic4.jpg'),titulo: 'Lorem ipsum', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/melhoresAutoresImg/cinematic6.jpg'),titulo: 'Lorem ipsum', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/melhoresAutoresImg/cinematic7.jpg'),titulo: 'Lorem ipsum', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                ]},
            noticiasDestaqueWR: {
                topico: 'Wild Rift',
                noticias:[
                {img: require('@/assets/melhoresAutoresImg/cinematic8.jpg'),titulo: 'amet, consectetur', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/melhoresAutoresImg/cinematic9.jpg'),titulo: 'amet, consectetur', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/imagensTeste/wild.jpg'),titulo: 'amet, consectetur', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                ]},
            noticiasDestaqueTFT: {
                topico: 'TeamfightTatics',
                noticias:[
                {img: require('@/assets/carrosselHome/tft-topico.png'),titulo: 'Lorem ipsum', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/carrosselHome/tft-topico.png'),titulo: 'Lorem ipsum', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/carrosselHome/tft-topico.png'),titulo: 'Lorem ipsum', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                ]},
            noticiasDestaqueLor:{
                topico: 'Runeterra',
                noticias:[
                {img: require('@/assets/carrosselHome/lor-topico.png'),titulo: 'Lorem ipsum', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/carrosselHome/lor-topico.png'),titulo: 'Lorem ipsum', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
                {img: require('@/assets/carrosselHome/lor-topico.png'),titulo: 'Lorem ipsum', data: '06/08/2022', editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
            ]},
        }
    }
}
</script>

<style scoped>
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
    transform: translateY(-300%);
}
.noticia:hover .info-noticia{
    max-height: 400px;
}
.noticia:hover .texto-noticia-texto{
    opacity: 1;
    color: #fff;
}
</style>