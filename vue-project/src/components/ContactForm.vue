<!-- src/components/ContactForm.vue -->
<template>
    <div class="my-5">
      <h2 class="text-center mb-4">Envoyez-nous un message</h2>
      <form @submit.prevent="handleSubmit" class="custom-form-style bg-light p-4 mx-auto col-10 col-md-8 col-lg-10">
        <div class="mb-3">
          <label for="name" class="form-label">Nom d'utilisateur</label>
          <input type="text" v-model="form.name" class="form-control" id="name" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="form.email" class="form-control" id="email" required />
        </div>
        <div class="mb-3">
          <label for="subject" class="form-label">Sujet</label>
          <input type="text" v-model="form.subject" class="form-control" id="subject" required />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea v-model="form.message" class="form-control" id="message" rows="5" required></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary btn-lg w-100">Envoyer</button>
        </div>
      </form>
  
      <div v-if="errorMessages" class="text-danger text-center mt-3">{{ errorMessages }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
        errorMessages: '',
      };
    },
    methods: {
      handleSubmit() {
        if (this.validateForm()) {
          // Action à exécuter après validation
          console.log('Formulaire soumis avec succès', this.form);
        } else {
          this.errorMessages = 'Veuillez remplir tous les champs correctement.';
        }
      },
      validateForm() {
        return this.form.name && this.form.email && this.form.subject && this.form.message;
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-form-style {
    background-color: #f7f0d7;
  }
  </style>
  