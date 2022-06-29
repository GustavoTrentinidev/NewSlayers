<template>
    <div class="main">
        <div class="carrossel"></div>
        <div class="topico">
            <div class="valorant">
                <img src="@/assets/logoValorant.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.main{
    height: 100vh;
    position: relative;
    top: 75px;
    display: flex;
    flex-direction: column;
}
.carrossel{
    margin: 55px auto;
    width: 1500px;
    height: 400px;
    background-color: #14112C;
}
.topico{
    margin: 0 auto;
    position: relative;
    height: 300px;
    margin: 0 55px;
    padding: 20px;
    border: 5px solid #fff;
    background-color: #14112C;
}
.topico .valorant{
    background-image: url("@/assets/valoranttopico.jpg");
    background-position: 50% 33%;
    background-repeat: no-repeat;
    position: absolute;
    height: 300px;
    left: -55px;
    right: -55px;
}
.valorant img{
    display: block;
    margin: -30px auto;
    max-width: 70%;
}

@media (min-width: 300px) and (max-width: 767px) {
    .carrossel{
        margin: 55px auto;
        width: 250px;
        height: 100px;
        background-color: #14112C;
    }
    .valorant{
        background-image: url("@/assets/valoranttopico.jpg");
        background-position: 50% 33%;
        position: absolute;
        width: 325px;
        height: 100px;
    }
}
</style>