<template>
    <div class="main">
        <div class="imagemNoticias">
            <h1 class="texto" >Notícias</h1>
            <img src="@/assets/logo.png" class="logo" alt="">
        </div>
        <div class="fade2"></div> 
        <NoticiasContainer/>
    </div>
</template>

<script>
import NoticiasContainer from "@/components/ReadNoticias.vue"

export default {
    components: {NoticiasContainer}
}
</script>

<style scoped>
.main{
    position: relative;
    top: 75px;
    display: flex;
    flex-direction: column;
}
.imagemNoticias{
    background-image: url('@/assets/noticiasImagem.jpg');
    background-size: cover;
    background-position: center;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}
.logo{
    width: 5%;
    position: absolute;
    top: 400px;
}
.texto{
    font-size: 150px;
    font-weight: normal;
    text-transform: uppercase;
    color: #fff;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
}
.fade2{
  height: 85px;
  width: 100%;
  background-image: linear-gradient(#020013 50%,rgba(0, 0, 0, 0));
}
@media (min-width: 300px) and (max-width: 767px) {
  .texto{
    font-size: 70px;
  }
  .logo{
    width: 50%;
    top: 200px;
  }
  .imagemNoticias{
    height: 500px;
  }
}
</style>