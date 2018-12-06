<template>
  <div id="app">
    <Home />
  </div>
</template>
<script>
import Home from './views/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: rgba(0,0,0,.04);
  height: 100%;
  width: 100%;
}
</style>
