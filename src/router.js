import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import ProjectDetails from './pages/ProjectDetails.vue';
import Error404 from './pages/Error404.vue';



const router = createRouter({
  linkExactActiveClass:'active',
  history: createWebHistory(),
  routes : [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About,
    },
    {
      path: '/i-miei-progetti',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/dettagli-progetto/:slug',
      name: 'projectDetails',
      component: ProjectDetails,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404,
    },
  ]
  
});

export { router };