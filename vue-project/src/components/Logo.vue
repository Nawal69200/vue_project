<!-- src/components/Logo.vue -->
<template>
  <a class="navbar-brand" href="./index.html">
    <img :src="logoSrc" alt="logo" />
  </a>
</template>

<script>
import logo from "@/assets/logo.png"; // Import direct de l'image depuis le dossier assets

export default {
  name: "Logo",
  data() {
    return {
      logoSrc: logo, // Utilisation du chemin d'import
    };
  },
};
</script>

<style scoped>
/* Styles personnalisés pour Logo.vue */
.navbar-brand img {
  width: 80px;
  height: 80px;
}
</style>
