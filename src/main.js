import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
import './assets/scss/index.scss'

createApp(App).use(store).mount('#app')
