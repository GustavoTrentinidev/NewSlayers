import axios from "axios"

export const noticia = {
    namespaced:true,
    state:{
        noticia: {}
    },
    mutations:{
        setNoticia(state,noticia){
            state.noticia = noticia
        },
    },
    actions:{
        async getNoticia({commit},id){
            const {data} = await axios.get(`/noticias/${id}`)
            commit('setNoticia',data)
        }
    }
}