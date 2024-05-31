

<script>
  import Card from './components/Card.vue';
  import axios from 'axios';
  import { store } from './assets/data/store.js';

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
  <div class="page">
    <div>
      <h1>Progetti</h1>
      <Card v-for="card in store.projects" :key="card.id" 
          :cardObject=card
      />    

    </div>
    
    
  </div>
</template>

<style lang="scss">


.page{
  padding: 40px;
  display: flex;
  justify-content: center;
}
h1{margin-bottom: 30px;}
</style>
