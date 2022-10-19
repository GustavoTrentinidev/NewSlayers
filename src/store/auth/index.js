import authService from "@/api/auth"
import { cleanToken, tokenChange } from "@/plugins/axios"


export const auth = {
    namespaced: true,
    state: () => ({
        loggedIn: false,
        user: {}
    }),
    mutations: {
        setLoginInfo(state, user){
            state.user = user
            state.loggedIn = true
        },
        setLogout(state){
            state.user = {}
            state.loggedIn = false
        }
    },
    actions: {
        async login({commit, dispatch}, user){
            try {
                const userInfo = await authService.login(user)
                commit('setLoginInfo', userInfo)
                tokenChange(userInfo.access)
                dispatch('usuario/getDadosUsuarioLogado', {}, {root:true})
                return Promise.resolve(userInfo)
            } catch (e){
                commit('setLogout')
                cleanToken()
                return Promise.reject(e)
            }
        },
        logout({commit, dispatch}){
            commit('setLogout')
            dispatch('usuario/limparDadosUsuario', {}, {root:true})
            cleanToken()
        }
    }
}