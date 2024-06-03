<script>
  export default {
    name:'Header'
    
  }
</script>

<template>
  
<nav class="navbar text-bg-dark py-3">
  <div class="container">

    <ul class="d-flex w-75 justify-content-around m-auto">
      <li><router-link :to="{name:'home'}">Home</router-link></li>
      <li><router-link :to="{name:'about'}">Chi siamo?</router-link></li>
      <li><router-link :to="{name:'projects'}">I miei Progetti</router-link></li>
      <li><router-link :to="{name:'contacts'}">Contatti</router-link></li>
    </ul>
    

  </div>
</nav>

  
</template>



<style lang="scss" scoped>

li{
  list-style: none;
  a{
    text-decoration: none;
    color: white;
    &:hover{text-decoration: underline;}
    &.active{color: darkred;}
  }
}

</style>