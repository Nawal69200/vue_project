<template>
    <div>
      <!-- Header -->
      <Header />
  
      <!-- Page de connexion -->
      <main>
        <ConnexionForm />
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  // Importation des composants nécessaires
  import ConnexionForm from "@/components/ConnexionForm.vue";
  
  
  export default {
    name: "Connexion",
    components: {
      Header,
      Footer,
      ConnexionForm,
    },
  };
  </script>
  
  <style scoped>
  /* Styles personnalisés pour la page de connexion, si nécessaire */
  </style>
  