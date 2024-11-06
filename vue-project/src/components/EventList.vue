<template>
    <div class="container my-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <EventCard 
          v-for="(event, index) in events" 
          :key="index" 
          :event="event" />
      </div>
    </div>
  </template>
  
  <script>
  import EventCard from './EventCard.vue';
  
  export default {
    name: 'EventList',
    components: {
      EventCard,
    },
    props: {
      events: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la liste d'événements, si nécessaire */
  </style>
  