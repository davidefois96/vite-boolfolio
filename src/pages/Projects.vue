<script>
  import Card from '../components/Card.vue';
 
  import Paginator from '../components/Paginator.vue';
  import Loader from '../components/Loader.vue';
 
  import axios from 'axios';
  import { store } from '../assets/data/store.js';

  export default {
    components: {

      Card,
      Paginator,
      Loader
    },
    data() {
      return {
        store ,
        paginatorData:{},
        loading:true
      }
    },
    methods: {
      getApi(apiUrl, type='') {
        this.loading=true;
        axios.get(apiUrl + type)
          .then(result => {
            this.loading=false;

            switch (type) {
              case 'types':

                this.store.types = result.data;
                break;
            
              case 'technologies':
                this.store.technologies = result.data;
                
                break;
            
              default:
                this.store.projects = result.data.data;
                this.paginatorData.current_page=result.data.current_page;
                this.paginatorData.links=result.data.links;
                this.paginatorData.total=result.data.total;

                break;
            }
           

            console.log(result.data.data);
          })
          .catch(error => {
            this.loading=false;
            this.store.errorMessage = error.message;
            
          })
      }
    },
    mounted() {
      this.getApi(store.apiUrl, 'projects');
      this.getApi(store.apiUrl, 'technologies');
      this.getApi(store.apiUrl, 'types');
     
      
    }
  }
</script>

<template>
  <div class="container text-center p-4">
    <h1 class="mb-5">I miei progetti</h1>
    <Loader v-if="loading" />

    <div v-else class="d-flex flex-column  align-items-center">
      
       
        <Card v-for="card in store.projects" :key="card.id" 
            :cardObject=card
        />  
        <div class="my-4">
        types: <span v-for="type in store.types" :key="type.name" class="badge bg-primary me-2">{{ type.name }}</span>
        </div>
        <div>
          technologies: <span v-for="technology in store.technologies" :key="technology.name" class="badge bg-primary me-2">{{ technology.name }}</span>
        </div>
        <Paginator class="mt-5" :data="paginatorData" @getApi="getApi" />
        
      
    </div>
    
  </div>
</template>



<style lang="scss" scoped>

</style>