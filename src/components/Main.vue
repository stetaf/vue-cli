<template>
  <main>
    <div class="container">
      <div class="row">

      </div>
    </div>
  </main>
</template>

<script>
  const axios = require('axios').default;

  export default {
    name: 'Main',
    props: {
      msg: String
    },
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
