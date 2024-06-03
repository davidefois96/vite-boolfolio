<script>
  import Card from '../components/Card.vue';
 
  import Paginator from '../components/Paginator.vue';
 
  import axios from 'axios';
  import { store } from '../assets/data/store.js';

  export default {
    components: {

      Card,
      Paginator
    },
    data() {
      return {
        store ,
        paginatorData:{}
      }
    },
    methods: {
      getApi(apiUrl) {
        axios.get(apiUrl)
          .then(result => {
            this.store.projects = result.data.data;
            this.paginatorData.current_page=result.data.current_page;
            this.paginatorData.links=result.data.links;
            this.paginatorData.total=result.data.total;

            console.log(result.data.data);
          })
          .catch(error => {
            this.store.errorMessage = error.message;
            
          })
      }
    },
    mounted() {
      this.getApi(store.apiUrl);
      
    }
  }
</script>

<template>
  <div class="container text-center p-4">
    <h1 class="mb-5">I miei progetti</h1>

    <div class="d-flex flex-column">
      
       
        <Card v-for="card in store.projects" :key="card.id" 
            :cardObject=card
        />  
        <Paginator class="mt-5" :data="paginatorData" @getApi="getApi" />

      
      
      
      
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>