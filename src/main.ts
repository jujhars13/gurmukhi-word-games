import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Handle GitHub Pages redirect from 404.html
const redirect = new URLSearchParams(window.location.search).get('redirect')
if (redirect) {
  const redirectPath = decodeURIComponent(redirect)
  router.push(redirectPath)
}

const app = createApp(App)

app.use(router)

app.mount('#app')
