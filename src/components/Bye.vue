<template>
  <div class="bye">
    <h1>{{ msg }}</h1>
    <h2>vue Bye</h2>
    <div>{{ this.$store.state.count }}</div>
  </div>
</template>

<script>
export default {
  name: 'Bye',
  data () {
    return {
      msg: 'Bye to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
}
</style>
