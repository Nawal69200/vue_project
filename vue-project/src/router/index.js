import { createRouter, createWebHistory } from 'vue-router';

// Import des vues (Pages principales)
import Home from '../views/Home.vue';
import Events from '../views/Events.vue';
import GalleryPhotos from '../views/GalleryPhotos.vue';
import Favorites from '../views/Favorites.vue';
import Contact from '../views/Contact.vue';

// Import des composants pour les modals d'inscription et de connexion
import InscriptionForm from '@/components/InscriptionForm.vue';
import ConnexionForm from '@/components/ConnexionForm.vue';

// Définition des routes
const routes = [
  // Page d'accueil
  { path: '/', name: 'home', component: Home },

  // Pages principales
  { path: '/evenements', name: 'evenements', component: Events },
  { path: '/galerie_photos', name: 'galerie_photos', component: GalleryPhotos },
  { path: '/favoris', name: 'favoris', component: Favorites },
  { path: '/contact', name: 'contact', component: Contact },

  // Modal de Connexion et d'Inscription (non route pleine page)
  // Ces pages peuvent être affichées dans un modal, ou un composant spécifique, dans une vue comme Home.
  {
    path: '/connexion',
    name: 'connexion',
    component: ConnexionForm, // Composant dans un modal
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: InscriptionForm, // Composant dans un modal
  },
];

// Création du router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
