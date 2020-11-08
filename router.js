import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/pages/LandingPage'

Vue.use(Router)

export function createRouter(ctx, createDefaultRouter, { scrollBehavior }) {
  return new Router({
    mode: 'history',
    scrollBehavior,
    routes: [
      {
        path: '/',
        component: LandingPage,
      },
    ],
  })
}
