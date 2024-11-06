<template>
    <div>
      <!-- Header -->
      <Header />
  
      <!-- Page d'inscription -->
      <main>
        <div class="my-5">
          <h1 class="text-center">Rejoignez notre communauté</h1>
          <p class="text-center mt-5 mb-4"></p>
          <InscriptionForm />
        </div>
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  // Importation des composants nécessaires
  import InscriptionForm from "@/components/InscriptionForm.vue";
  
  export default {
    name: "Inscription",
    components: {
      Header,
      Footer,
      InscriptionForm,
    },
  };
  </script>
  
  <style scoped>
  /* Styles personnalisés pour la page d'inscription, si nécessaire */
  </style>
  