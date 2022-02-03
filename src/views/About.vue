<template>
  <div>
    <navbar-component></navbar-component>
    <div class="about">
      <p>About page</p>
      <router-link to="/" >
        <button class="btn-link" >Back to Home</button>
      </router-link>
    </div>
    <footer>
      Copyright @copy 2022.
    </footer>
  </div>
</template>

<script>
import DashboardLayout from '../layouts/Dashboard.vue';
export default {
    name: 'About',
    components: {
      DashboardLayout
    }
}
</script>

<style scoped>
.about{
  padding: 16px;
}

.about p{
  font-size: 18px;
}

footer{
    width: 100%;
    font-weight: bold;
}
</style>