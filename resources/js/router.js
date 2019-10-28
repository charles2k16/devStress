import Vue from 'vue'
import Router from 'vue-router'

import Posts from './components/Posts'
import SinglePost from './components/SinglePost'
import CategoryPost from './components/CategoryPost'

import Dashboard from './views/Dashboard'
import PostsAdmin from './views/PostsAdmin'
import Categories from './views/Categories'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/post',
    name: 'Post',
    component: SinglePost
  },
  {
    path: '/tags',
    name: 'Category Posts',
    component: CategoryPost
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    name: 'Admin',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/admin/posts',
        name: 'Posts Admin',
        component: PostsAdmin
      },
      {
        path: 'categories',
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