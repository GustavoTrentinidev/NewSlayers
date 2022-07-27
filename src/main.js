import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/global.css"
Vue.config.productionTip = false
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
