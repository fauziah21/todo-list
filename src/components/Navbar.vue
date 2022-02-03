<template>
  <div>
      <nav>
        <div class="container">
          <router-link to="/" v-slot="{ isActive}">
            <span class="btn-link" :class="{ active: isActive }">Home</span>
          </router-link>
          <router-link to="/about" v-slot="{ isActive}">
            <span class="btn-link" :class="{ active: isActive }">About</span>
          </router-link>
        </div>
          
      </nav>
  </div>
</template>

<script >
export default {
  name: 'Navbar',
}
</script>

<style scoped>
nav{
  background: #2C3E50;
  height: 50px;
}

.container{
  padding-top: 15px;
}

.btn-link{
color: #fff;
/* background: red; */
padding-right: 16px;
padding-left: 16px;
}

.active{
  color: #00C180;
}
</style>