<template>
  <div>
    <input type="text" v-model="searchQuery" @keydown.enter="searchMovies" class="search-bar">
  </div>
</template>

<script>
//const axios = require('axios');
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    async searchMovies() {
      console.log("Searching movies")
      try {
        const response = await axios.get(`http://localhost:4000/movies?search=${this.searchQuery}`)
        this.$emit('search-results', response.data);
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }
  }
}
</script>

<style>
.search-bar {
  width: 300px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #333;
  border-radius: 5px;
}
</style>
