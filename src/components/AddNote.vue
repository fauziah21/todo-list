<template>
  <div >
      <div class="box-input">
        <input type="text" v-model="note" @input="onInput">
      </div>
      <div class="box-btn-add">
        <button @click="addNote">Add Note</button>
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'Addnote',
    data() {
        return {
            note: ''
        }
    },
    methods: {
        onInput(event){
            console.log(event.target.value);
            console.log(this.capitalizeWords(event.target.value));
        },
        async addNote(){
            const payload = {
                id: this.$store.getters.getCountNotes + 1,
                note: this.capitalizeWords(this.note),
                isCompleted: false
            }

            const res = await this.$store.dispatch('addNote', payload);

            if(res){
                this.$moshaToast('Berhasil Menambahkan Note', {
                    position: 'bottom-center',
                    type: 'success'
                });
                this.note= '';
            }
            
        }
    }
}
</script>

<style scoped>
.box-input{
    margin: 20px;
}

.box-btn-add{
    margin: 20px;
}
</style>