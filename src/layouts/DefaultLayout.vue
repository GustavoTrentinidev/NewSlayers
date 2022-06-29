<template>
    <div>
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '../components/HeaderDefault.vue'
export default {
    components: {Header}
}
</script>

<style>
body{
    background-image: url("@/assets/backGround.png");
}
</style>