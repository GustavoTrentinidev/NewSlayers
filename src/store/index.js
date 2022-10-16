import Vue from "vue"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"

import {auth} from "./auth"
import {usuario} from "@/store/usuarios/usuario.js"
import {usuariovisitado} from "@/store/usuarios/usuariovisitado.js"
import {noticia} from "@/store/noticia.js"
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    key: 'newslayers-vue-django'
})

const modules = {
    auth,
    usuario,
    usuariovisitado,
    noticia
}

export default new Vuex.Store({
    modules,
    plugins: [vuexLocal.plugin]
})