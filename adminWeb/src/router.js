import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/index.vue'
import Home from './views/ishome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 首页  
      component: Home,
      children: [
        {
          path:'/',
          component: () => import('./views/home.vue')
        },
        {
          path:'md',
          component: () => import('./views/md.vue')
        },
        {
          path:'type',
          component: () => import('./views/type.vue')
        },
        {
          path:'ishome',
          component: () => import('./views/ishome.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
