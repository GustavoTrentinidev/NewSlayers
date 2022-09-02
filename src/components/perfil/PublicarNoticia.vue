<template>
  <div class="container-publicar">
    <div class="row">
        <div class="inputzada">
            <label for="titulo">Título da notícia</label>
            <input name="titulo" type="text" placeholder="Escreva um título">
        </div>
        <div class="selectzada">
            <label for="topico">Tópico da notícia</label>
            <select name="topico" aria-placeholder="Escolha o tópico" id="">
                <option value="League of Legends">League of Legends</option>
                <option value="VALORANT">VALORANT</option>
                <option value="Wild Rift">Wild Rift</option>
                <option value="Teamfight Tatics">Teamfight Tatics</option>
                <option value="Legends Of Runeterra">Legends Of Runeterra</option>
            </select>
        </div>
    </div>
    <div class="row2">
        <TextArea/>
        <div class="imagemzada">
            <label for="imagem">Imagem para a notícia</label>
            <input type="file" id="input-file" aria-hidden="true">
            <div class="imagem" @click="enviarArquivo">
                <img src="@/assets/iconsPerfil/alterarImg.png" alt="">
            </div>
        </div>
    </div>
    <div class="row2">
        <button class="publicar">Publicar</button>
    </div>
  </div>
</template>

<script>
import TextArea from '@/components/perfil/TextArea.vue'
export default {
    components:{TextArea},
    methods:{
        enviarArquivo(){
            document.getElementById('input-file').click()
        }
    }
}
</script>

<style>
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
    gap: 100px;
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
  transform: translateY(150%);
}
</style>