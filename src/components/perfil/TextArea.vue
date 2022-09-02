<template>
    <div>
        <div class="textareazada">
            <label for="texto">Texto da notícia</label>
            <textarea name="texto" ref="textarea" @select="select($event)" placeholder="Escreva o texto da notícia">
            </textarea>
        </div>
        <button @click="formatar('*')">Negrito</button>
        <button @click="enviar()">Enviar teste</button>
    </div>
</template>

<script>
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
                    textasso = textasso.substring(0, textasso.indexOf(iAntigo)-1) + i + textasso.substring(textasso.indexOf(iAntigo)+1,textasso.length) 
                }
            }
            console.log(textasso)
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
</style>