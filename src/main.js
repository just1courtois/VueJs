import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
//import store from './store'

//import VueAxios from 'vue-axios'



// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'





createApp(App).use(router).mount('#app')


