<script>
  import axios from 'axios';
  import { store } from '../assets/data/store';

  export default {
    name: 'postDetail',
    data() {
      return {
        store
      }
    },
    methods: {
      getApi() {
        console.log(this.$route.params.slug); 

        axios.get(store.apiUrl + 'project-by-slug/' + this.$route.params.slug)
          .then(result => {
            this.store.project=result.data.project;
            console.log(result.data);
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    },

    mounted() {
      this.getApi();
    }
  }
</script>

<template>
 
  <div class="p-5 d-flex flex-column align-items-center">

    <h1 class="mb-5">{{store.project.name}}</h1>
    <img class=" w-50 mb-2" :src="store.project.image" :alt="store.project.name">
    <p>{{store.project.image_original_name}}</p>
    <p class="mt-5">{{store.project.description}}</p>
    

  </div>
</template>

<style lang="scss" scoped>

</style>
