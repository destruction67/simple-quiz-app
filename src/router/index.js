import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from "@/views/Main";
import Home from "@/views/home/Home";

import ActivityOne from "@/views/activity/ActivityOne";
import ActivityTwo from "@/views/activity/ActivityTwo";


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      requiresAuth: false,
    },
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
      },

      /** activity 1 **/
      {
        path: 'activity-one',
        name: 'ActivityOne',
        component: ActivityOne,

      },

      /** activity 2 **/
      {
        path: 'activity-two',
        name: 'ActivityTwo',
        component: ActivityTwo,

      },

    ]
  },





]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


// router.beforeEach(function(to, from, next) {
//
// });

export default router
