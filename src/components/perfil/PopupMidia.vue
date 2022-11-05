<template>
  <div class="overlay" v-show="pop" ref="pop">
    <div class="container-publicar">
        <div class="row">
            <button class="enviar" @click="$refs.input.click()">Enviar arquivo</button>
            <input type="file" style="display:none" id="input-file" ref="input" @change="adicionarMidia">
            <span class="tutorial">Para inserir o local das imagens utilize &lt;img&gt; no corpo do texto.</span>
        </div>
        <div class="imagens">
            <div 
            class="imagem"
            v-for="midia,index in midiasFront"
            :key="index"
            :style="`background-image: url(${midia})`"
            >
            <Close class="icons" @click="midiasFront.splice(index,1)" :size="50"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Close from 'vue-material-design-icons/Close.vue';
export default {
    props: ['pop'],
    components: {Close},
    data(){
        return{
            midiasFront:[]
        }
    },
    mounted(){
        this.$refs.pop.addEventListener('click',(e)=>{
            if(e.target == this.$el) this.fecharPop()
        })
    },
    methods:{
        fecharPop(){
            this.$emit('fecharpop')
        },
        Convert64(){
            return new Promise((resolve, reject) => {
                let file = document.querySelector('#input-file').files[0]
                var reader = new FileReader()
                reader.onload = function (){
                resolve(reader.result)
                }
                reader.onerror = error => (reject(error))
                reader.readAsDataURL(file)
            })
        },
        adicionarMidia(){
            this.Convert64().then(data=>{
                this.midiasFront.push(data)
            })
        }
    }
}
</script>

<style scoped>
.overlay{
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    display: flex;
}
.container-publicar{
    width: 1280px;
    height: 720px;
    background-color: #060F29;
    margin: auto auto;
    box-sizing: border-box;
    padding: 30px 75px 75px 75px;
    z-index: 4;
    overflow-y: auto;
    padding-right: 20px;
}
.imagens{
    display: flex;
    overflow-y: auto;
    flex-wrap: wrap;
    margin: auto 0;
    gap: 25px;
    margin-top: 100px;
}
.container-publicar::-webkit-scrollbar{
    background-color: #616161;
    border-radius: 5px;
    width: 7px;
}
.container-publicar::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
.imagem{
    position: relative;
    min-width: 200px;
    min-height: 200px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.icons{
    position: absolute;
    right: 0;
}
.enviar{
    width: 200px;
    height: 50px;
    font-family: 'Share Tech', sans-serif;
    font-size: 30px;
    color: #fff;
    background-color: #04B9CC;
    border-radius: 10px;
    cursor: pointer;
    transition: 200ms ease-in;
}
.enviar:hover{
    transform: scale(1.05);
}
.tutorial{
    color: rgb(112, 112, 112);
    font-size: 25px;
    margin-left: 50px;
}
</style>