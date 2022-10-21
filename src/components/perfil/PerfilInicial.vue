<template>
  <div class="informacoes-usuario">
    <div class="card-usuario">
        <div class="banner" v-if="usuarioVisitado.midia && usuarioVisitado.midia.midiabannerpath" :style="'background-image: url('+ usuarioVisitado.midia.midiabannerpath + ')'"></div>
        <div class="banner" v-else :style="'background-image: url('+ require('@/assets/noticiasImagem.png') + ')'"></div>
        <div class="img-usuario" v-if="usuarioVisitado.midia && usuarioVisitado.midia.midiaprofilepath" :style="'background-image: url('+ usuarioVisitado.midia.midiaprofilepath + ')'"></div>
        <div class="img-usuario" v-else :style="'background-image: url('+ imgUserDefault + ')'"></div>
        <div class="nome-e-email">
            <div class="nome">{{usuarioVisitado.username}}</div>
            <div class="email">{{usuarioVisitado.email}}</div>
        </div>
        <div v-if="usuarioLogado.id != usuarioVisitado.id">
            <button v-if="seguindo == false" @click="seguir" class="seguir">seguir</button>
            <button v-else class="unfollow" @click="seguir">deixar de seguir</button>
        </div>
    </div>
    <div class="seguidores">
        <div class="quantos-seguidores">
            <span v-if="usuarioVisitado.seguidores" class="length">{{usuarioVisitado.seguidores.length}}</span>
            <span class="oque">SEGUIDORES</span>
        </div>
        <div class="lista-seguidores">
            <div class="seguidor" @click="$router.push({name: 'Perfil', params:{id: seguidor.id}})" v-for="(seguidor,index) in usuarioVisitado.seguidores" :key="index">
                <div class="img-seguidor" v-if="seguidor.midia && seguidor.midia.midiaprofilepath" :style="'background-image: url('+ seguidor.midia.midiaprofilepath + ')'"></div>
                <div class="img-seguidor" v-else :style="'background-image: url('+ imgUserDefault + ')'"></div>
                <div class="nome-seguidor">{{seguidor.username}}</div>
                <div class="tipo-seguidor" v-if="seguidor.tipo == 1">Leitor</div>
                <div class="tipo-seguidor" v-else>Editor</div>
            </div>
        </div>
    </div>
    <div class="seguidores">
        <div class="quantos-seguidores">
            <span v-if="usuarioVisitado.seguindo" class="length">{{usuarioVisitado.seguindo.length}}</span>
            <span class="oque">SEGUINDO</span>
        </div>
        <div class="lista-seguidores">
            <div class="seguidor" @click="$router.push({name: 'Perfil', params:{id: manoSeguido.id}})" v-for="(manoSeguido,index) in usuarioVisitado.seguindo" :key="index">
                <div class="img-seguidor" v-if="manoSeguido.midia && manoSeguido.midia.midiaprofilepath" :style="'background-image: url('+ manoSeguido.midia.midiaprofilepath + ')'"></div>
                <div class="img-seguidor" v-else :style="'background-image: url('+ imgUserDefault + ')'"></div>
                <div class="nome-seguidor">{{manoSeguido.username}}</div>
                <div class="tipo-seguidor" v-if="manoSeguido.tipo == 0">Padrão</div>
                <div class="tipo-seguidor" v-else>Editor</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import {mapActions} from "vuex"
import axios from "axios"


export default {
    computed: {
        ...mapState('usuario', {usuarioLogado: 'usuario'}),
        ...mapState('usuariovisitado', {usuarioVisitado: 'usuariovisitado'})
    },
    data(){
        return{
            seguindo: false,
            imgUserDefault: require('@/assets/iconsPerfil/imgdefault.png')
        }
    },
    watch:{
        usuarioVisitado(){
            this.atualizaSeguindo()
        }
    },
    mounted(){
        this.atualizaSeguindo()
    },
    methods:{
        atualizaSeguindo(){
            this.usuarioVisitado.seguidores.forEach((seguidor)=>{
                if(seguidor.id == this.usuarioLogado.id){
                    return this.seguindo = true
                }
                return this.seguindo = false
            })
        },
        ...mapActions('usuariovisitado', ['getUsuariovisitado']),
        async seguir(){
             await axios.get(`/usuarios/${this.usuarioVisitado.id}/seguir/`)
            this.getUsuariovisitado(this.$route.params.id).then(()=>{
                this.atualizaSeguindo()
            })
        }
    }
}
</script>

<style scoped>
.informacoes-usuario{
    height: 550px;
    transform: translateY(-50%);
    display: flex;
    gap: 20px;
    width: fit-content;
    margin: 0 auto;
}
.card-usuario{
    width: 450px;
    height: 550px;
    background-color: #03123D;
    display: flex;
    flex-direction: column;
    align-items:  center;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.banner{
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
}
.img-usuario{
    background: #fff;
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 3px solid #0D0641;
    margin: 0 auto;
    transform: translateY(-50%);
}
.nome-e-email{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
}
.nome{
    font-size: 50px;
    font-family: 'Kadwa', serif;
}
.email{
    font-size: 20px;
    font-family: 'Share Tech', sans-serif;
}
.seguir{
    width: 150px;
    height: 50px;
    color: #fff;
    border: 0;
    outline: 0;
    background-color: #04B9CC;
    font-size: 30px;
    text-transform: uppercase;
    font-family: 'Share Tech', sans-serif;
    border-radius: 10px;
    margin-top: 50px;
    padding: 0;
    cursor: pointer;

}
.unfollow{
    width: 190px;
    height: 50px;
    color: #fff;
    border: 0;
    outline: 0;
    background-color: red;
    font-size: 25px;
    text-transform: uppercase;
    font-family: 'Share Tech', sans-serif;
    border-radius: 10px;
    margin-top: 50px;
    padding: 0;
    cursor: pointer;
}
.seguidores{
    align-self: flex-end;
    width: 350px;
    height: 450px;
    background-color: #03123D;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

}
.quantos-seguidores{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
.length{
    font-size: 30px;
    color: #2095AE;
}
.oque{
    margin-top: -10px;
    font-size: 25px;
    font-family: 'Kadwa', serif;
    border-bottom: 2px solid #04B9CC;
}
.lista-seguidores{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    overflow-y: scroll;
    flex-wrap: nowrap;
    height: 320px;
    margin-top: 10px;
    box-sizing: border-box;
    margin-right: 10px;
}
.lista-seguidores::-webkit-scrollbar{
    background-color: #616161;
    border-radius: 5px;
    width: 7px;
}
.lista-seguidores::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
.seguidor{
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #060F29;
    cursor: pointer;
}
.img-seguidor{
    background-color: #fff;
    width: 30px;
    height: 30px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 3px solid #0D0641;
}
.nome-seguidor{
    font-size: 20px;
}
.tipo-seguidor{
    margin-left: auto;
    margin-right: 10px;
}
</style>