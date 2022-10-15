import axios from "axios"


export const usuario = {
    namespaced: true,
    state: {
        usuario: {}
    },
    mutations:{
        setUsuario(state, usuario){
            state.usuario = usuario
            console.log(state.usuario)
        }
    },
    actions:{
        async getDadosUsuarioLogado({commit}){
            const {data} = await axios.get('/detail/')
            const [usuario] = data 
            commit('setUsuario', usuario)
        }
    }
}