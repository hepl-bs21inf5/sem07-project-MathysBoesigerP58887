// Importation des modules nécessaires de vue-router
import { createRouter, createWebHistory } from 'vue-router'
// Importation du composant pour la page d'accueil
import HomeView from '../views/HomeView.vue'

// Création d'une instance du routeur avec les configurations nécessaires
const router = createRouter({
  // Utilisation du mode d'historique HTML5 pour gérer les URL sans le "#" (hash)
  history: createWebHistory(import.meta.env.BASE_URL),

  // Définition des différentes routes de l'application
  routes: [
    {
      // La route pour la page d'accueil
      path: '/', // URL de la route d'accueil
      name: 'home', // Nom de la route (utile pour la navigation programmée)
      component: HomeView, // Le composant à afficher lorsque cette route est visitée
    },
    {
      // La route pour la page "À propos"
      path: '/about', // URL de la route "à propos"
      name: 'about', // Nom de la route (utile pour la navigation programmée)

      // Chargement dynamique du composant "AboutView" (lazy loading)
      // Le composant sera chargé uniquement lorsque l'utilisateur accède à la route
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

// Exportation du routeur pour l'utiliser dans l'application principale
export default router
