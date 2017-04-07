<template>
  <div class="contentOne">
    <h1>{{ msg }}</h1>
    <h2>vue contentOne</h2>
  </div>
</template>

<script>
export default {
  name: 'Contentone',
  data () {
    return {
      msg: '新增和启动'
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
