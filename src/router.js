import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => {
  import('./views/Home').then((module) => {
    resolve(module)
  })
}
const Find = (resolve) => {
  import('./views/Find').then((module) => {
    resolve(module)
  })
}
const Order = (resolve) => {
  import('./views/Order').then((module) => {
    resolve(module)
  })
}
const Mine = (resolve) => {
  import('./views/Mine').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('./views/Search').then((module) => {
    resolve(module)
  })
}
const UserProfile = (resolve) => {
  import('./views/test/UserProfile').then(module => {
    resolve(module)
  })
}
const UserPosts = (resolve) => {
  import('./views/test/UserPosts').then(module => {
    resolve(module)
  })
}
Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode: 'history',
    linkActiveClass: 'blue',
    routes: [
      {
        path: '*',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/find',
        name: 'find',
        component: Find,
        meta: {
          title: '发现'
        },
        children: [
          {
            path: 'profile',
            component: UserProfile
          },
          {
            path: 'posts',
            component: UserPosts
          }
        ]
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
        meta: {
          title: '订单'
        }
      },
      {
        path: '/mine',
        name: 'mine',
        component: Mine,
        meta: {
          title: '我的'
        }
      },
      {
        path: '/search',
        name: 'search',
        component: Search
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    ]
  })
  router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
  })
  return router
}
