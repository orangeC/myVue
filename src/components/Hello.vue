<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>vue Hello</h2>
    <h1>{{ this.$store.state.count }}</h1>
    <Button v-on:click="userNameChange" type="primary">+1</Button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello to Your Vue.js App'
    }
  },
  methods: {
    userNameChange () {
      this.$store.commit('increment')
    }
  }
}
// 创建一个 Counter 组件
// const Counter = {
//   template: `<h1>{{ count }}</h1>`,
//   computed: {
//     count () {
//       return this.$store.state.count
//     }
//   }
// }
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
