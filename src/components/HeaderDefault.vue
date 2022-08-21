<template>
  <div class="header sem-opacidade">
    <router-link to="/"><img class="logo" draggable="false" src="@/assets/logo.png" alt=""></router-link>
    <div class="nav">
      <router-link to="/noticias/1" class="logo-name"><h1>NewSlayers</h1></router-link>
      <label for="noticias"><h1 class="label-noticias">Noticias</h1></label>
      <label for="noticias" class="triangulo"></label>
      <select class="select-noticias" id="noticias" name="noticias">
        <option class="opcao" value="league of legends">League of Legends</option>
        <option class="opcao" value="wild rift">Wild Rift</option>
        <option class="opcao" value="VALORANT">VALORANT</option>
      </select>
      <div class="pesquisa">
        <img src="@/assets/pesquisa.png" alt="" @click="irParaPaginaBusca(busca)">
        <input @click="animar($event)" type="text" placeholder="Pesquisar" v-model="busca" @keydown.enter="irParaPaginaBusca(busca)">
      </div>
      <router-link v-if="!(this.$route.path == '/perfil')" :to="{name:'paginaLogin', params: {cadastro:'Cadastro'}}" class="cadastro"><h1 >CADASTRE-SE</h1></router-link>
      <div v-if="!(this.$route.path == '/perfil')"  class="separador"></div>
      <router-link v-if="!(this.$route.path == '/perfil')" to="/login" class="login"><h1 >LOGIN</h1></router-link>
      <h1 class="login perfil" v-else>{{nome}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      busca: '',
    }
  },
  props: ['nome'],
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
.select-noticias{
  width: 125px;
  position: absolute;
  left: 250px;
  background-color: transparent;
  outline: 0;
  color: transparent;
  border: none;
  height: 30px;
  border: 0;
  cursor: pointer;
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
}
.cadastro{
  position: absolute;
  right: 120px;
  color: #04B9CC;
  text-decoration: none;
  font-weight: normal;
}
.separador{
  height: 50%;
  background-color: #fff;
  width: 2px;
  position: absolute;
  right: 110px;
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
   .select-noticias{
     left: 70px;
   }
}
</style>