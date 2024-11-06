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
      <Logo />
      <DropdownMenu @openConnexion="openConnexionModal" @openInscription="openInscriptionModal"/>
      <div class="collapse navbar-collapse" id="navbarNav">
        <NavbarList />
        <SearchButton />
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo.vue";
import DropdownMenu from "./DropdownMenu.vue";
import NavbarList from "./NavbarList.vue";
import SearchButton from "./SearchButton.vue";

export default {
  name: "Navbar",
  components: {
    Logo,
    DropdownMenu,
    NavbarList,
    SearchButton,
  },
  methods: {
    openConnexionModal() {
      this.$emit("openConnexion");
    },
    openInscriptionModal() {
      this.$emit("openInscription");
    },
  },
};
</script>
