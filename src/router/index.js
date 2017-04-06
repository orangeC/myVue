import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bye from '@/components/Bye'
import Blog from '@/components/Blog'

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
    }
  ]
})
