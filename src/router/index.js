import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bye from '@/components/Bye'
import Blog from '@/components/Blog'
import Contentone from '@/components/Contentone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bye',
      name: 'haha',
      component: Bye
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contentOne',
      name: 'Contentone',
      component: Contentone
    }
  ]
})
