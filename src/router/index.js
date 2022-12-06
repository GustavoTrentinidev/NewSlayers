import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomePage.vue'
import Login from '@/views/LoginPage.vue'
import TopicoView from '@/views/TopicoView.vue'
import About from '@/views/SiteAbout.vue'
import NoticiaTemplate from '@/views/NoticiaTemplate.vue'
import ResultadoBusca from '@/views/ResultadoBusca.vue'
import store from '@/store'

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path:`/topicos/:topico`,
        component: TopicoView,
        props: true
      },
      {
        path:'/sobre',
        component: About,
      },
      {
        name: 'Noticia',
        path:'/noticia/:id',
        component: NoticiaTemplate,
        props: true
      },
      {
        name: 'Busca',
        path:'/busca/:valorPassado',
        component: ResultadoBusca,
        props: true
      }
    ]
  },
  {
    name: "Perfil",
    path: '/perfil/:id',
    component: () => import("@/layouts/AreaPerfil.vue"),
    props:true,
  },
  {
    path: '',
    name: 'blank',
    component: () => import("@/layouts/BlankLayout.vue"),
    children: [
      {
        path: '/login',
        component: Login,
        props: true,
        name: 'paginaLogin'
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next)=>{
  if (to.matched.some(record => record.meta.auth)){
    if(!store.state.auth.loggedIn){
      next({
        name: "Login"
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
