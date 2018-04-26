import Vue from 'vue'
import Router from 'vue-router'

import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import SingerDetail from 'components/singer-detail/singer-detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    }, {
      path: '/Singer',
      name: 'Singer',
      component: Singer,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    }, {
      path: '/Rank',
      name: 'Rank',
      component: Rank
    }, {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
