<template>
  <div id="app">
  <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="select">
        <Menu-item name="1">
            <Icon type="ios-paper"></Icon>
            内容一
        </Menu-item>
        <Menu-item name="2">
            <Icon type="ios-people"></Icon>
            内容二
        </Menu-item>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                内容三
            </template>
            <Menu-group title="使用">
                <Menu-item name="3-1">新增和启动</Menu-item>
                <Menu-item name="3-2">活跃分析</Menu-item>
                <Menu-item name="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
                <Menu-item name="3-4">用户留存</Menu-item>
                <Menu-item name="3-5">流失用户</Menu-item>
            </Menu-group>
        </Submenu>
        <Menu-item name="4">
            <Icon type="settings"></Icon>
            内容四
        </Menu-item>
    </Menu>
    <img src="./assets/logo.png">
    <div>
    <i-switch v-model="switch1" @on-change="change"></i-switch>
    </div>
    <router-view></router-view>
    <Radio-group v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </Radio-group>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      switch1: false,
      theme1: 'light'
    }
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态：' + status)
    },
    select (e) {
      if (e === '1') {
        this.$router.push('/')
      }
      if (e === '2') {
        this.$router.push('/bye')
      }
      if (e === '3-1') {
        this.$router.push('/contentOne')
      }
      if (e === '4') {
        this.$router.push('/blog')
      }
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
}
</style>
