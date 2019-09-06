import Vue from 'vue'
import Router from 'vue-router'
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'
import AdminContainer from './containers/AdminContainer'

Vue.use(Router)

let routes = [
  {
    path: '/',
    redirect: '/posts',
    name: 'Home',
    component: {
      render (c) { return c('router-view')}
    },
    children: [
      {
        path: 'posts',
        name: 'Posts',
        component: Posts,
      },
      {
        path: 'post',
        name: 'Post',
        component: SinglePost
      },
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminContainer
  }
]

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'open active',
  routes
})

export default router