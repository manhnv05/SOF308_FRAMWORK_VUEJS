import About from "@/page/Page.vue"
import Home from "@/page/Home.vue"
import SinhVien from "@/page/Sach.vue"
import { createRouter, createWebHistory } from "vue-router"
import Page from "@/page/Page.vue"
import Sach from "@/page/Sach.vue"
const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/page',
    name: 'Page',
    component: Page,
  },
  {
    path: '/sach',
    name: 'Sach',
    component: Sach,
  },
]
const router = createRouter(
    {
        history:createWebHistory(),
        routes,
    }
)
export default router