<template>
  <div class="autores">
    <div class="estilo-editores esquerda">
        <div class="linha"></div>
        <span>EDITORES</span>
        <div class="linha"></div>
    </div>
      <div class="autor" v-for="(autor, index) in melhoresAutores" :key="index">
            <carousel ref="mycarousel" :perPage="Number(1)" paginationActiveColor="#fff" :paginationSize="25" paginationColor="#020013" :autoplay="true" :loop="true">
                <slide class="slide" :index="index" v-for="(noticia, index) in autor.noticiasMaisCurtidas" :key="index">
                    <div class="info-noticia">
                        <div class="titulo">{{noticia.titulo | truncate(50, '...')}}</div>
                        <div class="texto-e-botao">
                            {{noticia.texto | truncate(100, '...')}}
                            <button class="botao" @click="$router.push({path: '/noticia/1'})">VER NOTÍCIA</button>
                        </div>
                    </div>
                    
                    <div class="imagem-slide" :style="'background-image: url('+ noticia.img + ')'"></div>
                </slide>
            </carousel>
            <div class="informacoes-autor">
                <img class="icone" :src="autor.icone" alt="">
                <h1>{{autor.nome}}</h1>
            </div>
      </div>
      <div class="estilo-editores direita">
        <div class="linha"></div>
        <span>EDITORES</span>
        <div class="linha"></div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    components: {
        Carousel,
        Slide,
  },
    data(){
        return{
            melhoresAutores: [
                {
                icone: require('@/assets/melhoresAutoresImg/nicolas.jpg'),
                nome: "yK1ngz",
                noticiasMaisCurtidas: [
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic1.jpg'),
                        titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum i',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic2.jpg'),
                        titulo: 'Lorem ipsum dolor sit amet',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic3.jpg'),
                        titulo: 'Lorem ipsum dolor sit amet',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    }
                ]
                },
                {
                icone: require('@/assets/melhoresAutoresImg/gragustavo.jpg'),
                nome: "Gragustavo",
                noticiasMaisCurtidas: [
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic4.jpg'),
                        titulo: 'Lorem ipsum dolor sit amet',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic5.jpg'),
                        titulo: 'Lorem ipsum dolor sit amet',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic6.jpg'),
                        titulo: 'Lorem ipsum dolor sit amet',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    }
                ]
                },
                {
                icone: require('@/assets/melhoresAutoresImg/amanda.jpg'),
                nome: "Stanlety",
                noticiasMaisCurtidas: [
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic7.jpg'),
                        titulo: 'Lorem ipsum dolor sit amet',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic8.jpg'),
                        titulo: 'Lorem ipsum dolor sit amet',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    },
                    {
                        img: require('@/assets/melhoresAutoresImg/cinematic9.jpg'),
                        titulo: 'Lorem ipsum dolor sit amet',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    }
                ]
                }, 
            ]
        }
    }
}
</script>

<style scoped>
.autores{
    margin-top: 100px;
    display: flex;
    justify-content: center;
}
.info-noticia{
    position: absolute;
    color: #fff;
    font-size: 35px;
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.644) 50%, transparent);
    font-weight: normal;
    padding: 10px 0 0 20px;
}
.info-noticia .titulo{
    margin-right: 30px;
}
.texto-e-botao{
    font-size: 30px;
    margin-top: 50px;
    transition: opacity 0.5s ease-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
}
.botao{
    display: block;
    margin: 50px auto;
    font-size: 22.5px;
    padding: 5px;
    border-radius: 5px;
    border: 0;
    font-family: 'Share Tech', sans-serif;
    color: #0D0641;
    cursor: pointer;
}
.autor:hover .texto-e-botao{
    opacity: 1;
    visibility: visible;
    height: initial;
}

.linha{
    height: 250px;
    width: 1px;
    background-color: #000;
    margin: 5px auto;
}
.estilo-editores{
    z-index: -1;
}
.estilo-editores span{
    color: #000;
    font-size: 30px;
    writing-mode:vertical-lr;

}
.esquerda{
    left: 50px;
    position: absolute;
}
.direita{
    right: 50px;
    position: absolute;
}
.autor{
    position: relative;
    width: 430px;
    height: 630px;
    background-color: #0D0641;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.informacoes-autor .icone{
    max-width: 100px;
    max-height: 100px;
    border-radius: 100%;
    top: -25%;
    position: relative;
    margin: 0 auto;
}
/* .autor:not(:first-child):not(:last-child) {
    top: -67.5px
} */
.informacoes-autor{
    display: flex;
    flex-direction: column;
    position: relative;
    top: -80px;
    background-color: #0D0641;

}
.informacoes-autor h1{
    position: relative;
    margin: 0 auto;
    top: -25px;
    color: #fff;
}

.VueCarousel{
    height: 100%;
}
.VueCarousel .imagem-slide{
    height: 530px;
}

.imagem-slide {
    background-position: center;
    background-size: cover;
}

</style>