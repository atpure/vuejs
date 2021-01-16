<template>
  <div id="helloworld">
    <img alt="Vue logo" src="../assets/logo.png">
    <Body msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Body from './Body.vue'

export default {
  name: 'body',
  components: {
    Body
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
