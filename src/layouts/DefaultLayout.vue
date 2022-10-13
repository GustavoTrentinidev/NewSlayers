<template>
    <div>
        <Header/>
        <div style="font-size: 45px; margin-top:75px">Logado - {{loggedIn}}</div>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/HeaderDefault.vue'
import Footer from '../components/FooterDefault.vue'
import {mapState} from "vuex"

export default {
    computed: {
        ...mapState('auth', ['loggedIn', 'user'])
    },
    components: {Header, Footer}
}
</script>

<style>
body{
    /* background-image: linear-gradient(black, #00164b); */
    /* background-image: url("@/assets/backGround.png"); */
}
</style>