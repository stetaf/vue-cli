<template>
  <div class="row">
    <div class="col-3" v-for="(movie, index) in movies" :key="movie.id">
      <div :class="[(index < 4) ? 'card mb-3 mt-3' : 'card mb-3 ']">
        <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" :alt="movie.original_title + ' cover'">
      </div>
    </div>
  </div>
</template>

<script>
  const axios = require('axios').default;

  export default {
    name: 'Movies',
    data() {
      return {
        movies: null
      }
    },
    mounted() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=5eb5e38903b62b2d5616df76724f5b67&language=en-US&page=1&include_adult=false&query=marvel')
            .then(resp => {
              this.movies = resp.data.results;
            })
            .catch(e => {
              console.log('Sorry, something went wrong! Error: ' + e);
            });
    }
  }
</script>

<style scoped lang="scss">

</style>
