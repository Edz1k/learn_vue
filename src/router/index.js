import { createRouter, createWebHistory } from 'vue-router';
 
const router = createRouter({ 
  history: createWebHistory(import.meta.env), 
  routes: [ 
    { 
      path: '/table', 
      name: 'table', 
      component: ()=> import('../views/TablePage.vue') 
    },
    { 
        path: '/cards', 
        name: 'cards', 
        component: ()=> import('../views/CardsPage.vue') 
    },
    { 
        path: '/profile', 
        name: 'profile', 
        component: ()=> import('../views/ProfilePage.vue') 
    },
    {
      path: '/car/:id',
      name: 'car',
      component: ()=> import('../views/CarPage.vue')
    },
    { 
      path: '/toasts', 
      name: 'toasts', 
      component: ()=> import('../views/ToasterPage.vue') 
  },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'not-found', 
        component: ()=> import('../views/NotFoundPage.vue') 
      },   
  ] 
}) 
 
export default router