

<script>
  import Header from './components/Header.vue'
  export default {
    components:{
      Header
    }
    
  }
</script>

<template>
  <Header />
  <div class="container">
    

    <router-view></router-view>
    


  </div>
  
</template>

<style lang="scss">



</style>
