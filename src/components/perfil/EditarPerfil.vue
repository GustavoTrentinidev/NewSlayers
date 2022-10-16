<template>
  <div class="editar-perfil">
    <div class="banner" v-if="usuario.midida && usuario.midia.midiabannerpath" :style="'background-image: url(' + usuario.midia.midiabannerpath + ')'">
      <div class="overlay">
        <img src="@/assets/iconsPerfil/alterarImg.png" alt="">
      </div>
    </div>
    <div class="banner" v-else :style="'background-image: url('+ require('@/assets/noticiasImagem.png') + ')'">
      <div class="overlay">
          <img src="@/assets/iconsPerfil/alterarImg.png" alt="">
      </div>
    </div>
    <div class="img-user" v-if="usuario.midia && usuario.midia.midiaprofilepath" :style="'background-image: url(' + usuario.midia.midiaprofilepath + ')'">
      <div class="overlay">
        <img src="@/assets/iconsPerfil/alterarImg.png" alt="">
      </div>
    </div>
    <div class="img-user" v-else :style="'background-image: url(' + imgUserDefault + ')'">
      <div class="overlay">
        <img src="@/assets/iconsPerfil/alterarImg.png" alt="">
      </div>
    </div>
    <div class="forms">
      <label for="nome">Nome:</label>
      <input name="nome" type="text" :value="usuario.username">
      <label for="nome">Email:</label>
      <input name="email" type="email" :value="usuario.email">
      <label for="senha">Senha:</label>
      <input name="senha" type="text" placeholder="Alterar senha">
      <label for="senha">Confirmar senha:</label>
      <input type="text" placeholder="Confirmar alteração">
      <button>Confirmar alterações</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['usuario'],
  data(){
    return{
      imgUserDefault: require('@/assets/iconsPerfil/imgdefault.png')
    }
  }
}
</script>

<style scoped>
.editar-perfil{
    width: 450px;
    height: 740px;
    background-color: #03123D;
    margin: 0 auto;
    transform: translateY(-45%);
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.overlay{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.0);
  transition: 200ms ease-in;
}
.banner{
  height: 200px;
  background-color: aquamarine;
  cursor: pointer;
  background-size: cover;
  background-position: center;
}
.banner img{
  margin: 5px 0 0 10px;
  width: 60px;
  height: 60px;
  opacity: 0;
  transition: 200ms ease-in;
}
.img-user{
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 3px solid black;
  border-radius: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
.img-user .overlay{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.img-user img{
  width: 60px;
  height: 60px;
  opacity: 0;
  transition: 200ms ease-in;

}
.img-user:hover .overlay{
  background-color: rgba(0, 0, 0, 0.3);
}
.img-user:hover img{
  opacity: 1;
}
.banner:hover img{
  opacity: 1;
}
.banner:hover .overlay{
  background-color: rgba(0, 0, 0, 0.3);
}
.forms{
  transform: translateY(-10%);
  display: flex;
  flex-direction: column;
}
.forms input{
  height: 50px;
  margin: 0 25px 25px 25px;
  color: #fff;
  background-color: #020013;
  border: 0;
  outline: 0;
  font-size: 20px;
  box-sizing: border-box;
  padding: 15px;
}
.forms label{
  font-size: 20px;
  margin-left: 25px;
}
.forms button{
  width: 280px;
  height: 50px;
  border-radius: 10px;
  background-color: #2095AE;
  outline: 0;
  border: 0;
  font-size: 15px;
  font-family: 'Share Tech', serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 0 auto;
  cursor: pointer;
  transition: 200ms ease-in-out;
}
.forms button:hover{
  transform: scale(1.05);
}
</style>