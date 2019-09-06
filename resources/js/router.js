import Vue from 'vue'
import Router from 'vue-router'
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/',
        name: 'Posts',
        component: Posts
      },
      {
        path: 'post',
        redirect: '/post/view',
        name: 'Post',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: 'view',
            name: 'Post Read',
            component: SinglePost
          }
        ]
      }
    ]
  },
  // { path: '/admin', component: require('./components/Users.vue')}
]

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'open active',
  routes
})

export default router