<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="FHDATime"/> -->
    <!-- <p>dsnaksndlas</p> -->
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Contact">Contact</router-link></li>
      <li><router-link to="/About">About</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
 

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
}
// export default {
//   name: 'App'
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
