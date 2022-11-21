<template>
  <div class="header sem-opacidade">
    <router-link to="/"><img class="logo" draggable="false" src="@/assets/logo.png" alt=""></router-link>
    <div class="nav">
      <router-link to="/" class="logo-name"><h1>NewSlayers</h1></router-link>
      <h1 class="label-noticias" @click="clicado = !clicado">Notícias</h1>
      <ul class="ul-noticias" id="noticias" :class="clicado ? 'aparecendo' : ''" name="noticias">
        <li class="item-dropdown"><router-link class="item-text" :is="!clicado ? 'span' : 'router-link'" to="/topicos/lol">League of Legends</router-link></li>
        <li class="item-dropdown"><router-link class="item-text" :is="!clicado ? 'span' : 'router-link'" to="/topicos/valorant">VALORANT</router-link></li>
        <li class="item-dropdown"><router-link class="item-text" :is="!clicado ? 'span' : 'router-link'" to="/topicos/tft">TeamfightTatics</router-link></li>
        <li class="item-dropdown"><router-link class="item-text" :is="!clicado ? 'span' : 'router-link'" to="/topicos/wr">Wild Rift</router-link></li>
        <li class="item-dropdown"><router-link class="item-text" :is="!clicado ? 'span' : 'router-link'" to="/topicos/lor">Runeterra</router-link></li>
      </ul>
      <label for="noticias" class="triangulo" @click="clicado = !clicado" :class="{rotate : clicado}"></label>
      <div class="pesquisa">
        <img src="@/assets/pesquisa.png" alt="" @click="irParaPaginaBusca(busca)">
        <input @click="animar($event)" type="text" placeholder="Pesquisar" v-model="busca" @keydown.enter="irParaPaginaBusca(busca)">
      </div>
      <div v-if="!this.loggedIn" class="auth-actions">
        <router-link :to="{name:'paginaLogin', params: {cadastro:'Cadastro'}}" class="cadastro"><h1 >CADASTRE-SE</h1></router-link>
        <div class="separador"></div>
        <router-link to="/login" class="login"><h1 >LOGIN</h1></router-link>
      </div>
      <div v-else>
        <div @click="irParaPerfil" class="login"><h1 >MEU PERFIL</h1></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  computed: {
    ...mapState('usuario',['usuario']),
    ...mapState('auth',['loggedIn'])
  },
  data(){
    return{
      busca: '',
      clicado: false
    }
  },
  mounted(){
    let header = document.querySelector('.header')
    if(this.$route.path == '/'){
      window.addEventListener('scroll', function(){
        if(this.scrollY >= 700){
          header.classList.add('opacidade') 
          header.classList.remove('sem-opacidade') 
        }else {
          header.classList.remove('opacidade') 
          header.classList.add('sem-opacidade') 
      }})
    }else{
      header.classList.remove('sem-opacidade') 
      header.classList.add('opacidade') 
    }
  },
  methods:{
    irParaPerfil(){
      this.$router.push({name: 'Perfil', params:{id:this.usuario.id}})
    },
    animar(e){
      e.target.classList.add('animado')
    },
    irParaPaginaBusca(busca){
      if(busca){
        // if(busca.split(' ')[busca.split(' ').lenght-1] == ' ') {
        //   busca = busca.replace(busca[busca.length-1],'')
        // } Pedir ajuda pro ericao
        this.$router.push({name:'Busca', params:{valorPassado: busca}})
      }
    }
  }
}
</script>

<style scoped>
.opacidade{
  background-color: rgba(20, 17, 44, 1);
}
.sem-opacidade{
  background-color: rgba(20, 17, 44, 0);
}
.header{
  position: fixed;
  z-index: 100;
  height: 75px;
  width: 100%;
  display: flex;
  color: #fff;
  top: 0;  
  transition: background-color 500ms ease-in-out;
  font-family: 'Kadwa', serif;
  font-size: 13px;
  z-index: 2;
}
.logo{
  position: relative;
  width: 60px;
  height: 100px;
  top: -15px;
  left: 15px;
}
.nav{
  width: 100%;
  display: flex;
  align-items: center;
}
.logo-name{
  position: relative;
  left: 30px;
  margin: 0 50px 0 0;
  text-decoration: none;
  color: #fff;
}
.ul-noticias{
  height: 30px;
  align-items: center;
  position: absolute;
  outline: 0;
  cursor: pointer;
  padding: 0;
  list-style: none;
  top: calc(75px - 30px);
  font-family: 'Share Tech', sans-serif;
  display: flex;
  gap: 20px;
  background-color: #04B9CC;
  width: 90%;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
  transition: 0.3s;
  opacity: 0;
}
.label-noticias{
  cursor: pointer;
}
.aparecendo{
  top: 75px;
  opacity: 1 !important;
}

.item-dropdown{
  font-size: 20px;
  margin: 0;
  width: fit-content;
  color: #fff;
}
.item-dropdown .item-text{
  text-decoration: none;
  color: #fff;
}
.rotate{
  transform: rotate(180deg) translateY(-10px);
}
.opcao{
  color: #fff;
  background-color: #14112c;
}
.triangulo{
  background: #fff;
  width: 15px;
  height: 20px;
  position: relative;
  clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
  top: -5px;
  left: 2px;
}
.pesquisa{
  margin-left: 20px;
  display: flex;
  gap: 10px;
  flex-direction: row-reverse;
}
.pesquisa img{
  width: 30px;
  height: 30px;
  position: relative;
  align-self: center;
  cursor: pointer;
}
.pesquisa input{
  border: 0;
  outline: 0;
  width: 100%;
  max-width: 140px;
  font-size: 22px;
  border-bottom: #04B9CC 2px solid;
  background-color: transparent;
  color: #fff;
  padding: 2px;
  box-sizing: border-box;
  font-family: 'Kadwa', serif;
}
.animado{
  animation: diminuiInput 0.5s ease-in-out;
}
.pesquisa input::placeholder{
  font-family: 'Kadwa', serif;
  color: white;
}
@keyframes aumentaInput {
  from{
    min-width: 140px
  }
  to{
    min-width: 300px;
  }
}
@keyframes diminuiInput {
  from{
    min-width: 300px;
  }
  to{
    min-width: 140px
  }
}
.pesquisa input:focus{
  min-width: 300px;
  animation: aumentaInput 0.5s ease-in-out;
}
.nav:last-child .login{
  position: absolute;
  right: 20px;
  color: #fff;
  font-weight: normal;
  text-decoration: none;
  top: -5px;
  cursor: pointer;
}
.cadastro{
  position: absolute;
  right: 120px;
  color: #04B9CC;
  text-decoration: none;
  font-weight: normal;
  top: -5px;
}
.separador{
  height: 50%;
  background-color: #fff;
  width: 2px;
  position: absolute;
  right: 110px;
  top: 20px;
}
.publicar{
  position: absolute;
  right: 150px;
  text-decoration: underline;
}
.perfil{
  font-weight: normal;
}

@media (min-width: 300px) and (max-width: 767px) {
   .logo-name{
    display: none;
   }
   .label-noticias{
     position: relative;
     left: 20px;
   }
   .triangulo{
     left: 20px;
   }
   .ul-noticias{
     left: 70px;
   }
}
</style>