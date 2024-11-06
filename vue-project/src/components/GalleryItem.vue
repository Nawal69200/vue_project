<template>
    <div :class="className">
      <img :src="imageSrc" class="img-fluid w-100 h-100 object-fit-cover" :alt="altText" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'GalleryItem',
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      altText: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques pour chaque item de la galerie, si nécessaire */
  </style>
  