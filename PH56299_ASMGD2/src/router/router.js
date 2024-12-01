import GioiThieu from "@/page/GioiThieu.vue"
import Home from "@/page/Home.vue"
import LienHe from "@/page/LienHe.vue"
import QLSanPham from "@/page/QLSanPham.vue"
import TinTuc from "@/page/TinTuc.vue"
import QLNhanVien from "@/page/QLNhanVien.vue"
import { createRouter, createWebHistory } from "vue-router"
import QLBaiViet from "@/page/QLBaiViet.vue"


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
    path: '/bai-viet',
    name: 'Bai Viet',
    component: QLBaiViet,
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
