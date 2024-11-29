import DongHo from "@/page/DongHo.vue";
import Page from "@/page/Page.vue";
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '',
    name: 'Dong Ho',
    component: DongHo,
  },
  {
    path: '/page',
    name: 'Page',
    component: Page,
  },
]
const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)
export default router