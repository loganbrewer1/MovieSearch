<template>
  <div>
    <div>
      <div v-if="movies.length === 0">
        <div class="beforeSearch">
          <div class="search bar" style="padding-top: 50px">
            <h1>Welcome to Movie Search!</h1>
            <p>Please use the search bar below to find information about movies.</p>
            <search-bar @search-results="handleSearchResults"></search-bar>
          </div>
        </div>
      </div>
    </div>
    <div v-if="movies.length > 0">
      <div class="afterSearch">
        <div class="search bar" style="padding-top: 50px">
          <h1>Movie Search</h1>
          <p>Look at other movies</p>
          <search-bar @search-results="handleSearchResults"></search-bar>
        </div>
        <div v-if="movies.length > 0" class="content" style="padding-bottom: 100px;">
          <br> <br>
          <h2>Here are your movie results</h2>
          <ul id="movies">
            <li v-for="movie in movies" :key="movie.movie_id" class="movie">
              <h2> <br> {{ movie.title }} <br> </h2>
              <p> {{movie.popularity_summary}}</p>
              <img :src="movie.poster_image_url" alt="Movie Poster">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import SearchBar from '~/components/SearchBar.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    SearchBar
  },
  data() {
    return {
      movies: []
    }
  },
  methods: {
    handleSearchResults(results) {
      console.log(results)
      this.movies = results
    }
  }
})
</script>

<style>
.beforeSearch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.afterSearch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.content {
  text-align: center;
  width: 80vw;
}

.movie img {
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
}

#movies {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

</style>
