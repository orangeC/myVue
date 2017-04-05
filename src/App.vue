<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
    <i-switch v-model="switch1" @on-change="change"></i-switch>
    </div>
    <router-view></router-view>
    <router-link to="/">hello</router-link>
    <router-link to="/bye">bye</router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      switch1: false
    }
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态：' + status)
    }
  }
}
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
