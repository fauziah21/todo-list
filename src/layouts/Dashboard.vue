<template>
  <div class="container">
      <navbar class="navbar">
          <slot name="navbar"></slot>
      </navbar>
      <header class="header">
          <slot name="header"></slot>
      </header>
      <main class="main">
          <slot name="main"></slot>
      </main>
      <footer class="footer">
          <slot name="footer"></slot>
      </footer>
  </div>
</template>

<script>
export default {
    name: 'DashboardLayout'
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container{
    text-align: center;
    color: #2c3e50;
    position: relative;
    /* max-width: 90vw; */
    margin: auto;
}

.header{
    background: #00C180;
    width: 100%;
    padding: 16px;
}

.main{
    padding: 16px;
}

.footer{
    /* background: black; */
    /* color: white; */
    width: 100%;
    margin-top: auto;
    font-weight: bold;
    margin-bottom: 10px;
}
</style>