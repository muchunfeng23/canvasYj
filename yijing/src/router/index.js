import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import YJ from '@/components/yijing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'yj',
      component: YJ
    }
  ]
})
