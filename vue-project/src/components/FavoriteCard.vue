<template>
    <div class="col mb-4">
      <div class="favorites-card card h-100">
        <img :src="favorite.imageSrc" class="favorites-image card-img-top" :alt="favorite.title">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0">{{ favorite.title }}</h5>
            <i class="bi bi-bookmark-heart text-primary"></i>
          </div>
          <p class="card-text">{{ favorite.description }}</p>
          <div class="mt-auto d-flex justify-content-center">
            <a :href="favorite.detailLink" class="btn btn-warning">Voir la recette</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FavoriteCard',
    props: {
      favorite: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques pour chaque carte de recette favorite, si nécessaire */
  </style>
  