import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/pages/LandingPage'
import EventsPage from '@/pages/EventsPage'
import MenusPage from '@/pages/MenusPage'
import PersonalitiesPage from '@/pages/PersonalitiesPage'
import ContactPage from '@/pages/ContactPage'

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
      {
        path: '/events',
        component: EventsPage,
      },
      {
        path: '/menus',
        component: MenusPage,
      },
      {
        path: '/personalities',
        component: PersonalitiesPage,
      },
      {
        path: '/contact',
        component: ContactPage,
      },
    ],
  })
}
