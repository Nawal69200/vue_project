<!-- src/components/Header.vue -->
<template>
    <header>
      <Navbar />
    </header>
  </template>
  
  <script>
  import Navbar from "./Navbar.vue";
  
  export default {
    name: "Header",
    components: {
      Navbar,
    },
  };
  </script>
  
  <style scoped>
/* Header.vue */
header {
    background-color: #F4A261;
}
  </style>
  