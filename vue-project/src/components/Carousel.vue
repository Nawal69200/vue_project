<template>
    <div class="container mt-5">
      <div class="text-center mb-4">
        <h3>Actus, tendance</h3>
      </div>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 col-lg-8">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button
                v-for="(item, index) in items"
                :key="index"
                type="button"
                :data-bs-target="'#carouselExampleCaptions'"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                aria-current="index === 0"
                :aria-label="'Slide ' + (index + 1)"
              ></button>
            </div>
            <div class="carousel-inner">
              <div
                v-for="(item, index) in items"
                :key="item.id"
                class="carousel-item"
                :class="{ active: index === 0 }"
              >
                <img :src="item.image" class="d-block w-100 carousel-img" :alt="item.alt" />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="mb-3">{{ item.title }}</h5>
                  <p>{{ item.description }}</p>
                  <a :href="item.link" class="btn btn-outline-warning">Lire plus</a>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Précédent</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Suivant</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Carousel',
    data() {
      return {
        items: [
          {
            id: 1,
            image: '/images/noix.jpg',
            alt: 'Les noix',
            title: 'Pourquoi devrait-on manger davantage de noix ?',
            description: 'Les noix sont riches en acides gras oméga-3, bénéfiques pour la santé cardiovasculaire.',
            link: '../carousel/noix.html',
          },
          {
            id: 2,
            image: '/images/avocats.jpg',
            alt: 'Les avocats',
            title: 'Les bienfaits des avocats',
            description: 'Les avocats contiennent des fibres, aidant à la digestion.',
            link: '../carousel/avocats.html',
          },
          {
            id: 3,
            image: '/images/piments.jpg',
            alt: 'Les piments',
            title: 'Les vertus du piment',
            description: 'Les piments possèdent des propriétés anti-inflammatoires.',
            link: '../carousel/piments.html',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel-img {
    /* Ajoutez ici des styles spécifiques pour les images du carrousel, si nécessaire */
  }
  </style>
  