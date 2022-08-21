<template>
  <div class="main">
    <div class="imagem-fundo"></div>
    <div class="container-pesquisa">
        <div class="row-input">
            <input class="input-pesquisa" placeholder="Pesquise o que deseja buscar" :value="valorPassado" @input="busca = $event.target.value" @keydown.enter="irParaPaginaBusca(busca)">
            <img src="@/assets/pesquisa.png" alt="" @click="irParaPaginaBusca(busca)">
        </div>
        <div class="row-opcoes">
            <div class="opcao" @click="trocarSelecao($event)" v-for="(opcao,index) in opcoesResultados" :class="index == 0 ? 'selected' : ''" :key="index">
                <div class="icon-opcao" :style="'background-image: url('+ opcao.icone + ')'"></div>
                <div class="valorOpcao">{{opcao.opcao}}</div>
            </div>
        </div>
        <div class="renderizacoes">
            <div class="noticias">
                <div class="no-result" v-show="selectedOption == 'Notícias'" v-if="noticiasFiltradas.length == 0">Sem resultados para sua pesquisa.</div>
                <div class="renderizaNoticias" v-for="noticia,index in noticiasFiltradas" :key="index" v-show="selectedOption == 'Notícias'">
                    <div class="img-noticia" :style="'background-image: url('+ noticia.img + ')'"></div>
                    <div class="textos-noticia">
                        <div class="titulo-noticia">{{noticia.titulo | truncate(280, '...')}}</div>
                        <div class="texto-noticia">{{noticia.texto | truncate(300, '...')}}</div>
                    </div>
                    <div class="editor-noticia">
                        <div class="editor-img" :style="'background-image: url('+ noticia.editor.img + ')'"></div>
                        <div class="editor-nome"> {{noticia.editor.nome}}</div>
                    </div>
                </div>
            </div>
            <div class="usuarios">
                <div class="no-result" v-show="selectedOption == 'Usuários'" v-if="usuariosFiltrados.length == 0">Sem resultados para sua pesquisa.</div>
                <div class="renderizaUsuarios" v-for="usuario,index in usuariosFiltrados" :key="index" v-show="selectedOption == 'Usuários'">
                    <div class="img-usuario" :style="'background-image: url('+ usuario.img + ')'"></div>
                    <div class="info-usuario">
                        <div class="nome-usuario">{{usuario.nome}}</div>
                        <div class="tipo-usuario" v-if="usuario.tipo == 1">Editor</div>
                        <div class="tipo-usuario" v-else>Padrão</div>
                    </div>
                </div>
            </div>
            <div class="topicos">
                <div class="no-result" v-show="selectedOption == 'Tópicos'" v-if="topicosFiltrados.length == 0">Sem resultados para sua pesquisa.</div>
                <div class="renderizaTopicos" v-for="topico,index in topicosFiltrados" :key="index" v-show="selectedOption == 'Tópicos'">
                    <div class="img-topico" :style="'background-image: url('+ topico.img + ')'" @click="$router.push({path: topico.path})"></div>
                    <div class="titulo-topico" @click="$router.push({path: topico.path})">
                        {{topico.nome}}
                    </div> 
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['valorPassado'],
    data(){
        return{
            busca: '',
            opcoesResultados: [
                {opcao:'Notícias', icone: require('@/assets/pesquisa.png')},
                {opcao:'Usuários', icone: require('@/assets/iconsPerfil/perfil.png')},
                {opcao:'Tópicos', icone: require('@/assets/iconsPerfil/comentarios.png')},
            ],
            selectedOption: '',
            topicos: [
                {nome: 'League of Legends', img: require('@/assets/topicos/topico-lol.png'), path:'/topicos/lol'},
                {nome: 'VALORANT', img: require('@/assets/topicos/topico-valorant.png'), path:'/topicos/valorant'},
                {nome: 'Legends of Runeterra', img: require('@/assets/topicos/topico-lor.png'), path:'/topicos/lor'},
                {nome: 'TeamfightTatics', img: require('@/assets/topicos/topico-tft.png'), path:'/topicos/tft'},
                {nome: 'Wild Rift', img: require('@/assets/topicos/topico-wr.png'), path:'/topicos/wr'},
            ],
            topicosFiltrados: [],
            usuarios: [
                {nome:'yK1ngz',img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), id:1, tipo: 1,},
                {nome:'Gragustavo',img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'), id:2, tipo: 1,},
                {nome:'Stanlety',img: require('@/assets/melhoresAutoresImg/amanda.jpg'),id: 3,tipo: 1,},
                {nome:'Tropa do calvo',img: require('@/assets/melhoresAutoresImg/wukas.jpg'),id: 4,tipo: 0,}
            ,],
            usuariosFiltrados: [],
            noticias: [
                {titulo: 'NOTAS DA ATUALIZAÇÃO 12.14', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ipsum in porta dictum. Fusce non pellentesque arcu, eget egestas mauris. Pellentesque consequat sem eu pretium egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic1.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic2.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/melhoresAutoresImg/cinematic3.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
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
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/yasuo.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/yasuo.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'Lorem ipsum', texto: 'fhasaysifhasjhafsyigffhasaysifhasjhafsyigfuasfhgyfsfyiagfuogsuuogasyfysuoasgfugsuasfhgyfsfyiagfuogsuuogasyfysuoasgfuags', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/imagensTeste/yasuo.jpg'), editor :{img: require('@/assets/melhoresAutoresImg/nicolas.jpg'), nome: 'yK1ngz'}},
                {titulo: 'ATUALIZAÇÃO NA CONSISTÊNCIA DAS PARTIDAS DO VALORANT – 2', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', data: '05/08/2022', topico: 'League of Legends', img: require('@/assets/noticiaTemplateChamada.png'), editor :{img: require('@/assets/melhoresAutoresImg/gragustavo.jpg'), nome: 'Gragustavo'}},
            ],
            noticiasFiltradas: []
        }
    },
    mounted(){
        this.selectedOption = this.opcoesResultados[0].opcao
        // this.filtrarTopicos()
        // this.filtrarUsuarios()
        //this.filtrar()
        this.filtrarTudo()
    },
    methods: {
        irParaPaginaBusca(busca){
            if(busca){
                this.$router.push({name:'Busca', params:{valorPassado: busca}})
            }
        },
        trocarSelecao(e){
            let opcoesQuerySelector = document.querySelectorAll('.opcao')
            let target = e.target
            if([...target.classList].indexOf('opcao') == -1){
                target = e.target.parentNode
            }
            opcoesQuerySelector.forEach(opcao=>{
                opcao.classList = ['opcao']
                if(opcao == target){
                    opcao.classList.add('selected')
                }
            })
            this.selectedOption = opcoesQuerySelector[[...opcoesQuerySelector].indexOf(target)].textContent
        },
        // filtrarTopicos(){
        //     this.topicosFiltrados = this.topicos.filter(topico=>{
        //         return topico.nome.toUpperCase().indexOf(this.valorPassado.toUpperCase()) != -1
        //     })
        // },
        // filtrarUsuarios(){
        //     this.usuariosFiltrados = this.usuarios.filter(usuario=>{
        //         return usuario.nome.toUpperCase().indexOf(this.valorPassado.toUpperCase()) != -1
        //     })
        // },
        // filtrar(){
        //     let mustFilter = [this.topicos, this.usuarios, this.noticias]
        //     let filtered = [this.topicosFiltrados, this.usuariosFiltrados, this.noticiasFiltradas]
        //     filtered.forEach((lista,index, array)=>{
        //         array[index] = mustFilter[index].filter(element=>{
        //             return element.nome.toUpperCase().indexOf(this.valorPassado.toUpperCase()) != -1
        //         })
        //         return lista[index] = array[index]
        //     })
        // },
        filtrarTudo(){
            let mustFilter = [this.topicos, this.usuarios, this.noticias]
            let filtered = [this.topicosFiltrados, this.usuariosFiltrados, this.noticiasFiltradas]
            let list = filtered.map((list,index) =>{
                if(index == 2){
                    return mustFilter[index].filter(element=>{return element.titulo.toUpperCase().includes(this.valorPassado.toUpperCase()) || element.texto.toUpperCase().includes(this.valorPassado.toUpperCase()) || element.editor.nome.toUpperCase().includes(this.valorPassado.toUpperCase())})
                }
                return mustFilter[index].filter(element=>{return element.nome.toUpperCase().indexOf(this.valorPassado.toUpperCase()) != -1})
            })
            this.topicosFiltrados = list[0]
            this.usuariosFiltrados = list[1]
            this.noticiasFiltradas = list[2]
        }
    }
}
</script>

<style scoped>
.main{
    position: relative;
    top: 75px;
}
.imagem-fundo{
    height: 700px;
    background-image: url('@/assets/noticiasImagem.png');
    background-size: cover;
    background-position: center;
    filter: blur(2px);
}
.container-pesquisa{
    width: 1600px;
    min-height: 100vh;
    background-color: #03123D;
    position: relative;
    top: -175px;
    margin: 0 auto;
    border-radius: 30px 30px 0 0;
}
.row-input{
    background-color: #020013;
    border-radius: 30px 30px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;    
}
.row-input img{
    margin-right: 30px;
    cursor: pointer;
}
.input-pesquisa{
    height: 80px;
    width: 90%;
    outline: 0;
    border: 0;
    font-size: 40px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #020013;
    color: #fff;
    border-radius: 30px 30px 0 0;
    font-family: 'Kadwa', serif;
}
.row-opcoes{
    display: flex;
    background-color: #060F29;
}
.opcao{
    display: flex;
    gap: 5px;
    padding: 10px 20px;
    box-sizing: border-box;
    cursor: pointer;
}
.icon-opcao{
    width: 60px;
    height: 60px;
    background-size: cover;
    background-position: center;
}
.valorOpcao{
    color: #fff;
    font-size: 50px;
}
.selected{
    background-color: #93ADF5;
}
.renderizacoes{
    color: #fff;
}
.no-result{
    font-size: 60px;
    left: 0;
    right: 0;
    position: absolute;
    margin: 0 auto;
    width: fit-content;
}
.topicos{
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 35px auto;
    width: 90%;
    position: relative;
}
.renderizaTopicos{
    display: flex;
    padding-bottom: 40px;    
    cursor: pointer;
}
.renderizaTopicos:not(:last-child){
    border-bottom: #2094ae9c 2px solid;
}
.img-topico{
    width: 475px;
    height: 250px;
    background-size: cover;
    background-position: center;
}
.titulo-topico{
    font-size: 60px;
    font-family: 'Playfair Display SC', sans-serif;
    font-weight: bold;
    color: #2095AE;
    align-self: center;
    margin-left: 50px;
}
.img-usuario{
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
}
.usuarios{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 90%;
    margin: 35px auto;
    gap: 30px;
    position: relative;
}
.renderizaUsuarios{
    display: flex;
    width: 460px;
    background-color: #020013;
    padding: 20px;
    box-sizing: border-box;
    gap: 20px;
    cursor: pointer;
}
.nome-usuario{
    color: #2095AE;
    font-size: 38px;
}
.tipo-usuario{
    font-size: 20px;
}
.noticias{
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 35px auto;
    width: 90%;
}
.renderizaNoticias{
    display: flex;
    gap: 20px;
    padding-bottom: 50px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
}
.renderizaNoticias:not(:last-child){
    border-bottom: #fff 2px solid;
}
.img-noticia{
    max-width: 475px;
    min-height: 300px;
    max-height: 300px;
    background-size: cover;
    background-position: center;
    flex:1;
}
.textos-noticia{
    width: 960px;
}
.titulo-noticia{
    font-family: 'Playfair Display SC', sans-serif;
    font-size: 38px;
    color: #2095AE;
    font-weight: bold;
    word-break: break-word;
}
.texto-noticia{
    font-size: 30px;
    color: #C5C5C5;
    word-break: break-word;
}
.editor-noticia{
    position: absolute;
    bottom: 50px;
    left: 475px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.editor-img{
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
}
.editor-nome{
    font-size:30px;
}
</style>