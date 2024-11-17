import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { createApp } from 'vue'
import App from './BTVN.vue'
import GlobalComponent from './component/GlobalComponent.vue'

// createApp(App).mount('#app')
// Dang ky component toan cau 


const app = createApp(App)
app.component('ComponentA',GlobalComponent)
app.mount('#app')