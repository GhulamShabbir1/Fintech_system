import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import Quasar
import { Quasar, Dialog, Notify, Loading, Dark } from 'quasar'
import quasarLang from 'quasar/lang/en-US'
import '@quasar/extras/material-icons/material-icons.css'
// src/main.js
import 'quasar/dist/quasar.css'  // ✅ pure CSS build of Quasar
import 'animate.css'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: { Dialog, Notify, Loading, Dark }, // you can add more plugins
  lang: quasarLang
})

app.mount('#app')
