<!-- src/views/Contact.vue -->
<template>
    <div class="container my-5">
      <h1 class="text-center mb-5">Restons en contact</h1>
      <ContactInfo />
      <hr />
      <ContactForm />
    </div>
  </template>
  
  <script>
  import ContactInfo from '../components/ContactInfo.vue';
  import ContactForm from '../components/ContactForm.vue';
  import ContactIcon from '../components/ContactIcon.vue';

  export default {
    name: 'Contact',
    components: {
      ContactInfo,
      ContactForm,
      ContactIcon,
      Header,
      Footer
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  </style>
  