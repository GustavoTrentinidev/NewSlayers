<template>
  <div class="autores">
      <div class="autor" v-for="(autor, index) in melhoresAutores" :key="index">
          <img class="icone" :src="autor.icone" alt="">
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            melhoresAutores: [
                {
                icone: require('@/assets/melhoresAutoresImg/nicolas.jpg')
                },
                {
                icone: require('@/assets/melhoresAutoresImg/gragustavo.jpg')
                },
                {
                icone: require('@/assets/melhoresAutoresImg/amanda.jpg')
                }, 
            ]
        }
    }
}
</script>

<style scoped>
.autores{
    display: flex;
}
.autor{
    position: relative;
    width: 430px;
    height: 530px;
    background-color: #423981;
    margin: 0 auto;
}
.autor .icone{
    max-width: 70px;
    border-radius: 100%;
}
.autor:not(:first-child):not(:last-child) {
    top: -67.5px
}
</style>