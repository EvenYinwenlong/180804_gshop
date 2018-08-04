// 路由器对象模块，1，引入各种组件 2声名，3.所有路由配置路径4，main中使用
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        ShowFooter:true
      }
    },
    //默认只显示第一个
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login
    },

  ]
})
