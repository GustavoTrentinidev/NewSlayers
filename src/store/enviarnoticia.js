import axios from "axios"
export const enviarnoticia = {
    namespaced: true,
    state:{
        noticiatitulo: '',
        texto: '',
        midiaprincipal: {},
        midiastexto: [],
        MIDIASFRONT: [],
        topico_idtopico: 0,
        midia: [],
        idIr: -1,
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
        setMIDIASFRONT(state,mf){
            state.MIDIASFRONT.push(mf)
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
        },
        mudarIdNoticiaPublicada(state,id){
            state.idIr = id
        }
    },
    actions:{
        async postNoticia({commit}, noticia){
            // console.log(commit)
            commit('setMidias')
            const {data} = await axios.post('/noticias/', noticia)
            console.log(data)
            commit('mudarIdNoticiaPublicada', data.id)
        }
    }
}