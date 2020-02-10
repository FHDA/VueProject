<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <HelloWorld/>



  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'HOME'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
