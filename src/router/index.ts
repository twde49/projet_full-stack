import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeComponent from "@/components/HomeComponent.vue";
import TicketComponent from "@/components/TicketComponent.vue";
import ArtistComponent from "@/components/ArtistComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import SponsorshipComponent from "@/components/SponsorshipComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: TicketComponent
  },
  {
    path: '/artist',
    name: 'artist',
    component: ArtistComponent
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComponent
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: SponsorshipComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
