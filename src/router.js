import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/list',
      name: 'list',
      component: () => import('./cpnt/board/List')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./cpnt/board/Add')
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('./cpnt/board/Show')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./cpnt/board/Edit')
    }
  ]
})
