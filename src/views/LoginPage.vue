<template>
  <div class="main">
      <div class="esquerda">
        <div class="logo">
            <img src="@/assets/logo.png" alt="" draggable="false">
            <h1 class="textoLogo">NewSlayers</h1>
        </div>
      </div>
      <div class="direita">
            <div class="border">
                <div class="conteudo">
                    <div class="forms">
                        <label for="login">Login</label>
                        <input class="input" placeholder="Login" name="login" type="text">
                            <label for="login">Senha</label>
                        <input class="input" placeholder="Senha" name="senha" type="text">
                        <button class="login" @click="$router.push(path='/')">Entrar</button>
                        <span class="forget">Esqueceu a senha?</span>
                        <hr class="divider">
                        <button class="login">Criar nova conta</button>
                    </div>
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
.main {
  display: flex;
  height: 100vh;
  background-image: url('@/assets/background-login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.esquerda{
    width: 60%;
    display: flex;
    align-items: center;
}
.logo{
    width: 900px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    top:-35px;
}
.logo img{
    width: 520px;
    height: 460px;
    object-fit: cover;
}
.textoLogo{
    font-size: 200px;
    font-weight: normal;
    color: #fff;
    margin: -50px 0 0 0;
    -webkit-user-select: none; 
    -moz-user-select: none;     
    -ms-user-select: none;      
     user-select: none;          
}

.direita{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.border{
    width: 700px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14112C;
    border: 5px solid #fff;
    
}
.conteudo{
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 500px;
    background-color: #2D265F;
    border-radius: 10px;
}
.forms{
    position:relative;
    margin: 0 auto;
    top: 70px;
    display: flex;
    flex-direction: column;
}
.forms input{
    width: 520px;
    height: 75px;
    outline: 0;
    border-radius: 8px;
    border: 0;
    background-color: #14112C;
    color: #fff;
    font-size: 30px;
    padding: 0px 10px 0 10px;
}
.forms label{
    font-size: 30px;
    color: rgb(206, 203, 203);
}
.login{
    background-color: #14112C;
    color: #fff;
    margin: 15px auto 0 auto;
    width: 250px;
    height: 50px;
    border: 0;
    font-size: 30px;
    font-family: 'Share Tech', sans-serif;
    border-radius: 8px;
    transition: 100ms ease-in-out;
    cursor: pointer;
}
.login:hover{
    transform: scale(1.05);
}
.forget{
    color: #fff;
    font-size: 17px;
    margin: 15px auto;
}
.forget:hover{
    text-decoration: underline;
    cursor: pointer;
}
.divider{
    width: 480px;
    height: 2px;
    border: 0;
    background-color: #fff;
}

</style>