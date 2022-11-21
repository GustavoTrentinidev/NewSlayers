import Vue from "vue"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"

import {auth} from "./auth"
import {usuario} from "@/store/usuarios/usuario.js"
import {usuariovisitado} from "@/store/usuarios/usuariovisitado.js"
import {noticia} from "@/store/noticia.js"
import {enviarnoticia} from '@/store/enviarnoticia.js'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    key: 'newslayers-vue-django',
    reducer: (state) => {
        // eslint-disable-next-line
        const { enviarnoticia, ...others } = state;
        return others;
    },
})

const modules = {
    auth,
    usuario,
    usuariovisitado,
    noticia,
    enviarnoticia
}

export default new Vuex.Store({
    modules,
    plugins: [vuexLocal.plugin]
})