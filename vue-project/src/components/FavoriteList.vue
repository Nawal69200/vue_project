<template>
    <div class="container my-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <FavoriteCard 
          v-for="(favorite, index) in favorites" 
          :key="index" 
          :favorite="favorite" />
      </div>
    </div>
  </template>
  
  <script>
  import FavoriteCard from './FavoriteCard.vue';
  
  export default {
    name: 'FavoriteList',
    components: {
      FavoriteCard,
    },
    props: {
      favorites: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la liste des recettes favorites, si nécessaire */
  </style>
  