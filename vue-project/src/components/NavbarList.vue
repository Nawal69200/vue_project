<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand">
        <img src="../../assets/logo.png" alt="logo">
      </router-link>
      <div class="dropdown ms-3">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-person-circle"></i>
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
          <li><router-link class="dropdown-item" to="/connexion">CONNEXION</router-link></li>
          <li><router-link class="dropdown-item" to="/inscription">INSCRIPTION</router-link></li>
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link" to="/">Accueil</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/evenements">Evénements</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/gallerie_photos">Galerie photos</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/favoris">Favoris</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Contactez-nous</router-link></li>
        </ul>
        <div class="search-form ms-auto">
          <form class="d-flex">
            <input class="form-control" type="search" placeholder="Rechercher" aria-label="Search">
            <button class="btn btn-success" type="submit">
              <i class="bi bi-search"></i> Rechercher
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>
