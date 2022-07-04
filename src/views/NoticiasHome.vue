<template>
    <div class="main">
        <div class="imagemPrincipal">
            <div class="trapezioBranco">
            </div>
            <img draggable="false" src="@/assets/noticiasJanna.png" alt="">
            <h1 class="texto" >Notícias</h1>
        </div>
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
.imagemPrincipal{
    width: 90%;
    height: 300px;
    background-color: #2D265F;
    position: relative;
    margin: 90px auto 0 auto;
    display: flex;
}
.trapezioBranco{
    width: 90%;
    margin: 0 auto;
    top: -25px;
    position: relative;
    border: 5px solid #fff;
    height: 110%;
    transform: skew(-20deg);
}
.imagemPrincipal img{
    position: absolute;
    margin: -90px auto;
    left: 0;
    right: 0;
    height: 130%;
}
.texto{
    position: absolute;
    align-self: center;
    font-size: 200px;
    font-weight: normal;
    text-align: center;
    color: #fff;
    right: 0;
    left: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
}
</style>