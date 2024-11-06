<template>
    <div class="mt-5">
      <h1 class="text-center">Connexion</h1>
      <form method="GET" action="" class="custom-form-style text-center my-5 bg-light p-4 mx-auto col-10 col-md-6 col-lg-4" id="connexionForm">
        <div class="mb-3">
          <label for="email" class="form-label">Adresse mail</label>
          <input type="text" class="form-control w-75 mx-auto" id="email" name="email" placeholder="Entrez votre adresse mail" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" class="form-control w-75 mx-auto" id="password" name="password" placeholder="Entrez votre mot de passe" required />
        </div>
        <button type="submit" class="btn btn-danger d-block w-75 mx-auto mb-2">Connexion</button>
        <a href="password_oublie.html" class="d-block mb-2 text-decoration-none">Mot de passe oublié ?</a>
        <p class="mt-3 mb-2">OU CONNECTEZ-VOUS AVEC...</p>
        <button type="button" class="btn btn-primary d-block w-75 mx-auto mt-3" id="googleBtn">
          <i class="bi bi-google"></i> Google
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConnexionForm",
  };
  </script>
  
  <style scoped>
  /* Ajoutez les styles personnalisés ici si nécessaire */
  </style>
  