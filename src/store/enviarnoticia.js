import axios from "axios"
export const enviarnoticia = {
    namespaced: true,
    state:{
        noticiatitulo: '',
        texto: '',
        midiaprincipal: {},
        midiastexto: [],
        topico_idtopico: 0,
        midia: [],
    },
    mutations: {
        setTituloNoticia(state, titulo){
            state.noticiatitulo = titulo
        },
        setTextoNoticia(state, texto){
            state.texto = texto
        },
        setMidiaTextoNoticia(state, midia){
            state.midiastexto.push({midiapath: midia})
        },
        setMidiaPrincipalNoticia(state, midia){
            state.midiaprincipal = {midiapath: midia}
        },
        setTopicoNoticia(state,topico){
            state.topico_idtopico = topico
        },
        apagarIndexMidias(state,index){
            state.midiastexto.splice(index,1)
        },
        setMidias(state){
            state.midia.unshift(state.midiaprincipal)
            for(let m of state.midiastexto){
                state.midia.push(m)
            }
        },
        limparDados(state){
            state.noticiatitulo = ''
            state.texto = ''
            state.midiastexto = []
            state.midiaprincipal = {}
            state.topico = 0
            state.midia = []
        }
    },
    actions:{
        async postNoticia({commit}, noticia){
            // console.log(commit)
            commit('setMidias')
            const {data} = await axios.post('/noticias/', noticia)
            console.log(data)
        }
    }
}