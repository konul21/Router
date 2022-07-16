import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../components/Home.vue'
import AboutVue from '../components/About.vue'
import ContactVue from '../components/Contact.vue'
import BlogVue from '../components/Blog.vue'
import XetaVue from '../components/Xeta.vue'
import DetailVue from '../components/Detail.vue'
import PhotoVue from '../components/Photo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : "Home",
      component : HomeVue
    },
    {
      path : '/haqqinda',
      name : "Haqqinda",
      component : AboutVue
    },
    {
      path : '/contact',
      name : "Contact",
      component : ContactVue
    },
    {
      path : '/blog',
      name : "Blog",
      component : BlogVue
    },
    {
      path : '/detail/:slug/:id',
      name : "Detail",
      component : DetailVue
    },
    {
      path : '/photo/:slug/id',
      name : "Photo",
      component : PhotoVue
    },
    {
      path : '/:catchAll(.*)*',
      name : "Xeta",
      component : XetaVue
    },
  ]
})

export default router
