<template>
  <div>
      <PopupMidia :pop="pop" @fecharpop="fecharpop"/>
      <div class="container-publicar">
        <div class="row">
            <div class="inputzada">
                <label for="titulo">Título da notícia</label>
                <input name="titulo" v-model="titulo" type="text" placeholder="Escreva um título">
            </div>
            <div class="selectzada">
                <label for="topico">Tópico da notícia</label>
                <select name="topico" v-model="topico" @change="setTopicoNoticia(topico)" aria-placeholder="Escolha o tópico" id="">
                    <option value="1">League of Legends</option>
                    <option value="2">VALORANT</option>
                    <option value="3">Teamfight Tatics</option>
                    <option value="4">Wild Rift</option>
                    <option value="5">Legends Of Runeterra</option>
                </select>
            </div>
        </div>
        <div class="row2">
            <TextArea/>
            <div class="imagemzada">
                <label for="imagem">Imagem para a capa da notícia</label>
                <input type="file" id="input-file-principal" @change="Convert64()" aria-hidden="true">
                <div class="imagem" :style="{backgroundImage: midiaPrincipal ? `url('${midiaPrincipal}')` : ''}" @click="enviarArquivo">
                    <img v-if="!midiaPrincipal" src="@/assets/iconsPerfil/alterarImg.png" alt="">
                </div>
                <label for="midias">Selecione imagens para o texto da notícia</label>
                <button class="popupimagens" @click="pop = true">Imagens</button>
            </div>
        </div>
        <div class="row2">
            <button class="publicar" @click="postarNoticia">Publicar</button>
        </div>
      </div>
  </div>
</template>

<script>
import TextArea from '@/components/perfil/TextArea.vue'
import PopupMidia from '@/components/perfil/PopupMidia.vue'
import {mapMutations, mapActions, mapState} from 'vuex'
export default {
    computed:{
        ...mapState('enviarnoticia',['noticiatitulo','texto', 'midia', 'topico_idtopico'])
    },
    data(){
        return{
            pop: false,
            midiaPrincipal: '',
            titulo: '',
            topico: 1,
        }
    },
    mounted(){
        this.limparDados()
        this.setTopicoNoticia(this.topico)
    },
    watch:{
        titulo(){
            this.setTituloNoticia(this.titulo)
        }
    },
    components:{TextArea,PopupMidia},
    methods:{
        ...mapMutations('enviarnoticia', ['setTituloNoticia', 'limparDados', 'setTextoNoticia', 'setTopicoNoticia', 'setMidiaPrincipalNoticia']),
        ...mapActions('enviarnoticia', ['postNoticia']),
        fecharpop(){
            this.pop = false
        },
        enviarArquivo(){
            document.getElementById('input-file-principal').click()
        },
        Convert64(){
            let file = document.querySelector('#input-file-principal').files[0]
            var reader = new FileReader();
            const _this = this
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.midiaPrincipal = reader.result
                _this.setMidiaPrincipalNoticia(reader.result.split(',')[1])
            };
        },
        postarNoticia(){
            this.postNoticia({noticiatitulo: this.noticiatitulo, texto: this.texto, midia: this.midia, topico_idtopico: this.topico_idtopico})
        }
    }   
}

</script>

<style scoped>
.container-publicar{
    width: 1280px;
    height: 720px;
    background-color: #060F29;
    transform: translateY(-45%);
    margin: 0 auto;
    box-sizing: border-box;
    padding: 30px 75px 75px 75px;
}
.row{
    display: flex;
    gap: 170px;
    margin-bottom: 35px;
}
.row2{
    display: flex;
    gap: 60px;
    margin-bottom: 35px;
}
.inputzada{
    display: flex;
    flex-direction: column;
    font-size: 30px;

}
.inputzada input{
    font-size: 30px;
    height: 50px;
    font-family: 'Share Tech', sans-serif;
    border: 0;
    outline: 0;
    width: 630px;
    box-sizing: border-box;
    padding: 15px;
}
.selectzada{
    display: flex;
    flex-direction: column;
    font-size: 30px;
}
.selectzada select{
    height: 50px;
    outline: 0;
    font-size: 30px;
    border: 0;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    padding-left: 15px;
}
.selectzada option{
    font-size: 15px;
    width: 50px;
}

.imagemzada input{
    display: none;
}
.imagemzada{
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0;
    gap: 10px;
}
.imagemzada .imagem{
     width: 220px;
    height: 220px;
    background-color: #b2b2b2;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
}
.publicar{
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: #2095AE;
  outline: 0;
  border: 0;
  font-size: 30px;
  font-family: 'Share Tech', serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 0 auto;
  cursor: pointer;
  transition: 200ms ease-in-out;
  /* transform: translateY(45%); */
}
.popupimagens{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: #2095AE;
    font-size: 30px;
    font-family: 'Share Tech', serif;
    color: #fff;
    cursor: pointer;
    outline: 0;
    border: 0;
}
</style>