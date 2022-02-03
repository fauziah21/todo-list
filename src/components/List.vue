<template>
  <div>
      <ul v-if="listNotes && listNotes.length > 0">
        <li v-for="(list, index) in listNotes" :key="index">
          <div class="content">
            <p>{{ list.note }}</p>
            <span> Note {{ index + 1}}</span>
          </div>
          <div class="isCompleted">{{ list.isCompleted }}</div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'List',
    computed: {
      listNotes() {
        return this.$store.getters.getListNotes;
      }
    },
    async mounted() {
      this.$store.dispatch('fetchNotes');
    }
}
</script>

<style scoped>
ul{
  padding: 0;
  margin: 20px 500px;
  list-style: none;
}

li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

li .content{
  text-align: left;
}

li .content span{
  font-size: 14px;
}

.isCompleted{
  color: red;
}

/* breakpoint */
@media only screen and (max-width: 768px){
    ul{
      margin: 20px 100px;
    }
}

</style>