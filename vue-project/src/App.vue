<template>
  <div id="app">
    <Navbar /> <!-- Inclure le composant Navbar ici -->
    <main>
      <router-view></router-view>
      <div v-for="product in products" :key="product.id">
        {{ product.name }}
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';  
import Footer from './components/Footer.vue';

import axios from 'axios';
import { ref, onMounted } from 'vue';

const products = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('data.json');
    products.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchData);
</script>

<style scoped>
/* App.vue or main.css */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #F7F0D7;
    color: #333333;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

h1, h2, h3 {
    color: #FF6F61;
    font-family: 'Playfair Display', serif;
}

h5 {
    color: #FF8C42;
    font-family: 'Playfair Display', serif;
}

button.btn-success:hover {
    background-color: #28a745;
    opacity: 0.8;
}

.card-text {
    color: #666666;
}

.card-img-top2 {
    height: 150px; 
}

.card-text2 {
    height: 80px;
}
</style>
