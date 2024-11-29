import QLTheLoai from "@/page/QLTheLoai.vue"
import GioiThieu from "@/page/GioiThieu.vue"
import Home from "@/page/Home.vue"
import LienHe from "@/page/LienHe.vue"
import QLSanPham from "@/page/QLSanPham.vue"
import TinTuc from "@/page/TinTuc.vue"
import QLNhanVien from "@/page/QLNhanVien.vue"
import { createRouter, createWebHistory } from "vue-router"


const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gioi-thieu',
    name: 'Gioi Thieu',
    component: GioiThieu,
  },
  {
    path: '/tin-tuc',
    name: 'Tin Tuc',
    component: TinTuc,
  },
  {
    path: '/lien-he',
    name: 'Lien He',
    component: LienHe,
  },
  {
    path: '/san-pham',
    name: 'San Pham',
    component: QLSanPham,
  },
  {
    path: '/the-loai',
    name: 'The Loai',
    component: QLTheLoai,
  },
  {
    path: '/nhan-vien',
    name: 'Nhan Vien',
    component: QLNhanVien,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
