<template>
    <div class="tudo">
        <div class="footer">
            <img src="@/assets/logo.png" class="logo" alt="">
            <div>NewSlayers</div>
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
    width: 100%;
    height: 240px;
    position: relative;
    bottom: 0;
    background-color: #020013;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    font-family: 'Playfair Display SC', sans-serif;
    font-size: 100px;
    gap: 55px;
    font-weight: 300;
}
.logo{
  position: relative;
  width: 135px;
  height: 250px;
  top: -5px;
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