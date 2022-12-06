<template>
    <div>
        <div class="textareazada">
            <quillEditor class="editor" v-model="textao" :options="quillOptions"/>
            <button @click="fazerTudo">TESTE</button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"
import {quillEditor} from 'vue-quill-editor'
import 'quill/dist/quill.core.css' 
import 'quill/dist/quill.snow.css' 
import 'quill/dist/quill.bubble.css'

export default {
    computed:{
        ...mapState('enviarnoticia', ['midiastexto', 'MIDIASFRONT'])
    },
    components:{
        quillEditor
    },
    data(){
        return{
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
    methods: {
        ...mapMutations('enviarnoticia', ['setMidiaTextoNoticia', 'setMIDIASFRONT', 'setTextoNoticia']),
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

<style>
.textareazada{
    font-size: 30px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #000;
}
.textareazada .editor{
    resize: none;
    outline: 0;
    border: 0;
    font-size: 30px;
    font-family: 'Share Tech', sans-serif;
    width: 800px;
    height: 450px;
    box-sizing: border-box;
}
.ql-container{
    max-height: calc(100% - 50px);
}
.ql-container, .ql-editor, .ql-toolbar, .quill-editor, .editor{
    border: 0;
}
</style>