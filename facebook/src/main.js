import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import VueRouter from "vue-router"
import Routes from "./routes.js"


Vue.use(VueRouter);

let router=new VueRouter({
  routes:Routes,
  mode:"history"
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
