<template>
  <div class="main">
    <div class="topico-imagem" :style="'background-image:' + 'url(' + imagemPrincipal + ')'">
    </div>
    <div class="noticias-topico">
      <div class="noticia" @click="$router.push({path: '/noticia/1'})" :key="index" v-for="(noticia,index) in noticias" >
        <div class="editor-img" :style="'background-image: url(' + noticia.editor.img + ');'"></div>
        <div class="imagem" :style="'background-image: url(' + noticia.img + ');'"></div>
        <div class="noticia-textos">
          <div class="data">{{noticia.data}}</div>
          <div class="titulo">{{noticia.titulo | truncate(60, '...')}}</div>
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
      imagemPrincipal: require(`@/assets/topicos/topico-${this.$route.params.topico}.png`),
      noticias: [
                {titulo: 'NOTAS DA ATUALIZAÇÃO 12.14', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic1.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic2.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'NOTAS DA ATUALIZAÇÃO 12.22', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic3.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic4.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic7.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic6.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic8.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic9.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/wild.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/wild.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/gnar.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/pyke.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/yasuo.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
            ]
    }
  },
  mounted(){
    if((this.possibleTopicos == undefined)){
      this.$router.push({path:'/'})
    }else{
      console.log(this.$route.params.topico)
    }
    this.estruturarNoticias()
  },
  methods: {
    estruturarNoticias(){
      let classeNoticia = document.querySelectorAll('.noticia')
      let contador = 0
      classeNoticia.forEach(noticia=>{
        if(contador == 0){
          noticia.classList.add('index-0')
        }else if(contador == 1){
          noticia.classList.add('index-1')
        }
        contador += 1
        if(contador == 6){
          contador = 0
        }
      })
    }
  }
}
</script>

<style scoped>
.main{
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 75px;
  background-image: url('@/assets/topicos/background-1.png'),url('@/assets/topicos/background-2.png');
  background-position: top, bottom;
  background-repeat: no-repeat,no-repeat;
  background-size: initial 200px, initial contain;
  margin-bottom: 50px;
}
.topico-imagem{
  width: 100%;
  height: 700px;
  background-size: cover;
}

.noticias-topico{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: -80px auto 40px auto;
  gap: 20px;
  max-width: 1500px;
}
.noticia{
  width: 360px;
  height: 450px;
  background-color: #0D0641;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  position: relative;
}
.editor-img{
  width: 50px;
  height: 50px;
  position: absolute;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  top: 10px;
  left: 10px;
}
.imagem{
  background-size: cover;
  background-position: center;
  height: 250px;
}

.index-0{
  width: 925px;
  height: 540px;
}
.index-0 .imagem, .index-1 .imagem{
  width: 100%;
  height: 100%;
}
.index-1{
  width: 550px;
  height: 540px;
}
.noticia-textos{
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 10px;
}
.data{
  font-size: 15px;
  opacity: 0.6;
}
.titulo{
  font-size: 25px;
  word-wrap: break-word
}
.index-0 .noticia-textos, .index-1 .noticia-textos{
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(transparent, black);
  width: 100%;
  margin: 0;
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
  justify-content: flex-end;
}
.index-0 .data, .index-1 .data{
  font-size: 25px;
}
.index-0 .titulo, .index-1 .titulo{
  font-size: 40px;
}
.footer{
  margin: 0 !important;
}
</style>