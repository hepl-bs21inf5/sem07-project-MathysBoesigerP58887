// Importation des styles nécessaires
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Création de l'application Vue
const app = createApp(App)

// Utilisation du routeur pour activer la gestion des routes dans l'application
app.use(router)

// Monte l'application sur l'élément avec l'ID `#app` dans le fichier HTML
app.mount('#app')
