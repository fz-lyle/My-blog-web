import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/index.vue'
import Home from './views/home.vue'
import article from './views/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 首页  
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/article',
      name: 'article',
      component: article
    }
    // {
    //   path: '/article',
    //   name: 'article',
    //   component: article
    // }
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
