import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./cpnt/Home')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./cpnt/board/List')
    },
    {
      path: '/list1',
      name: 'list1',
      component: () => import('./cpnt/board/List1')
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
