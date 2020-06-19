import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    }
  ]
})
