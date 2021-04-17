import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import TheNavigation from './components/layout/TheNavigation.vue'
// createApp(App).use(router).mount('#app')

const app = createApp(App)

app.component('the-navigation',TheNavigation)
app.use(router).mount('#app')