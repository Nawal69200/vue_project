<!-- src/components/SearchButton.vue -->
<template>
    <div class="search-form ms-auto">
      <form class="d-flex">
        <input
          class="form-control"
          type="search"
          placeholder="Rechercher"
          aria-label="Search"
        />
        <button class="btn btn-success" type="submit">
          <i class="bi bi-search"></i> Rechercher
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchButton",
  };
  </script>
  
  <style scoped>
  /* Styles personnalisés pour SearchButton.vue */
  </style>
  