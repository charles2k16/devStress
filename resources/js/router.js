import Vue from 'vue'
import Router from 'vue-router'
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'
import Dashboard from './views/Dashboard'
import PostsAdmin from './views/PostsAdmin'
import Categories from './views/Categories'

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
    redirect: '/dashboard',
    name: 'Admin',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/admin/posts',
        name: 'Posts',
        component: PostsAdmin
      },
      {
        path: '/admin/categories',
        name: 'Categories',
        component: Categories
      },
    ]
  }
]

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'open active',
  routes
})

export default router