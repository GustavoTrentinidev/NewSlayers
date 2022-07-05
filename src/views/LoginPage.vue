<template>
  <div class="main">
      <div class="esquerda"></div>
      <div class="direita">
          <div class="conteudo">
              <div class="forms">
                  <label for="login">Login</label>
                <input class="input" placeholder="Login" name="login" type="text">
                    <label for="login">Senha</label>
                <input class="input" placeholder="Senha" name="senha" type="text">
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
}
.esquerda{
    width: 60%;
    height: 100vh;
    background-color: blue;
}
.direita{
    width: 40%;
    height: 100vh;
    background-color: brown;
    display: flex;
    align-items: center;
    justify-content: center;
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
.conteudo input{
    width: 540px;
    height: 75px;
    outline: 0;
    border-radius: 8px;
    border: 0;
    background-color: #14112C;
    color: #fff;
    font-size: 30px;
    padding: 0px 10px 0 10px;
}
</style>