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
        async login({commit}, user){
            try {
                const userInfo = await authService.login(user)
                commit('setLoginInfo', userInfo)
                tokenChange(userInfo.access)
                return Promise.resolve(userInfo)
            } catch (e){
                commit('setLogout')
                cleanToken()
                return Promise.reject(e)
            }
        },
        logout({commit}){
            commit('setLogout')
            cleanToken()
        }
    }
}