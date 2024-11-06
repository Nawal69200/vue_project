<template>
    <div>
      <h1 class="text-center mb-5">Événements culinaires</h1>
      <EventList :events="events" />
      <div class="text-center mt-5">
        <h3>Vous organisez un événement culinaire ?</h3>
        <p>Faites-le nous savoir et nous pourrions le présenter ici !</p>
        <a href="../evenements/formulaire_evenement.html" class="btn btn-primary">Soumettre un événement</a>
      </div>
    </div>
  </template>
  
  <script>
  import EventList from '../components/EventList.vue';
  import EventCard from '../components/EventCard.vue';
  
  export default {
    name: 'Events',
    components: {
      Header,
      Footer,
      EventList,
      EventCard,
      
    },
    data() {
      return {
        events: [
          {
            title: 'Marché chinois éphémère',
            description: 'Un marché en plein air avec des produits italiens authentiques et des dégustations.',
            date: '19-20 août 2024',
            imageSrc: require('../../assets/images/marche.jpg'),
            detailLink: '../evenements/detail_marche.html',
          },
          {
            title: 'Cours de cuisine régionale',
            description: 'Explorez les spécialités de différentes régions italiennes dans ce cours interactif.',
            date: '20 mai 2024',
            imageSrc: require('../../assets/images/plat.jpg'),
            detailLink: '../evenements/detail_cours_cuisine.html',
          },
          {
            title: 'Atelier de fabrication de pain',
            description: 'Apprenez à faire vos pains et découvrez les secrets de la boulangerie artisanale.',
            date: '15 juin 2024',
            imageSrc: require('../../assets/images/pain_maison.jpg'),
            detailLink: '../evenements/detail_atelier_pain.html',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la page des événements, si nécessaire */
  </style>
  