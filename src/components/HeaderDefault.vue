<template>
  <div class="header">
    <router-link to="/"><img class="logo" draggable="false" src="@/assets/logo.png" alt=""></router-link>
    <div class="nav">
      <router-link to="/noticias"><h1 class="logo-name">NewSlayers</h1></router-link>
      <label for="noticias"><h1 class="label-noticias">Noticias</h1></label>
      <label for="noticias" class="triangulo"></label>
      <select class="select-noticias" id="noticias" name="noticias">
        <option class="opcao" value="australia">Australia</option>
        <option class="opcao" value="canada">Canada</option>
        <option class="opcao" value="usa">USA</option>
      </select>
      <h1 class="login">Login</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  position: absolute;
  height: 75px;
  background-color: #14112C;
  width: 100%;
  display: flex;
  color: #fff;
  top: 0;  
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
.nav  .logo-name:hover, .login:hover{
  text-decoration: underline;
  cursor: pointer;
}
.logo-name{
  position: relative;
  left: 30px;
  margin: 0 50px 0 0;
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