import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from "../components/home"
import Buytickets from "../components/buytickets"
import Mall from "../components/mall"
import Found from "../components/found"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      component:Home
    },
    {
      path:"/buytickets",
      component:Buytickets
    },
    {
      path:"/mall",
      component:Mall
    },
    {
      path:"/found",
      component:Found
    }

  ]
})
