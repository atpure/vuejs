import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
Vue.use(Router)
export const router = new Router({
 mode: 'history',
 routes: [
   {
    path: '/hello',
    name: 'helloworld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
 ]
})