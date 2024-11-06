<template>
    <div class="custom-form-style bg-light p-4 mx-auto col-10 col-md-6 col-lg-4">
      <form method="GET" action="" id="inscriptionForm">
        <div class="mb-3">
          <label for="username" class="form-label">Nom d'utilisateur</label>
          <input type="text" class="form-control" id="username" name="username" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Adresse e-mail</label>
          <input type="email" class="form-control" id="email" name="email" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" class="form-control" id="password" name="password" required />
        </div>
        <div class="mb-3">
          <label for="confirm-password" class="form-label">Confirmer le mot de passe</label>
          <input type="password" class="form-control" id="confirm-password" name="confirm-password" required />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="newsletter" name="newsletter" />
          <label class="form-check-label" for="newsletter">Je souhaite recevoir la newsletter</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="terms" name="terms" required />
          <label class="form-check-label" for="terms">
            J'accepte les <a class="text-decoration-none" href="condition_utilisation.html">conditions d'utilisation</a> et la <a class="text-decoration-none" href="politique_confidentialite.html">politique de confidentialité</a>
          </label>
        </div>
        <div>
          <button type="submit" class="btn btn-danger btn-lg w-100">S'inscrire</button>
        </div>
      </form>
  
      <hr class="my-4" />
  
      <p class="text-center">Vous avez déjà un compte ? <a class="text-decoration-none" href="connexion.html">Connectez-vous ici</a></p>
  
      <div class="text-center mt-4">
        <p>Ou inscrivez-vous avec :</p>
        <button type="button" class="btn btn-primary btn-lg w-100" id="googleBtn">
          <i class="bi bi-google"></i> Google
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "InscriptionForm",
  };
  </script>
  
  <style scoped>
  /* Styles personnalisés pour le formulaire d'inscription */
  </style>
  