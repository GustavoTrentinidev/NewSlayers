<template>
    <div>
        <div class="container">
            <div v-for="(noticia, index) in noticias" :key="index" class="noticia">
                <div class="parte-de-cima">
                    <img draggable="false" :src="noticia.img" alt="">
                    <div class="editor-holder">
                        <div class="editor-img" :style="'background-image: url(' + noticia.editor.img + ');'"></div>
                        <div class="editor-nome">{{noticia.editor.nome}}</div>
                    </div>
                </div>
                <div class="info-noticia">
                    <div class="informacoes">
                        <div class="data">{{noticia.data}}</div>
                        <div class="titulo">{{noticia.titulo | truncate(30, '...')}}</div>
                        <div class="texto">{{noticia.texto | truncate(265, '...')}}</div>
                        <div class="topico">{{noticia.topico}}</div>
                    </div>
                </div>
            </div>
            <div class="numero-de-paginas">
                <div class="numero" v-for="index in numeroDePaginas" :key="index" @click="passarPagina(index)">
                    {{index}}
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    data(){
        return{
            numeroDePaginas: 0,
            noticias: [
                {titulo: 'NOTAS DA ATUALIZAÇÃO 12.14', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic1.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic2.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic3.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic4.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic7.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic6.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic8.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic9.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/wild.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/wild.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/gnar.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/pyke.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/yasuo.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/yasuo.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/yasuo.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/yasuo.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
            ]
        }
    },
    mounted(){
        var classeNoticia = document.querySelectorAll('.noticia')
        var numerodapag = 0
        classeNoticia.forEach((noticia,index)=>{
            index += 1
            if(index / 9 > numerodapag){
                numerodapag = numerodapag + 1
            }
            if(numerodapag == this.$route.params.pagina){
                noticia.style.display = "block"
            }else{
                noticia.style.display = "none"
            }
            
        this.numeroDePaginas = numerodapag
        })
        setTimeout(()=>{
            var botoes = document.querySelectorAll('.numero')
            botoes.forEach((botao)=>{
                botao.classList.add('outrasPaginas')
            })
            var index = parseInt(this.$route.path.split('/')[2])
            botoes[index-1].classList.add('paginaAtual')
            botoes[index-1].classList.remove('outrasPaginas')
        },10)
    },
    methods:{
        passarPagina(index){
            let paginaReq = `/noticias/${index}`
            if(paginaReq != this.$route.path){
                this.$router.push({path: paginaReq})
            }
        }
    }
}

</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    width: 1730px;
    margin: 100px auto 0 auto;
    gap: 40px;
   
}
.noticia{
    width: 550px;
    height: 700px;
    position: relative;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.parte-de-cima{
    width: 100%;
    height: 300px;
    position: relative;
}
.editor-holder{
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: calc(100%);
    height: 150px;
    color: #fff;
    font-size: 35px;
    font-weight: 200;
    background-image: linear-gradient(transparent, black);
}
.editor-img{
    width: 60px;
    height: 60px;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    margin: 0 0 10px 20px;
}
.editor-nome{
    position: absolute;
    bottom: 0;
    margin: 0 0 20px 85px;
}
.noticia img{
    width: 100%;
    height: 100%;
}
.info-noticia{
    width: 100%;
    height: 400px;
    background-color: #0D0641;
    display: flex;
    align-items: center;
    justify-content: center;
}
.informacoes{
    width: 400px;
    color: #fff;
    height: 300px;
}
.data{
    font-size: 22.5px;
    color: #03D3E0;
}
.titulo{
    font-size: 35px;
    font-weight: bold;
}
.texto{
    margin-top: 20px;
    font-size: 25px;
    height: auto;
    word-wrap: break-word
}
.topico{
    position: absolute;
    bottom: 12.5px;
    left: 12.5px;
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    font-family: 'Playfair Display SC', serif;
}
.numero-de-paginas{
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 10px;
}
.numero{
    width: 50px;
    height: 50px;
    font-size: 40px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    padding-top: 5px;
    transition: transform 200ms ease-in-out;
}
.numero:hover{
    transform: scale(1.1);
    background-color: #3a326a;
}

.outrasPaginas{
    background-color: #060126;
}
.paginaAtual{
    background-color: #675BB5;
}
@media (min-width: 300px) and (max-width: 767px) {
    .container{
        width: 300px;
        gap: 0;
    }
}
</style>