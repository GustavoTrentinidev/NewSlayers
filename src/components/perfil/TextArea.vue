<template>
    <div>
        <div class="textareazada">
            <div class="acoes">
                <label for="texto">Texto da notícia</label>
                <div class="alinhamento-direita">
                    <button class="negrito" @click="formatar('*')">B</button>
                    <span class="tutorial">- Subtítulo</span>
                </div>
                </div>
                
            <textarea name="texto" ref="textarea" @change="enviar" @select="select($event)" placeholder="Escreva o texto da notícia">
            </textarea>
        </div>
    </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
    data(){
        return{
            primeiro: '',
            ultimo: '',
            textarea: '',
            textoSelecionado: '',
            textoNaoSelecionado1: '',
            textoNaoSelecionado2: '',
        }
    },
    mounted(){
        this.textarea = this.$refs.textarea
    },
    methods: {
        ...mapMutations('enviarnoticia', ['setTextoNoticia']),
        select(e){
            let textoSelecionado = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
            let textoNaoSelecionado1 = e.target.value.substring(0, e.target.selectionStart)
            let textoNaoSelecionado2 = e.target.value.substring(e.target.selectionEnd, e.target.value.length)
            this.primeiro = textoSelecionado[0]
            this.ultimo = textoSelecionado[textoSelecionado.length-1]
            this.textoSelecionado = textoSelecionado
            this.textoNaoSelecionado1 = textoNaoSelecionado1
            this.textoNaoSelecionado2 = textoNaoSelecionado2
        },
        formatar(formatacao){
            if(this.primeiro != formatacao || this.ultimo != formatacao){    
                this.textarea.value = this.textoNaoSelecionado1 + (formatacao + this.textoSelecionado + formatacao) + this.textoNaoSelecionado2
            }else{
                this.textarea.value = this.textoNaoSelecionado1 + this.textoSelecionado.substring(1,this.textoSelecionado.length-1) + this.textoNaoSelecionado2
            } 
        },
        enviar(){
            let textasso = this.textarea.value.replace(/[\r\n]/gm, '<br>')
            let tituloAberto = false
            for (let i of textasso){
                if(i == "*"){
                    let iAntigo = i
                    if(tituloAberto){
                        i = "<h1/>"
                    }else{
                        i = "<h1>"
                    }
                    tituloAberto = !tituloAberto
                    textasso = textasso.substring(0, textasso.indexOf(iAntigo)) + i + textasso.substring(textasso.indexOf(iAntigo)+1,textasso.length) 
                }
            }
            this.setTextoNoticia(textasso)
        }
    }
}
</script>

<style>
.textareazada{
    font-size: 30px;
    display: flex;
    flex-direction: column;
}
.textareazada textarea{
    resize: none;
    outline: 0;
    border: 0;
    font-size: 30px;
    font-family: 'Share Tech', sans-serif;
    width: 800px;
    height: 450px;
    box-sizing: border-box;
    padding: 20px;
}
.acoes{
    display: flex;
    gap: 10px;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
}
.acoes button{
    width: 35px;
    height: 35px;
    border-radius: 0;
    outline: 0;
}
.negrito{
    font-weight: bold;
    font-size: 20px;
}
.tutorial{
    color: rgb(112, 112, 112);
    font-size: 25px;
    margin-left: 10px;
}
</style>