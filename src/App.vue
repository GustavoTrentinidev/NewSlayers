<template>
  <router-view :key="$route.path"/>
</template>

<script>
import {tokenChange} from "@/plugins/axios.js" 
export default{
  beforeCreate(){
    tokenChange()
  }
}
</script>

<style>
</style>
