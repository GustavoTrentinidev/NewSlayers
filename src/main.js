import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/global.css"
import store from "./store"
import "@/plugins/axios"


Vue.config.productionTip = false

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
