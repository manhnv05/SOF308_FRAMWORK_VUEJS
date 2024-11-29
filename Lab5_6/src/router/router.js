import Pages from "@/page/Pages.vue";
import TacGia from "@/page/TacGia.vue";
import { createRouter, createWebHistory } from "vue-router";

// import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Tac Gia',
    component: TacGia,
  },
  {
    path: '/pages',
    name: 'Page',
    component: Pages,
  },
]
const router = createRouter(
  {
    history : createWebHistory(),
    routes,
  } 
)
export default router