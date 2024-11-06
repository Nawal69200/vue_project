<template>
    <div>
      <h1 class="text-center mb-5">Galerie de nos meilleures recettes</h1>
      <Gallery />
    </div>
  </template>
  
  <script>
  import Gallery from '../components/Gallery.vue';
  import GalleryItem from '../components/GalleryItem.vue';

  
  export default {
    name: 'GalleryPhotos',
    components: {
      Header,
      Footer,
      Gallery,
      GalleryItem
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la page de galerie, si nécessaire */
  </style>
  