<script>
  export default {
    name:'paginator',
    props:{
      data:Object
    },
    methods: {
      getApi(link) {
        
        this.$emit('getApi', link);
        
      }
    }
    
  }
</script>

<template>
  

  <nav class="m-auto" aria-label="...">
      <ul class="pagination">
    
        <li v-for="link in data.links" :key="link.label"  class="page-item" ><a :disabled="link.active || (!link.url && link.label!='...')" v-html="link.label"  class="page-link" href="#" @click="getApi(link.url)"></a></li>
        
        
      </ul>
  </nav>

  
</template>



<style lang="scss" scoped>

</style>