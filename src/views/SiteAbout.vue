<template>
    <div class="main">
        <div class="about">
            <h1>Sobre o site</h1>
        </div>
        <div class="branco-sobre">
            <div class="img-branco"></div>
            <div class="textos-branco">
                <h1 class="website">Website</h1>
                <h4 class="texto-sobre">O site newslayers tem como objetivo ser um site informativo sobre os jogos da riot games. Os próprios jogadores podem criar notícias relacionadas a cada  jogo da empresa, compartilhando informações recentes de cada tópico para as suas comunidades.</h4>
            </div>
        </div>
        <div class="criadores">
            <div class="desenvolvedores-titulo">DESENVOLVEDORES</div>
            <div class="desenvolvedor-holder">
                <div class="criador" v-for="(criador,index) in criadores" :key="index">
                    <div class="imagem-desenvolvedor" :style="{backgroundImage: `url(${criador.img})`}"></div>
                    <h1>{{criador.nome}}</h1>
                    <div class="redes">
                        <a class="icon" :style="'background-image: url(' + require(`@/assets/logosRedes/linkedin.png`) + ')'" :href="criador.linkedin" target="_blank"></a>
                        <a class="icon" :style="'background-image: url(' + require(`@/assets/logosRedes/git.png`) + ')'" :href="criador.git" target="_blank"></a>
                        <a class="icon" :style="'background-image: url(' + require(`@/assets/logosRedes/instagram.png`) + ')'" :href="criador.instagram" target="_blank"></a>
                    </div>
                </div>
            </div>
            <!-- <a :href="criadores.git" target="_blank"></a> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            criadores: [
                {nome: 'Gustavo', linkedin: '', git: 'https://github.com/GustavoTrentinidev', instagram:'https://www.instagram.com/guhtrentini/', img: require('@/assets/trentas.png')},
                {nome: 'Nicolas', linkedin: '', git: 'https://github.com/Nicolasdark', instagram:'https://www.instagram.com/_nicollaz/', img: require('@/assets/nicolas.png')},
                {nome: 'Amanda', linkedin: '', git: 'https://github.com/AmandaCrispim', instagram:'https://www.instagram.com/amandacrispiim/', img: require('@/assets/amanda.png')},
                ]
        }
    }
}
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
    color: #000;
    background-image: url('@/assets/fundosobre.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.about{
    margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about h1{
    font-family: 'Kadwa', serif;
    font-weight: 100;
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
}
.website{
    font-size: 70px;
    font-family: 'Playfair Display SC', sans-serif;
    font-weight: 100;
}
.branco-sobre{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
}
.img-branco{
    width: 530px;
    height: 610px;
    background-image: url('@/assets/yasri.png');
    background-size: cover;
    background-position: center;
}
.textos-branco{
    text-align: center;
}
.desenvolvedores-titulo{
    width: 730px;
    height: 80px;
    background-color: #03123D;
    font-family: 'Kadwa', serif;
    color: #fff;
    margin: 0 auto;
    font-size: 40px;
    text-align: center;
    border-radius: 0 0 40px 40px;
}
.desenvolvedor-holder{
    display: flex;
    width: 920px;
    height: 250px;
    background-color: #03123C;
    gap: 60px;
    justify-content: center;
    margin-top: 15%;
    margin-bottom: 100px;
}
.imagem-desenvolvedor{
    width: 250px;
    height: 250px;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: -50%;
}
.texto-sobre{
  font-size: 30px;
  font-weight: normal;
  max-width: 700px;
    text-align: center;
}
.criadores{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.criador{
    height: 300px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;
}
.criador h1{
    color: #fff;
    font-size: 35px;
    font-family: 'Kadwa', serif;
    font-weight: normal;
    top: 25%;
    position: relative;
} 
.redes{
    display: flex;
    margin: auto auto ;
}
.icon{
    background-size: cover;
    height: 50px;
    width: 50px;
    cursor: pointer;
}
</style>