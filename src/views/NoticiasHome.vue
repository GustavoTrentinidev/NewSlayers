<template>
    <div class="main">
        <div class="imagemNoticias"></div>
        <NoticiasDestaque/>
        <NoticiasContainer/>
    </div>
</template>

<script>
import NoticiasContainer from "@/components/ReadNoticias.vue"
import NoticiasDestaque from "@/components/NoticiasDestaque.vue"

export default {
    components: {NoticiasContainer, NoticiasDestaque}
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