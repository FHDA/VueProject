<template>
  <div id="app">
    <!-- <main> -->
      <el-row :gutter="80">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <router-link to="/">Home</router-link>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <router-link to="/About">About
              <i class="el-icon-info"></i>
            </router-link>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <router-link to="/Contact">Contact
              <i class="el-icon-phone"></i>
            </router-link>
          </div>
        </el-col>
        <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
      </el-row>

    <!-- <button @click="$router.push('about')">Click to Navigate</button -->

    <router-view/>
    <!-- </main> -->
    
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

</script>

<style>

#app {
  background-image: url('./assets/library.jpg');
  background-size: cover;
  background-position: bottom;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  transition: 0.4s; 

  color: #3d8196;
  /* margin-top: 60px; */
}

/* main {
  min-height: 88vh;
  background-image: linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
} */

.bg-purple {
  background: #cacdd3;
}

.grid-content {
  border-radius: 4px;
  min-height: 20px;
}


</style>
