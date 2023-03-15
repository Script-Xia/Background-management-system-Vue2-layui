import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import("@components/HomePage.vue")
const Table = () => import("@components/Table.vue")

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: "/homepage"
  },
  {
    path: "/homepage",
    component: HomePage,
  },

  {
    path: "/guns",
    component: Table
  },
  {
    path: "/guns/handgun",
    component: Table
  },
  {
    path: "/guns/barndook",
    component: Table,
  },
  {
    path: "/guns/barndook/AK47",
    component: Table
  },
  {
    path: "/guns/barndook/M4A1",
    component: Table,

  },
  {
    path: "/guns/barndook/M16",
    component: Table
  },
  {
    path: "/guns/tommyGun",
    component: Table
  },
  {
    path: "/militaryPlan",
    component: Table,
  },
  {
    path: "/militaryPlan/fighterPlane",
    component: Table
  },
  {
    path: "/militaryPlan/bombardmentAircraft",
    component: Table,
  },
  {
    path: "/militaryPlan/scoutPlane",
    component: Table
  },
  {
    path: "/authority",
    component: Table
  }
]

export default new Router({
  routes,
  mode: 'history',
})
