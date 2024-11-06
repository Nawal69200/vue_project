<template>
    <div class="col mb-4">
      <div class="card event-card h-100">
        <img :src="event.imageSrc" class="card-img-top event-image" :alt="event.title">
        <div class="card-body">
          <h5 class="card-title">{{ event.title }}</h5>
          <p class="card-text">{{ event.description }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <i class="bi bi-calendar-event calendar-icon"></i>
              <small class="text-muted ms-2">{{ event.date }}</small>
            </div>
            <a :href="event.detailLink" class="btn btn-warning">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventCard',
    props: {
      event: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques pour chaque carte d'événement, si nécessaire */
  </style>
  