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
      <h1 class="publicar perfil" v-if="tipo == 1">Publicar notícia</h1>
      <router-link v-if="!(this.$route.path == '/perfil')" to="/login" class="login"><h1 >Login</h1></router-link>
      <h1 class="login perfil" v-else>{{nome}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['nome', 'tipo'],
  mounted(){
    window.addEventListener('scroll', function(){
      let header = document.querySelector('.header')
      if(this.scrollY >= 700){
        header.classList.add('opacidade') 
        header.classList.remove('sem-opacidade') 
      }else {
        header.classList.remove('opacidade') 
        header.classList.add('sem-opacidade') 
      }})
  }  
}
</script>

<style scoped>
.opacidade{
  background-color: rgba(20, 17, 44, 1);
}
.sem-opacidade{
  background-color: rgba(20, 17, 44, 0.6);
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
.nav:last-child .login{
  position: absolute;
  right: 20px;
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