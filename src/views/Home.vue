<template>
  <div>
      <DashboardLayout>
          <template #navbar>
              <navbar-component></navbar-component>
          </template>
          <template #header>
              <Header :title="title" :description="description"></Header>
          </template>
          <template #main>
              <button class="btn-tab" @click="changeTab('list-component')" :class="{active: tab === 'list-component'}">List Notes</button>
              <button class="btn-tab" @click="changeTab('add-component')" :class="{active: tab === 'add-component'}">Add New Note</button>

              <component :is="tab"></component>
          </template>
          <template #footer>
            Copyright @copy 2022.
        </template>
      </DashboardLayout>
      
  </div>
</template>

<script>
import DashboardLayout from '../layouts/Dashboard.vue';
import Header from '../components/Header.vue';
import AddNote from '../components/AddNote.vue';
import List from '../components/List.vue';

import {computed} from 'vue';

export default {
    name: 'Home',
    components: {
    Header,
    DashboardLayout,
    'add-component': AddNote,
    'list-component': List,
  },
  data() {
      return {
          title: 'My To-do Lists',
          tab: 'list-component',
          isActive: true
      }
  },
  provide(){
      return{
          title: computed(() => this.title)
      }
  },
  methods: {
      changeTab(tabname){
          this.tab = tabname;
      }
  }
}
</script>

<style scoped>
.btn-tab{
    margin: 8px;
    background-color: transparent;
    border-style: none none groove none;
    border-color: #00C180;
    width: 15%;
    padding: 8px;
    font-size: 18px;
    color: rgb(148, 148, 148);
    
}

.btn-tab:hover{
    cursor: pointer;
}

.active{
    color: red;
}

</style>