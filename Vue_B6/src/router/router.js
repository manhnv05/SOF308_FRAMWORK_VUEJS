import About from "@/page/About.vue"
import Home from "@/page/Home.vue"
import SinhVien from "@/page/SinhVien.vue"
import { createRouter, createWebHistory } from "vue-router"
const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/sinh-vien',
    name: 'Sinh Vien',
    component: SinhVien,
  },
]
const router = createRouter(
    {
        history:createWebHistory(),
        routes,
    }
)
export default router