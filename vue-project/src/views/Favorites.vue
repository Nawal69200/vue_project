<template>
    <div>
      <h1 class="text-center mb-5">Mes Recettes Favorites</h1>
      <FavoriteList :favorites="favorites" />
    </div>
  </template>
  
  <script>
  import FavoriteList from '../components/FavoriteList.vue';
  import FavoriteCard from '../components/FavoriteCard.vue';
  
  export default {
    name: 'Favorites',
    components: {
      Header,
      Footer,
      FavoriteList,
      FavoriteCard
    },
    data() {
      return {
        favorites: [
          {
            title: 'Boeuf sautés aux légumes et graine de sésame',
            description: 'Découvrez notre délicieux Bœuf Sauté aux Légumes et Graines de Sésame.',
            imageSrc: require('../../assets/images/boeuf_saute.jpg'),
            detailLink: '../recettes/boeuf_saute.html',
          },
          {
            title: 'Sushis',
            description: 'Recette de sushis. Idéale pour débuter votre repas avec une touche de fraîcheur.',
            imageSrc: require('../../assets/images/sushis2.jpg'),
            detailLink: '../recettes/sushis.html',
          },
          {
            title: 'Tarte à la noix de coco',
            description: 'Délicieuse tarte à la noix de coco, crémeuse et exotique. Un régal sucré.',
            imageSrc: require('../../assets/images/tarte_coco.jpg'),
            detailLink: '../recettes/tarte_coco.html',
          },
          {
            title: 'Burger du chef',
            description: 'Ce burger appétissant se distingue par son pain brioché doré, ses tranches juteuses de bœuf de première qualité.',
            imageSrc: require('../../assets/images/burger.jpg'),
            detailLink: '../recettes/burger.html',
          },
          {
            title: 'Nouilles aux crevettes et oeufs de caille',
            description: 'Savourez notre plat exquis de Nouilles aux Crevettes et oeufs de cailles, une harmonie parfaite entre terre et mer.',
            imageSrc: require('../../assets/images/nouilles.jpg'),
            detailLink: '../recettes/nouilles_crevettes.html',
          },
          {
            title: 'Salade gourmande au poulet grillé',
            description: 'Cette salade au poulet grillé est un mélange parfait de saveurs et de textures.',
            imageSrc: require('../../assets/images/salade_poulet-grille.jpg'),
            detailLink: '../recettes/salade_poulet_grille.html',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la page des recettes favorites, si nécessaire */
  </style>
  