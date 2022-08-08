<template>
    <div class="tudo">
        <div class="footer">
            <div class="box-conteudo">
                <div class="box-linha">
                    <img src="@/assets/logo.png" class="logo" alt="">
                    <h1>NewSlayers</h1>
                </div>
                <h1 class="texto">Notícias sobre a Riot Games</h1>
            </div>
        </div>
        <div class="parte-branca">
            <div class="contribuicao">
                <div class="titulo">Em contribuição</div>
                <img class="imagem-if" src="@/assets/logosRedes/logo-if.png">
                <div class="copy">&copy;Copyright 2022 NewSlayers</div>    
            </div>
            <div class="parte-direita">
                <div class="contato">
                    <div class="titulo">Contato</div>
                    <div class="contato-email">gustavotrentini22@gmail.com</div>
                    <div class="contato-email">amandacrispim384@gmail.com</div>
                    <div class="contato-email">nicolasandreislc@gmail.com</div>
                </div>
                <div class="equipe">
                    <div class="titulo">Equipe</div>
                    <div class="nome">Gustavo Henrique Trentini</div>
                    <div class="nome">Amanda de Almeida Crispim</div>
                    <div class="nome">Nicolas Andrei da Silva</div>
                </div>
                <div class="sobre">
                    <div class="titulo">Sobre o site</div>
                    <router-link to="/sobre">Visualizar&#8594;</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    margin-top: 100px;
    width: 100%;
    height: 240px;
    position: relative;
    bottom: 0;
    background-color: #14112C;
    border-top: 2px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.box-conteudo{
    width: 440px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

}
.box-linha{
    display: flex;
    gap: 20px;
    margin: 0 auto;
    position: relative;
    top: 30px;
}
.box-linha h1{
    font-weight: normal;
}
.box-conteudo .texto{
    position: relative;
    top: -30px;
    font-weight: normal;
}
.logo{
  position: relative;
  width: 60px;
  height: 100px;
  top: -15px;
  left: 15px;
}
.parte-branca{
    height: 300px;
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
.contribuicao{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 20px;
    max-width: fit-content;
}
.titulo{
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
}
.imagem-if{
    width: 130px;
}
.copy{
    font-size: 20px;
}
.parte-direita{
    display: flex;
    width: 80%;
    justify-content: space-around;
    position: absolute;
    top: 35px;
    right: 50px;
}
</style>