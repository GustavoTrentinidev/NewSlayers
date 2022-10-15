import Vue from "vue"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"

import {auth} from "./auth"
import {usuario} from "@/store/usuario.js"
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    key: 'newslayers-vue-django'
})

const modules = {
    auth,
    usuario
}

export default new Vuex.Store({
    modules,
    plugins: [vuexLocal.plugin]
})