import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/views/Landing'
import Algorithms from '@/components/views/Algorithms'
import Crafts from '@/components/views/Crafts'
import Craft from '@/components/views/Craft'
//import CraftsScratch from '@/components/views/CraftsScratch'
//import CraftScratch from '@/components/views/CraftScratch'
import NameToColor from '@/components/crafts/nametocolor/NameToColor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/algoritmer',
      name: 'Algorithms',
      component: Algorithms
    },
    {
      path: '/pyssel',
      name: 'Crafts',
      component: Crafts
    },
    {
      path: '/pyssel/:craft',
      name: 'Craft',
      component: Craft
    },
    ,
    /*{
      path: '/scratch',
      name: 'CraftsScratch',
      component: CraftsScratch
    },
    {
      path: '/scratch/:craft',
      name: 'CraftScratch',
      component: CraftScratch
    },*/
  ]
})
