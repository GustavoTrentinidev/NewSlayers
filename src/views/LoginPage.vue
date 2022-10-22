<template>
  <div class="main">
    <div class="container-login" v-show="actualContainer == 'Login'">
        <div class="logo-login" @click="$router.push({path:'/'})">
            <img class="logo" src="@/assets/logo.png" alt="">
            <div class="logo-text">NewSlayers</div>
        </div>
        <div class="forms">
            <span>Login</span>
            <form>
                <input required type="text" v-model="usuario.username" placeholder="Usuário">
                <div class="input-icons">
                    <input required :type="showing ? 'text' : 'password'" v-model="usuario.password" placeholder="Senha">
                    <div class="eyes">
                        <Eye style="color: grey;" class="icon" v-show="showing" @click="showing = !showing" :size="40" />
                        <EyeOff style="color: grey;" class="icon" v-show="!showing" @click="showing = !showing" :size="40" />
                    </div>
                </div>
                <div class="error" v-show="error">{{errorMessage}}</div>
                <button type="submit" @click.stop.prevent="submitLogin">Entrar</button>
            </form>
        </div>
        <div class="opcoes">
            <div @click="actualContainer = 'Cadastro'">Criar conta</div>
            <div @click="actualContainer = 'Recuperar'">Esqueceu a senha?</div>
        </div>
    </div>
    <!-- Cadastro -->
    <div class="container-cadastro" v-show="actualContainer == 'Cadastro'">
        <div class="logo-login" @click="$router.push({path:'/'})">
            <img class="logo" src="@/assets/logo.png" alt="">
            <div class="logo-text">NewSlayers</div>
        </div>
        <div class="forms">
            <span>Cadastro</span>
            <form>
                <input required type="text" placeholder="Usuário" v-model="novoUsuario.username">
                <input required type="email" placeholder="Email" v-model="novoUsuario.email">
                <input required type="text" placeholder="Senha" v-model="novoUsuario.password">
                <input required type="text" placeholder="Confirmar Senha" v-model="conf">
                <div class="error" v-show="error">{{errorMessage}}</div>
                <button @click.stop.prevent="submitRegister">Cadastrar</button>
            </form>
        </div>
        <div class="opcoes">
            <div @click="actualContainer = 'Login'">Voltar para a tela de login &#8594;</div>
        </div>
    </div>
    <!-- Container esqueceu a senha senha -->
    <div class="container-rec-senha" v-show="actualContainer == 'Recuperar'">
        <div class="logo-login" @click="$router.push({path:'/'})">
            <img class="logo" src="@/assets/logo.png" alt="">
            <div class="logo-text">NewSlayers</div>
        </div>
        <div class="forms">
            <span>Recuperação de conta</span>
            <form>
                <input required type="email" placeholder="Email">
                <button type="submit" @click="actualContainer = 'Código'">Enviar</button>
            </form>
        </div>
        <div class="opcoes">
            <div @click="actualContainer = 'Login'">Voltar para a tela de login &#8594;</div>
        </div>
    </div>
    <!-- Container código rec -->
    <div class="container-rec-senha" v-show="actualContainer == 'Código'">
        <div class="logo-login" @click="$router.push({path:'/'})">
            <img class="logo" src="@/assets/logo.png" alt="">
            <div class="logo-text">NewSlayers</div>
        </div>
        <div class="forms">
            <span>Código</span>
            <form>
                <input required type="text" placeholder="XXXXX">
                <button type="submit" @click="actualContainer = 'Senha'">Confirmar</button>
            </form>
        </div>
        <div class="opcoes">
            <div @click="actualContainer = 'Login'">Voltar para a tela de login &#8594;</div>
        </div>
    </div>
    <!-- Container nova senha -->
    <div class="container-nova-senha" v-show="actualContainer == 'Senha'">
        <div class="logo-login" @click="$router.push({path:'/'})">
            <img class="logo" src="@/assets/logo.png" alt="">
            <div class="logo-text">NewSlayers</div>
        </div>
        <div class="forms">
            <span>Nova senha</span>
            <form>
                <input required type="text" placeholder="Nova senha">
                <input required type="text" placeholder="Confirmar senha">
                <button type="submit" @click="actualContainer = 'Login'">Salvar</button>
            </form>
        </div>
        <div class="opcoes">
            <div @click="actualContainer = 'Login'">Voltar para a tela de login &#8594;</div>
        </div>
    </div>
  </div>
</template>

<script>
import Eye from 'vue-material-design-icons/Eye.vue';
import EyeOff from 'vue-material-design-icons/EyeOff.vue';
import {mapActions} from "vuex"
import axios from "axios"
export default {
    components:{Eye,EyeOff},
    props: ['cadastro'],
    mounted(){
        if(this.cadastro != undefined){
            this.actualContainer = this.cadastro
        }
        this.logout()
    },
    data(){
        return{
            showing: false,
            actualContainer: 'Login',
            usuario: {},
            error: false,
            errorMessage: '',
            novoUsuario: {},
            conf: ''
        }
    },
    watch: {
        actualContainer(){
            this.error = false
            this.errorMessage = ''
        }
    },
    methods: {
        ...mapActions('auth',['login','logout']),
        async submitLogin(){
            try{
                await this.login(this.usuario)
                this.$router.push({path: '/'})
            } catch (e){
                this.error = true
                this.errorMessage = e.response.data.detail
            }
        },
        async register(){
            if(this.conf != this.novoUsuario.password){
                this.error = true
                this.errorMessage = 'As senhas não coincidem'
            }else{
                try {
                    await axios.post('/usuarios/', this.novoUsuario)
                }catch(e){
                    this.error = true
                    this.errorMessage = e.response.data["username"][0]
                    return e
                }
            }
        },
        async submitRegister(){
            let err = await this.register()
            if(!err){
                const {username, password} = this.novoUsuario
                await this.login({username, password})
                this.$router.push({path: '/'})
            }else{
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.main {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/noticiasImagem.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.container-login{
    width: 635px;
    height: 630px;
    background-color: #020013;
    position: relative;
}
.logo-login{
    height: 70px;
    display: flex;
    margin: 20px 30px;
    position: relative;
    cursor: pointer;
}
.logo{
    position: absolute;
    width: 70px;
    top: -35px;
}
.logo-text{
    position: absolute;
    top: -5px;
    left: 80px;
    font-size: 50px;
    font-weight: bold;
    font-family: 'Playfair Display SC', serif;
}
.forms span{
    font-size: 30px;
    margin-left: 35px;
    font-family: 'Playfair Display SC', serif;
    font-weight: bold;
}
.forms form{
    display: flex;
    flex-direction: column;
    margin-top: 35px;
}
.forms form input {
    height: 75px;
    border-radius: 4px;
    outline: 0;
    border: 1px solid black;
    background-color: #D8D8D8;
    font-size: 30px;
    font-family: 'Share Tech', serif;
    margin: 0 35px 35px 35px;
    padding: 15px;
    box-sizing: border-box;
}
.error{
    font-size: 20px;
    margin: -30px 0 0 35px;
    color: #FC575E;
}
.forms form input::placeholder{
    color: rgba(0, 0, 0, 0.8);
}
.forms form button{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: #2095AE;
    outline: 0;
    border: 0;
    font-size: 30px;
    font-family: 'Share Tech', serif;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 0 auto;
    cursor: pointer;
    transition: 200ms ease-in-out;
}
.forms form button:hover{
    transform: scale(1.03);
}
.opcoes{
    font-size: 25px;
    color: rgba(255, 255, 255, 0.6);
    position: absolute;
    bottom: 25px;
    left: 35px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.opcoes div{
    cursor: pointer;
}

/* Início do componente de cadastro */
.container-cadastro{
    width: 635px;
    height: 740px;
    background-color: #020013;
    position: relative;
}

/* Início do componente de recuperação de senha */

.container-rec-senha{
    height: 400px;
    width: 635px;
    background-color: #020013;
    position: relative;
}
/* Início do nova senha */
.container-nova-senha{
    height: 515px;
    width: 635px;
    background-color: #020013;
    position: relative;
}
.input-icons{
    position: relative;
    display: flex;
    width: 100%;
}
.input-icons input{
    width: 565px;
}
.eyes{
    top: 20px;
    right: 50px;
    position: absolute;
    cursor: pointer;
}
</style>