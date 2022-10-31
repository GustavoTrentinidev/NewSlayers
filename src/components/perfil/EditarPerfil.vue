<template>
  <div class="editar-perfil">
    <div class="banner" @click="enviarBanner" v-if="usuario.midia && usuario.midia.midiabannerpath" :style="'background-image: url(' + midiaFront.midiabannerpath + ')'">
      <div class="overlay">
        <img src="@/assets/iconsPerfil/alterarImg.png" alt="">
      </div>
    </div>
    <div class="banner" @click="enviarBanner" v-else :style="'background-image: url('+ require('@/assets/noticiasImagem.png') + ')'">
      <div class="overlay">
          <img src="@/assets/iconsPerfil/alterarImg.png" alt="">
      </div>
    </div>
    <input style="display: none" type="file" id="enviarBanner" @change="convertBanner('#enviarBanner')">
    <div class="img-user" @click="enviarProfile" v-if="usuario.midia && usuario.midia.midiaprofilepath" :style="'background-image: url(' + midiaFront.midiaprofilepath + ')'">
      <div class="overlay">
        <img src="@/assets/iconsPerfil/alterarImg.png" alt="">
      </div>
    </div>
    <div class="img-user" @click="enviarProfile" v-else :style="'background-image: url(' + imgUserDefault + ')'">
      <div class="overlay">
        <img src="@/assets/iconsPerfil/alterarImg.png" alt="">
      </div>
    </div>
    <input style="display: none" type="file" id="enviarProfile" @change="convertProfile('#enviarProfile')">
    <div class="forms">
      <label for="nome">Nome:</label>
      <input name="nome" type="text" v-model="usuarioAlterado.username">
      <label for="nome">Email:</label>
      <input name="email" type="email" v-model="usuarioAlterado.email">
      <label for="senha">Senha:</label>
      <input name="senha" type="text" placeholder="Alterar senha">
      <label for="senha">Confirmar senha:</label>
      <input type="text" placeholder="Confirmar alteração">
      <button @click="salvar">Confirmar alterações</button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import {mapActions} from "vuex"
import axios from 'axios'
export default {
  computed:{
    ...mapState('usuario', ['usuario'])
  },
  mounted(){
    this.getMidia()
    this.usuarioAlterado = {username: this.usuario.username, email:this.usuario.email}
  },
  data(){
    return{
      imgUserDefault: require('@/assets/iconsPerfil/imgdefault.png'),
      midiaFront: {},
      midiaBack: {},
      usuarioAlterado: {}
    }
  },
  methods:{
    ...mapActions('usuario',['getDadosUsuarioLogado']),
    enviarBanner(){
      document.getElementById('enviarBanner').click()
    },
    enviarProfile(){
      document.getElementById('enviarProfile').click()
    },
    Convert64(id){
      return new Promise((resolve, reject) => {
        let file = document.querySelector(id).files[0]
        var reader = new FileReader()
        reader.onload = function (){
          resolve(reader.result)
        }
        reader.onerror = error => (reject(error))
        reader.readAsDataURL(file)
      })
    },
    convertBanner(id){
      let banner 
      this.Convert64(id).then(data=>{
        this.midiaFront.midiabannerpath = data
        banner = data.split(',')[1]
        this.midiaBack.midiabannerpath = banner
      })
      console.log(this.midiaBack)
    },
    convertProfile(id){
      let profile 
      this.Convert64(id).then(data=>{
        this.midiaFront.midiaprofilepath = data
        profile = data.split(',')[1]
        this.midiaBack.midiaprofilepath = profile
      })
      console.log(this.midiaBack)
    },
    getMidia(){
      this.midiaFront = {midiaprofilepath: this.usuario.midia.midiaprofilepath, midiabannerpath: this.usuario.midia.midiabannerpath}
    },
    async salvar(){
      await axios.patch(`/usuarios/${this.usuario.id}/`, this.usuarioAlterado)
      await axios.patch(`/midias-usuarios/${this.usuario.midia.id}/`, this.midiaBack)
      this.getDadosUsuarioLogado()
      console.log(this.usuario)
    }
  },

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