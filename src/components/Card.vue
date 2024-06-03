

<script>

  export default {
    props:{
      cardObject: Object


    },
    
    
  }
</script>

<template>
  <li class=" list-unstyled">{{ cardObject.id }} - {{ cardObject.name }}

  </li>
</template>



<style lang="scss" scoped>

</style>