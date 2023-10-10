import { createApp } from 'vue'
import router from './router'
// import './style.css'
import App from './App.vue'
import { Button } from 'vant'
import 'lib-flexible/flexible'
import '@/common/style/theme.css'

const app = createApp(App)
app.use(router)
app.use(Button)
app.mount('#app')
