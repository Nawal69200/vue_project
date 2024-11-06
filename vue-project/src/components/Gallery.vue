<template>
    <div class="container my-5">
      <div class="row g-3">
        <GalleryItem v-for="(item, index) in galleryItems" 
                      :key="index" 
                      :imageSrc="item.src" 
                      :altText="item.alt" 
                      :className="item.className" />
      </div>
    </div>
  </template>
  
  <script>
  import GalleryItem from './GalleryItem.vue';
  
  export default {
    name: 'Gallery',
    components: {
      GalleryItem,
    },
    data() {
      return {
        galleryItems: [
          { src: require('../../assets/images/burger2.jpg'), alt: 'Burger du chef', className: 'col-md-4 col-sm-6 gallery-item gallery-item-vertical' },
          { src: require('../../assets/images/donuts.jpg'), alt: 'Donuts', className: 'col-md-4 col-sm-6 gallery-item gallery-item-vertical' },
          { src: require('../../assets/images/gastronomie.jpg'), alt: 'Plat gastronomique', className: 'col-md-4 col-sm-6 gallery-item gallery-item-vertical' },
          { src: require('../../assets/images/poulet_curry.jpg'), alt: 'Poulet au curry', className: 'col-md-4 col-sm-6 gallery-item gallery-item-square' },
          { src: require('../../assets/images/divers_aliments.jpg'), alt: 'Divers aliments et fruits', className: 'col-md-4 col-sm-6 gallery-item gallery-item-square' },
          { src: require('../../assets/images/poisson.jpg'), alt: 'Assiette de poisson', className: 'col-md-4 col-sm-6 gallery-item gallery-item-square' },
          { src: require('../../assets/images/grillades.jpg'), alt: 'Brochettes et grillades', className: 'col-md-6 col-sm-6 gallery-item gallery-item-vertical' },
          { src: require('../../assets/images/pizza2.jpg'), alt: 'Pizza au chorizo', className: 'col-md-6 col-sm-6 gallery-item gallery-item-vertical' },
          { src: require('../../assets/images/gateau_chocolat.jpg'), alt: 'Gâteau au chocolat', className: 'col-md-4 col-sm-6 gallery-item gallery-item-horizontal' },
          { src: require('../../assets/images/divers_plats.jpg'), alt: 'Divers plats', className: 'col-md-4 col-sm-6 gallery-item gallery-item-horizontal' },
          { src: require('../../assets/images/pancake.jpg'), alt: 'Pancake au sirop d\'érable', className: 'col-md-4 col-sm-6 gallery-item gallery-item-horizontal' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la galerie, si nécessaire */
  </style>
  