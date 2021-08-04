<template>
    <div class="col-3">
      <div :class="[(num < 4) ? 'card mb-3 mt-3' : 'card mb-3 ']">
        <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" :alt="movie.original_title + ' cover'">
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Movies',
    props: {
      movie: Object,
      num: Number
    }
  }
</script>

<style scoped lang="scss">

</style>
