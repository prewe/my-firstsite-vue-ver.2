import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'
import Preloader from './components/preloader'

Vue.component('preloader', Preloader)


Vue.use(VueRouter);



Vue.config.productionTip = false;



new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
