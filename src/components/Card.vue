

<script>

  export default {
    props:{
      cardObject: Object


    },
    
    
  }
</script>

<template>
  <router-link :to="{name:'projectDetails',params:{slug:cardObject.slug}}" >{{ cardObject.id }} - {{ cardObject.name }}</router-link>

</template>



<style lang="scss" scoped>

</style>