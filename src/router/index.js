import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Home from "@/views/Home/Home";
import ChosenDay from "@/views/ChosenDay/ChosenDay";
import ChosenTodo from "@/views/ChosenTodo/ChosenTodo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/day/:year/:month/:day',
    name: 'ChosenDay',
    component: ChosenDay,
  },
  {
    path: '/day/:year/:month/:day/:id',
    name: 'ChosenTodo',
    component: ChosenTodo
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
