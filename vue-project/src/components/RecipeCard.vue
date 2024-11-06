<template>
  <div class="container my-5">
    <!-- Recette de la semaine -->
    <div class="text-center mb-5">
      <h2>Recette de la semaine</h2>
      <div class="card border-5 border-black">
        <img
          src="@/assets/boeuf_saute.jpg"
          class="card-img-top object-fit-cover"
          alt="Recette de la semaine"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title mt-3">Chakchouka épicée</h5>
          <p class="card-text text-center">
            Un plat savoureux et épicé avec des tomates, des poivrons, des oeufs et des épices. Parfait pour vos repas de tous les jours.
          </p>
          <div class="mt-auto text-center">
            <a href="../recettes/chakchouka.html" class="btn btn-warning mt-3">Voir la recette complète</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Vidéo du jour -->
    <div class="container my-5">
      <div class="text-center mb-4">
        <h3>Vidéo du jour</h3>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Mkx4iRqcbr4?si=ArEwfaYzLE5BQO-g"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Recettes de saisons -->
    <div class="container my-5">
      <h3 class="mb-4 text-center">Recettes de saisons</h3>
      <div class="card border-black border-5 mb-3 mx-auto col-12 col-md-12 col-lg-10">
        <div class="d-flex flex-column flex-md-row h-100">
          <div class="col-12 col-md-4 d-flex">
            <img
              src="/images/nouilles.jpg"
              class="img-fluid rounded-start w-100 h-100 object-fit-cover"
              alt="Nouilles aux crevettes"
            />
          </div>
          <div class="col-12 col-md-8 d-flex flex-column">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Nouilles aux crevettes et oeufs de caille</h5>
              <p class="card-text text-center flex-grow-1">
                Savourez notre plat exquis de Nouilles aux Crevettes et oeufs de cailles, aux herbes fraîches une harmonie parfaite entre terre et mer.
                Les nouilles al dente sont sautées avec des crevettes juteuses, rehaussées par des épices délicates et une sauce savoureuse.
              </p>
              <div class="d-flex justify-content-center align-items-center mt-auto">
                <div class="me-2">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                </div>
                <span>(7 avis)</span>
              </div>
              <div class="mt-3 text-center">
                <a href="../recettes/nouilles_crevettes.html" class="btn btn-warning">Voir la recette</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recettes végétariennes -->
      <h3 class="mb-4 mt-5 text-center">Recettes végétariennes</h3>
      <div class="card border-black border-5 mb-3 mx-auto col-12 col-md-12 col-lg-10">
        <div class="d-flex flex-column flex-md-row h-100">
          <div class="col-12 col-md-4 d-flex">
            <img
              src="/images/pates_creme.jpg"
              class="img-fluid rounded-start w-100 h-100 object-fit-cover"
              alt="Pâtes à la crème"
            />
          </div>
          <div class="col-12 col-md-8 d-flex flex-column">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Pâtes à la crème</h5>
              <p class="card-text text-center flex-grow-1">
                Des pâtes à la crème onctueuse, rehaussées de fromage fondu et d'une touche d'ail, offrent un repas réconfortant et délicieux.
                Idéales pour un dîner rapide, elles se marient parfaitement avec des herbes fraîches et une pincée de poivre noir pour une saveur irrésistible.
              </p>
              <div class="d-flex justify-content-center align-items-center mt-auto">
                <div class="me-2">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                </div>
                <span>(12 avis)</span>
              </div>
              <div class="mt-3 text-center">
                <a href="../recettes/pates_creme.html" class="btn btn-warning">Voir la recette</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recettes populaires -->
      <h3 class="mb-4 mt-5 text-center">Recettes populaires</h3>
      <div class="card border-black border-5 mb-3 mx-auto col-12 col-md-12 col-lg-10">
        <div class="d-flex flex-column flex-md-row h-100">
          <div class="col-12 col-md-4 d-flex">
            <img
              src="/images/burger.jpg"
              class="img-fluid rounded-start w-100 h-100 object-fit-cover"
              alt="Burger du chef"
            />
          </div>
          <div class="col-12 col-md-8 d-flex flex-column">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Burger du chef</h5>
              <p class="card-text text-center flex-grow-1">
                Ce burger appétissant se distingue par son pain brioché doré, ses tranches juteuses de bœuf de première qualité,
                et son mélange savoureux de fromages fondants. Garnitures fraîches et colorées, comme la laitue croquante, les tomates mûres
                et les oignons caramélisés, se marient parfaitement avec une sauce maison crémeuse.
              </p>
              <div class="d-flex justify-content-center align-items-center mt-auto">
                <div class="me-2">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                </div>
                <span>(25 avis)</span>
              </div>
              <div class="mt-3 text-center">
                <a href="../recettes/burger.html" class="btn btn-warning">Voir la recette</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Derniers Ajouts -->
    <div class="container my-5 text-center">
      <h3 class="mb-4">Derniers Ajouts</h3>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-6">
            <div class="card border-black border-5">
              <div class="card-body d-flex flex-column">
                <img
                  src="/images/salade_poulet-grille.jpg"
                  class="card-img-top object-fit-cover"
                  alt="Salade au poulet grillé"
                />
                <h5 class="card-title mt-3">Salade gourmande au poulet grillé</h5>
                <p class="card-text">
                  Cette salade gourmande au poulet grillé est un mélange parfait de saveurs et de textures. Elle combine des morceaux de poulet juteux,
                  des cubes de fromage, des tomates cerises, et une variété de graines et de légumes croquants. Un repas équilibré et délicieux pour toutes
                  les occasions.
                </p>
                <div class="d-flex flex-column align-items-center mt-auto">
                  <div class="d-flex align-items-center mb-2">
                    <div class="me-2">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                    </div>
                    <span>(5 avis)</span>
                  </div>
                  <a href="../recettes/salade_poulet_grille.html" class="btn btn-warning mt-3">Voir la recette</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Formulaire de Newsletter -->
    <form
      method="GET"
      action=""
      class="custom-form-style my-5 bg-light p-4 text-center mx-auto col-11 col-md-10 col-lg-8"
    >
      <h4 class="text-primary">Abonnez-vous à notre newsletter</h4>
      <label for="email" class="form-label"
        >Recevez nos dernières recettes directement dans votre boîte mail.</label
      >
      <div class="input-group mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Entrez votre email"
        />
        <button id="submit-button" class="btn btn-primary" type="button">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RecipePage",
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques ici pour personnaliser la page */
</style>
