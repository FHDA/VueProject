<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <!-- <router-link to="/">
        <el-button type="primary">Home</el-button>
      </router-link>
      <router-link to="/Contact">
        <el-button type="primary">Contact</el-button>
      </router-link>
      <router-link to="/About">
        <el-button type="primary">About</el-button>
      </router-link> -->

      <el-row :gutter="80">
        <el-col :span="8"><div class="grid-content bg-purple">
            <router-link to="/">Home</router-link>
          </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
            <router-link to="/About">
              About
              <i class="el-icon-info"></i>
            </router-link>
          </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
            <router-link to="/Contact">
              Contact
              <i class="el-icon-phone"></i>
            </router-link>
          </div></el-col>
        <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
      </el-row>

      <!-- <button @click="$router.push('about')">Click to Navigate</button -->

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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 20px;
}


</style>
