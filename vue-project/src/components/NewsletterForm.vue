<template>
    <form
      method="GET"
      action=""
      class="custom-form-style my-5 bg-light p-4 text-center mx-auto col-11 col-md-10 col-lg-8"
      @submit.prevent="handleSubmit"
    >
      <h4 class="text-primary">Abonnez-vous à notre newsletter</h4>
      <label for="email" class="form-label">
        Recevez nos dernières recettes directement dans votre boîte mail.
      </label>
      <div class="input-group mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Entrez votre email"
          required
        />
        <button id="submit-button" class="btn btn-primary" type="submit">
          Envoyer
        </button>
      </div>
      <div v-if="message" class="mt-3">{{ message }}</div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'NewsletterForm',
    data() {
      return {
        email: '',
        message: '',
      };
    },
    methods: {
      handleSubmit() {
        if (this.validateEmail(this.email)) {
          // Ici, vous pouvez gérer l'envoi des données, par exemple, à une API.
          this.message = 'Merci pour votre abonnement !'; // Message de succès
          this.email = ''; // Réinitialiser le champ email
        } else {
          this.message = 'Veuillez entrer une adresse e-mail valide.'; // Message d'erreur
        }
      },
      validateEmail(email) {
        // Expression régulière simple pour valider l'adresse email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-form-style {
    /* Ajoutez ici les styles spécifiques si nécessaire */
  }
  </style>
  