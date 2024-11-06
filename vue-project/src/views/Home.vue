<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Modal Connexion -->
    <div v-if="showConnexionModal" class="modal-overlay">
      <div class="modal">
        <button @click="closeConnexionModal" class="close-btn">X</button>
        <ConnexionForm />
      </div>
    </div>

    <!-- Modal Inscription -->
    <div v-if="showInscriptionModal" class="modal-overlay">
      <div class="modal">
        <button @click="closeInscriptionModal" class="close-btn">X</button>
        <InscriptionForm />
      </div>
    </div>

    <!-- Contenu principal de la page -->
    <div class="container my-5">
      <!-- Recette de la semaine -->
      <div class="text-center mb-5">
        <h2>Recette de la semaine</h2>
        <div class="card border-5 border-black">
          <img
            src="/images/recette_semaine.jpg"
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
        <RecipeCard
          title="Nouilles aux crevettes et oeufs de caille"
          description="Savourez notre plat exquis de Nouilles aux Crevettes et oeufs de cailles, aux herbes fraîches une harmonie parfaite entre terre et mer."
          image="/images/nouilles.jpg"
          link="../recettes/nouilles_crevettes.html"
        />
        <RecipeCard
          title="Pâtes à la crème"
          description="Des pâtes à la crème onctueuse, rehaussées de fromage fondu et d'une touche d'ail, offrent un repas réconfortant et délicieux."
          image="/images/pates_creme.jpg"
          link="../recettes/pates_creme.html"
        />
        <RecipeCard
          title="Burger du chef"
          description="Ce burger appétissant se distingue par son pain brioché doré, ses tranches juteuses de bœuf de première qualité, et son mélange savoureux de fromages fondants."
          image="/images/burger.jpg"
          link="../recettes/burger.html"
        />
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
                    des cubes de fromage, des tomates cerises, et une variété de graines et de légumes croquants.
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
        <label for="email" class="form-label">Recevez nos dernières recettes directement dans votre boîte mail.</label>
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

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
// Importation des composants
import RecipeCard from "@/components/RecipeCard.vue";
import ConnexionForm from "@/components/ConnexionForm.vue";
import InscriptionForm from "@/components/InscriptionForm.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    RecipeCard,
    ConnexionForm,
    InscriptionForm
  },
  data() {
    return {
      showConnexionModal: false,
      showInscriptionModal: false,
    };
  },
  methods: {
    openConnexionModal() {
      this.showConnexionModal = true;
    },
    closeConnexionModal() {
      this.showConnexionModal = false;
    },
    openInscriptionModal() {
      this.showInscriptionModal = true;
    },
    closeInscriptionModal() {
      this.showInscriptionModal = false;
    },
  },
};
</script>

<style scoped>
/* Styles pour les modals */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
