<template>
    <div>
        <Header :nome="user.nome" :tipo="user.tipo"/>
        <div class="main">
            <div class="profile-container">
                <div class="conteudo">
                    <div class="foto-perfil" :style="'background-image: url('+ user.profilePic + ')'">
                    </div>
                    <div class="opcoes">
                        <div class="acoes-user">
                            <div class="botao-acao">Altera a foto de perfil</div>
                            <div class="botao-acao">Altera o nome</div>
                        </div>
                        <div class="info-user">
                            <div class="botao-acao">Nome: {{user.nome}}</div>
                            <div class="botao-acao">Curtidas recebidas: {{user.curtidas}}</div>
                            <div class="botao-acao">Noticías postadas: {{user.noticias.length}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="noticias-user">
                <div class="botao-mostrar">Notícias curtidas</div>
                <div class="botao-mostrar">Notícias publicadas</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/HeaderDefault.vue'
export default {
    components: {
        Header
    },
    data(){
        return{
            user: {
                tipo: 1,
                nome: 'yK1ngz',
                profilePic: require('@/assets/melhoresAutoresImg/nicolas.jpg'),
                curtidas: 162,
                noticias: [{}, {}, {}]
            }
        }
    }
}
</script>

<style scoped>
.main{
    position: relative;
    top: 75px;
    /* height: 63.71vh; */
}
.profile-container{
    width: 1500px;
    height: 450px;
    background-color: #2D265F;
    margin: 50px auto;
    display: flex;
}
.conteudo{
    position: relative;
    width: 96%;
    height: 90%;
    margin: auto auto;
    border: 5px solid #fff;
    align-self: center;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 30px;
}
.foto-perfil{
    border-radius: 100%;
    height: 300px;
    width: 300px;
    background-size: contain;
    margin: 0 0 0 30px;
}
.acoes-user{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.botao-acao{
    font-size: 30px;
    background-color: #14112C;
    padding: 15px;
    margin: 30px 0;
    width: fit-content;
    cursor: pointer;
    border-radius: 5px;
}
.opcoes{
    width: 70%;
    display: flex;
    justify-content: space-between;
}
.noticias-user{
    height: 200px;
    margin: 50px 0 0 180px;
}
.botao-mostrar{
    color: #fff;
    font-size: 30px;
    background-color: #2D265F;
    width: 250px;
    padding: 15px;
    margin: 30px;
}
</style>