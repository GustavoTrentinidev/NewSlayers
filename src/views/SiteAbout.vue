<template>
    <div class="main">
        <div class="about">
            <h1>Sobre o site</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
        </div>
        <div class="criadores">
            <h1>Criadores</h1>
            <div class="criador" v-for="(criador,index) in criadores" :key="index">
                <h1>{{criador.nome}}</h1>
                <div class="redes">
                    <a class="icon" :style="'background-image: url(' + require(`@/assets/logosRedes/linkedin.png`) + ')'" :href="criador.linkedin" target="_blank"></a>
                    <a class="icon" :style="'background-image: url(' + require(`@/assets/logosRedes/git.png`) + ')'" :href="criador.git" target="_blank"></a>
                    <a class="icon" :style="'background-image: url(' + require(`@/assets/logosRedes/instagram.png`) + ')'" :href="criador.instagram" target="_blank"></a>
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
                {nome: 'Amanda de Almeida Crispim', linkedin: '', git: 'https://github.com/AmandaCrispim', instagram:'https://www.instagram.com/amandacrispiim/'},
                {nome: 'Gustavo Henrique Trentini', linkedin: '', git: 'https://github.com/GustavoTrentinidev', instagram:'https://www.instagram.com/guhtrentini/'},
                {nome: 'Nicolas Andrei Da Silva', linkedin: '', git: 'https://github.com/Nicolasdark', instagram:'https://www.instagram.com/_nicollaz/'},
                ]
        }
    }
}
</script>

<style>
.main{
    display: flex;
    flex-direction: column;
    color: #fff;
}
.about{
    margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about h1, .criadores h1{
  font-size: 100px;
  text-align: center;
}
.criadores h1{
    margin-bottom: 0;
}
.about h4{
  font-size: 40px;
  font-weight: normal;
  max-width: 1200px;
    text-align: center;
}
.criadores{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.criador{
    width: 90%;
    height: 300px;
    background-color: #0D0641;
    display: flex;
}
.criador h1{
    color: #fff;
    font-size: 80px;
    margin: auto 100px auto;
    font-weight: normal;
} 
.criador:not(:first-of-type):not(:last-child) {
    align-self: flex-end;
    flex-direction: row-reverse;
}
.redes{
    display: flex;
    margin: auto auto ;
}
.icon{
    background-size: cover;
    height: 100px;
    width: 100px;
    cursor: pointer;
}
</style>