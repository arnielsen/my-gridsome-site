<template>
  <div class="layout">
    <NavBar />
    <slot/>
    
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>


<style>

</style>
