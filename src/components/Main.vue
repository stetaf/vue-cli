<template>
  <main>
    <div class="container">
      <Movies />
    </div>
  </main>
</template>

<script>
  import Movies from './core/Movies.vue'

  export default {
    name: 'Main',
    components: {
      Movies
    }
  }
</script>

<style scoped lang="scss">

</style>
