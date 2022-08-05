<template>
  <div class="main">
    <div class="topico-imagem" :style="'background-image:' + 'url(' + require(`@/assets/carrosselHome/${$route.params.topico}-topico.png`) + ')'">
    </div>
    <div class="noticias-topico">
      <div class="noticia" :key="index" v-for="(noticia,index) in noticiasTopico">
        <div class="img-noticia" :style="'background-image:' + 'url(' + require('@/assets/melhoresAutoresImg/gragustavo.jpg') + ')'">
          <img src="" alt="">
        </div>
        <div class="info-noticia">
          <h2>
            {{noticia.date}}
          </h2>
          <h1>
            {{noticia.titulo}}
          </h1>
          <span>
            {{noticia.texto}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      possibleTopicos: ['lol', 'valorant', 'wr', 'tft', 'lor'],
      imagemPrincipal: require(`@/assets/carrosselHome/${this.$route.params.topico}-topico.png`),
      noticiasTopico: [
        {titulo: 'Lorem ipsum', date: '20/09/04', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {titulo: 'dolor sit', date: '03/08/04', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        {titulo: 'amet, consectetur', date: '15/09/04', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'}
      ]
    }
  },
  mounted(){
    if((this.possibleTopicos == undefined)){
      this.$router.push({path:'/'})
    }else{
      console.log(this.$route.params.topico)
    }
  }
}
</script>

<style scoped>
.main{
    position: relative;
    top: 75px;
    color: white;
    display: flex;
    flex-direction: column;
}
.topico-imagem{
  width: 1750px;
  height: 450px;
  background-size: cover;
  background-position: -50px;
  margin: 50px auto;
  border: 5px solid #fff;
}
.noticia{
  width: 1450px;
  height: 300px;
  background-color: #2D265F;
  margin: 50px auto;
  display: flex;
  border: 3px solid #fff;
}
.img-noticia{
  width: 700px;
  height: 240px;
  margin: auto 30px;
  background-size: cover;
}
.info-noticia{
  margin: auto 0;
}
</style>