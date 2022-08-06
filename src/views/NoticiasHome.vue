<template>
    <div class="main">
        <div class="imagemNoticias"></div>
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
    background-image: url('@/assets/noticiasImagem.png');
    background-size:  cover;
    background-position: top;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
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