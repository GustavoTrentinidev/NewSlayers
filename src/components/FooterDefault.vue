<template>
  <div class="footer">
    <div class="box-conteudo">
        <div class="box-linha">
            <img src="@/assets/logo.png" class="logo" alt="">
            <h1>NewSlayers</h1>
        </div>
        <h1 class="texto">Notícias sobre a Riot Games</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    margin-top: 100px;
    width: 100%;
    height: 240px;
    position: relative;
    bottom: 0;
    background-color: #14112C;
    border-top: 2px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.box-conteudo{
    width: 440px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

}
.box-linha{
    display: flex;
    gap: 20px;
    margin: 0 auto;
    position: relative;
    top: 30px;
}
.box-linha h1{
    font-weight: normal;
}
.box-conteudo .texto{
    position: relative;
    top: -30px;
    font-weight: normal;
}
.logo{
  position: relative;
  width: 60px;
  height: 100px;
  top: -15px;
  left: 15px;
}
</style>