<template>
  <div class="limitador">
      <!-- <PopupMidia :pop="pop" @fecharpop="fecharpop"/> -->
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
            <div>
                <div class="textareazada">
                    <quillEditor class="editor" v-model="textao" :options="quillOptions"/>
                </div>
            </div>
            <div class="imagemzada">
                <label for="imagem">Imagem para a capa da notícia</label>
                <input type="file" id="input-file-principal" @change="Convert64()" aria-hidden="true">
                <div class="imagem" :style="{backgroundImage: midiaPrincipal ? `url('${midiaPrincipal}')` : ''}" @click="enviarArquivo">
                    <img v-if="!midiaPrincipal" src="@/assets/iconsPerfil/alterarImg.png" alt="">
                </div>
                <!-- <label for="midias">Selecione imagens para o texto da notícia</label>
                <button class="popupimagens" @click="pop = true">Imagens</button> -->
            </div>
        </div>
        <div class="row2">
            <button class="publicar" @click="postarNoticia">
                <div class="loading" :style="{backgroundImage: `url(${this.gif})`}" v-if="loading"></div>
                <div class="publicar-texto-botao" v-else>Publicar</div>
            </button>
        </div>
      </div>
  </div>
</template>

<script>
// import PopupMidia from '@/components/perfil/PopupMidia.vue'
import {mapMutations, mapActions, mapState} from 'vuex'

import {quillEditor} from 'vue-quill-editor'
import 'quill/dist/quill.core.css' 
import 'quill/dist/quill.snow.css' 
import 'quill/dist/quill.bubble.css'

export default {
    computed:{
        ...mapState('enviarnoticia',['noticiatitulo','texto', 'midia', 'topico_idtopico', 'MIDIASFRONT', 'idIr'])
    },
    data(){
        return{
            // pop: false,
            gif: require('@/assets/loading.gif'),
            loading: false,
            midiaPrincipal: '',
            titulo: '',
            topico: 1,
            textao: '',
            quillOptions: {
                placeholder: 'Escreva aqui sua notícia',
                modules: {
                    toolbar: [
                        [{ 'header': '1' }],
                        [ 'bold', 'italic', 'underline', 'strike' ],
                        [{ 'list': 'ordered' }, { 'list': 'bullet'}],
                        [],
                        [ 'link', 'image'],
                        []
                    ]
                }
            },
        }
    },
    mounted(){
        this.loading = false
        this.limparDados()
        this.setTopicoNoticia(this.topico)
    },
    watch:{
        titulo(){
            this.setTituloNoticia(this.titulo)
        },
        idIr(){
            this.$router.push({name: 'Noticia', params:{id: this.idIr}})
        }
    },
    components:{quillEditor},
    methods:{
        ...mapMutations('enviarnoticia', ['setTituloNoticia', 'setMIDIASFRONT', 'setMidiaTextoNoticia', 'limparDados', 'setTextoNoticia', 'setTopicoNoticia', 'setMidiaPrincipalNoticia']),
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
            this.fazerTudo()
            this.loading = true
            this.postNoticia({noticiatitulo: this.noticiatitulo, texto: this.texto, midia: this.midia, topico_idtopico: this.topico_idtopico})
        },

        separarFotos(){
            let i = 1
            while(i <= this.textao.split('<img src="').length -1){
                let foto = this.textao.split('<img src="')[i].split('"').join('').split('>')[0]
                // console.log(this.textao.split('<img src="')[i+1].split('"').join('').split('>')[0])
                this.setMIDIASFRONT(foto) 
                this.setMidiaTextoNoticia(foto.split(',')[1])
                i ++
            }
            // console.log(this.textao.split('<img src="')[1].split('"').join('').split('>')[0])
        },    
        mudarTexto(){
            this.MIDIASFRONT.forEach(foto=>{
                this.textao = this.textao.replace(`<img src="${foto}">`, '<img>')
                // console.log(this.textao.includes(`<img src="${foto}">`))
                console.log(this.textao)
            })
            this.setTextoNoticia(this.textao)
        },
        fazerTudo(){
            this.separarFotos()
            this.mudarTexto()
        },
    }   
}

</script>

<style scoped>
.loading{
    display: flex;
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.limitador{
    max-height: calc(720px - 500px);
}
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

.textareazada{
    font-size: 30px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #000;
    height: 450px;
}
.textareazada .editor{
    resize: none;
    outline: 0;
    border: 0;
    font-size: 30px;
    font-family: 'Share Tech', sans-serif;
    width: 800px;
    box-sizing: border-box;
    height: calc(100% - 50px);
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