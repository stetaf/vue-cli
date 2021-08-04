<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="./../assets/logo.png" alt="">
      </router-link>
    </div>
    <div class="nav">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 10px 30px;
  text-align: left;
  .nav {
    display: flex;
    align-items: center;
    
    a { 
      font-size: 18px;
      color: #dc1a28;
      margin-left: 15px;
    }
  }
}
</style>
