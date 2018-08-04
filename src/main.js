// 入口Js
import  Vue from 'vue'
import App from './App.vue'
import  router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  //引入后多了两个效果，1，多了几个组件标签route-link,route-view,paperalign
  //2，多了俩属性，$route $router
  router
})
