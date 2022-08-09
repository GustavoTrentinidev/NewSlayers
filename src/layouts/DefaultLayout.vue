<template>
    <div>
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/HeaderDefault.vue'
import Footer from '../components/FooterDefault.vue'

export default {
    components: {Header, Footer}
}
</script>

<style>
body{
    /* background-image: linear-gradient(black, #00164b); */
    /* background-image: url("@/assets/backGround.png"); */
    background-color: #090623;

}
</style>