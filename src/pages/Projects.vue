<script>
  import Card from '../components/Card.vue';
 
  import axios from 'axios';
  import { store } from '../assets/data/store.js';

  export default {
    components: {

      Card
    },
    data() {
      return {
        store 
      }
    },
    methods: {
      getApi() {
        axios.get(this.store.apiUrl)
          .then(result => {
            this.store.projects = result.data;
            console.log(result.data);
          })
          .catch(error => {
            this.store.errorMessage = error.message;
            
          })
      }
    },
    mounted() {
      this.getApi();
      
    }
  }
</script>

<template>
  <div class="container text-center p-4">
    <h1 class="mb-5">I miei progetti</h1>

    <div class="page">
      <div>
       
        <Card v-for="card in store.projects" :key="card.id" 
            :cardObject=card
        />    

      </div>
      
      
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>