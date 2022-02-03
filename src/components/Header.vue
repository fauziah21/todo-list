<template>
  <div class="content">
      <h1>{{ title }}</h1>
      <p>{{count}} {{ description }}</p>
      <input type="search" placeholder="Search..">
  </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
      return {
        description: ' Catatan Kegiatan Harianku',
      }
    },
    inject: ['title'],
    computed: {
      title() {
        return this.$store.state.title;
      },
      count(){
        return this.$store.getters.getCountNotes;
      }
    },
}
</script>

<style scoped>
.content{
  color: #fff;
}

.content input{
  padding: 8px;
  border-radius: 8px;
  border: 0;
  width: 201px;
}
</style>