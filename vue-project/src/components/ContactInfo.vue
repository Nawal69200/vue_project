<!-- src/components/ContactInfo.vue -->
<template>
    <div class="row mb-5">
      <ContactIcon
        icon="envelope"
        title="Email"
        :content="'mailto:contact@recettes-x.com'"
        isLink
      />
      <ContactIcon
        icon="telephone"
        title="Téléphone"
        :content="'+33 4 23 45 67 89'"
      />
      <ContactIcon
        icon="geo-alt"
        title="Adresse"
        :content="'123 Rue de la Gastronomie<br>69001 LYON, France'"
      />
    </div>
  </template>
  
  <script>
  import ContactIcon from './ContactIcon.vue';
  
  export default {
    name: 'ContactInfo',
    components: {
      ContactIcon,
    },
  };
  </script>
  
  <style scoped>
  .contact-icon {
    font-size: 2rem;
    color: #ff6f61;
  }
  </style>
  