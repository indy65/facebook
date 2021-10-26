<template>
  <div id="app">
    <c-login></c-login>
  </div>
</template>

<script>

import login from"./components/longin.vue"

export default {
  name: 'App',
  components: {
    "c-login":login
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
