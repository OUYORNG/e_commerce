import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '@/components/Page1.vue'
import Section1 from '@/components/Section1.vue'
import Page2 from '@/components/Page2.vue'
import Page3 from '@/components/Page3.vue'
import Section2 from '@/components/Section2.vue'
import Section3 from '@/components/Section3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component:Page1,
      children:[
        {
        path: 'section1',
        component: Section1,
        }
      ]
    },
    {
        path: '/page2',
        name: 'page2',
        component:Page2,
        children:[
          {
          path: 'section2',
          component: Section2,
          }
        ]
      },
      {
        path: '/page3',
        name: 'page3',
        component:Page3,
        children:[
          {
          path: 'section3',
          component: Section3,
          }
        ]
      },
    
    
  ],
})

export default router
